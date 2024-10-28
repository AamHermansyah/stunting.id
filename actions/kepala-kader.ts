'use server';

import { prisma } from '@/db';
import { registerKepalaKaderAccount } from '@/schemas/register';
import { z } from 'zod';
import bcrypt from 'bcrypt';

export const handleKepalaKaderAccount = async (values: z.infer<typeof registerKepalaKaderAccount>) => {
  try {
    const email = values.email.toLowerCase();

    // Cek apakah email sudah digunakan
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: 'Email sudah digunakan. Silakan gunakan email lain.' };
    }

    // Cek apakah NIK sudah digunakan
    const existingNik = await prisma.user.findFirst({
      where: { nik: values.nik },
    });

    if (existingNik) {
      return { error: 'NIK sudah digunakan. Silakan gunakan NIK lain.' };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(values.password, 10);

    // Buat user baru dengan role KEPALA_KADER
    const user = await prisma.user.create({
      data: {
        name: values.nama,
        email,
        password: hashedPassword,
        address: values.alamat,
        nik: values.nik,
        role: 'KEPALA_KADER', // Set role to KEPALA_KADER
      },
    });

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.error('Error handling kepala kader account:', error);
    return {
      success: false,
      error: 'Internal server error',
    };
  }
};

// Fungsi untuk menghapus kepala kader
export const deleteKepalaKader = async (id: string) => {
  try {
    await prisma.user.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error('Error deleting kepala kader:', error);
    return { success: false, error: 'Gagal menghapus akun kepala kader.' };
  }
};
