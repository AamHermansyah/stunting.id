'use server'

import { prisma } from "@/db";

export const deleteUser = async (userId: string) => {
  try {
    // Cari data orang tua berdasarkan ID
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { Child: true }, // Sertakan anak-anak yang terkait
    });

    // Jika data orang tua tidak ditemukan
    if (!user) {
      return { error: 'Orang tua tidak ditemukan' };
    }

    // Hapus semua pengukuran terkait untuk setiap anak
    for (const child of user.Child) {
      await prisma.measurement.deleteMany({
        where: { childId: child.id },
      });
    }

    // Hapus semua anak terkait
    await prisma.child.deleteMany({
      where: { userId: userId },
    });

    // Hapus data orang tua
    await prisma.user.delete({
      where: { id: userId },
    });

    return {
      success: 'Orang tua berhasil dihapus',
    };
  } catch (error) {
    console.error("Error deleting user:", error);
    return {
      error: 'Terjadi kesalahan pada server',
    };
  }
}; 
