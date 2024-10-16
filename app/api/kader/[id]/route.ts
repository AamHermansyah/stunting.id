import { NextResponse } from 'next/server';
import { PrismaClient, Gender } from "@prisma/client";

const prisma = new PrismaClient();

// Fungsi PUT untuk mengedit data Kader berdasarkan id
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const { name, nik, email, address, gender, dateOfBirth } = await request.json();

    const existingKader = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingKader) {
      return NextResponse.json({ message: "Kader tidak ditemukan" }, { status: 404 });
    }

    const updatedKader = await prisma.user.update({
      where: { id },
      data: {
        name,
        nik,
        email,
        address,
        gender: gender as Gender,
        dateOfBirth: new Date(dateOfBirth),
      },
    });

    return NextResponse.json(updatedKader, { status: 200 });
  } catch (error) {
    console.error("Error updating kader:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

// Fungsi DELETE untuk menghapus data Kader berdasarkan id
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const existingKader = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingKader) {
      return NextResponse.json({ message: "Kader tidak ditemukan" }, { status: 404 });
    }

    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Kader berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting kader:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
