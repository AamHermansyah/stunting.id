import { prisma } from "@/db";

export const getAllUsers = async (searchQuery: string | null = null) => {
  try {
    const users = await prisma.user.findMany({
      where: searchQuery
        ? {
            name: {
              contains: searchQuery,
              mode: 'insensitive', // Agar pencarian tidak case-sensitive
            },
          }
        : {}, // Jika tidak ada query, ambil semua data
      include: {
        _count: {
          select: { Child: true },
        },
      },
    });

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
