// app/api/kader/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient, Role, Gender } from "@prisma/client";
import bcrypt from 'bcrypt'; // Disarankan menggunakan bcryptjs

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, nik, email, address, district, gender, dateOfBirth } = await request.json();

    // Validasi tambahan jika diperlukan

    // Cek apakah email atau NIK sudah digunakan
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { nik },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json({ message: "Email atau NIK sudah digunakan" }, { status: 400 });
    }

    // Hash password sebelum menyimpan (misalnya, gunakan NIK sebagai password awal)
    const hashedPassword = await bcrypt.hash(nik, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        nik,
        email,
        address,
        district,
        gender: gender as Gender, // Pastikan gender sesuai dengan enum
        dateOfBirth: new Date(dateOfBirth),
        role: Role.KADER, // Set role secara langsung ke 'KADER'
        password: hashedPassword, // Pastikan untuk meng-hash password
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating kader:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const kaders = await prisma.user.findMany({
      where: {
        role: Role.KADER, // Hanya mengambil 'KADER'
      },
      select: {
        id: true,
        name: true,
        nik: true,
        email: true,
        address: true,
        district: true,
        gender: true,
        dateOfBirth: true,
        role: true,
      },
    });
    return NextResponse.json(kaders, { status: 200 });
  } catch (error) {
    console.error("Error fetching kaders:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
