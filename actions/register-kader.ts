'use server';

import { prisma } from '@/db';
import { kaderSchema } from '@/schemas/kader';
import { z } from 'zod';
import bcrypt from 'bcrypt';

export const handleKaderAccount = async (values: z.infer<typeof kaderSchema>) => {
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

    // Buat user baru dengan role "KADER"
    const user = await prisma.user.create({
      data: {
        name: values.nama,
        email,
        password: hashedPassword,
        address: values.alamat,
        nik: values.nik,
        role: 'KADER', // Set role to "KADER"
      },
    });

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.error('Error handling kader account:', error);
    return {
      success: false,
      error: 'Internal server error',
    };
  }
};