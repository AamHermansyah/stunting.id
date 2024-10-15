import { json } from '@/lib/json'
import { prisma } from '@/db'
import { verify, JwtPayload } from 'jsonwebtoken';

export async function POST(req: Request) {
  const data = await req.json();
  let token = req.headers.get('Authorization') || '';

  let userId;
  let expirationTime;

  try {
    const decodedToken = verify(token.replace('Bearer ', ''), process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string) as JwtPayload;
    userId = decodedToken.userId;
    expirationTime = decodedToken.exp; // Waktu kadaluarsa dalam bentuk timestamp
  } catch (error) {
    console.log(error);
    return new Response(json({ message: 'Invalid token', status: 401 }));
  }

  // 2. Periksa apakah waktu kadaluarsa telah lewat
  const currentTime = Math.floor(Date.now() / 1000); // Waktu saat ini dalam bentuk timestamp
  if (expirationTime && expirationTime < currentTime) {
    return new Response(json({ message: 'Token has expired', status: 401 }));
  }

  // 3. Dapatkan data pengguna dari basis data berdasarkan ID
  let userData;
  try {
    userData = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(json({ message: 'Error retrieving user data', status: 500 }));
  }

  // 4. Periksa apakah role yang ditemukan adalah "admin"
  if (userData && userData.role === 'USER') {
    return new Response(json({ message: 'Unauthorized', status: 403 }));
  }

  try {
    // 5. Jika ya, lanjutkan proses
    const createdResume = await prisma.article.create({
      data: {
        ...data,
        authorId: userId,
      },
    });

    return new Response(json({
      message: 'Data successfully created',
      status: 201,
      data: createdResume
    }));

  } catch (error) {
    console.log(error);
    return new Response(json({ message: 'Internal server error', status: 500 }));
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get('page');
  const pageSize = searchParams.get('pageSize');
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';

  const parsedPage = page ? parseInt(page, 10) : 1;
  const parsedPageSize = pageSize ? parseInt(pageSize, 10) : 8;
  const offset = (parsedPage - 1) * parsedPageSize;

  const searchQuery = {
    OR: [
      { title: { contains: search } },
      { summary: { contains: search } },
      { content: { contains: search } },
      { category: { contains: search } },
      { tags: { contains: search } },
    ],
  };

  try {
    const articles = await prisma.article.findMany({
      where: {
        ...search ? searchQuery : {},
        // @ts-ignore
        ...(category ? { category: { contains: category } } : {}),
      },
      take: parsedPageSize,
      skip: offset,
      select: {
        id: true,
        title: true,
        summary: true,
        category: true,
        tags: true,
        image: true,
        alt_image: true,
        created_at: true,
        content: false,
        author: {
          select: {
            id: true,
            email: true,
            image: true,
            name: true
          }
        },
        authorId: true
      }
    });

    const totalArticles = await prisma.article.count({
      where: {
        ...search ? searchQuery : {},
        // @ts-ignore
        ...(category ? { category: { contains: category } } : {}),
      },
    });

    const isLastData = (parsedPage * parsedPageSize) >= totalArticles;

    return new Response(json({
      data: articles,
      pageInfo: {
        currentPage: parsedPage,
        pageSize: parsedPageSize,
        totalItems: totalArticles,
        isLastData,
      },
      status: 200
    }));
  } catch (error) {
    console.error(error);
    return new Response(json({ error: 'Internal Server Error', status: 500 }));
  } finally {
    await prisma.$disconnect();
  }
};