'use server'

import { prisma } from "@/db";

export const deleteUser = async (userId: string) => {
  try {
    // Cari data orang tua berdasarkan ID
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    // Jika data orang tua tidak ditemukan
    if (!user) {
      return { error: 'Orang tua tidak ditemukan' };
    }

    // Hapus data orang tua
    await prisma.user.delete({
      where: { id: userId }
    });

    return {
      success: 'Orang tua berhasil dihapus',
    };
  } catch (error) {
    return {
      error: 'Terjadi kesalahan pada server',
    };
  }
}; 