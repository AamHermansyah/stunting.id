'use server';

import { prisma } from '@/db';
import { loginSchema } from '@/schemas/login';
import bcrypt from 'bcrypt';
import { z } from 'zod';

export const loginUser = async (values: z.infer<typeof loginSchema>) => {
  try {
    const { email, password } = values;

    // Cari user berdasarkan email
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // Jika user tidak ditemukan, kembalikan error
    if (!user) {
      return { error: 'Email atau password salah.' };
    }

    // Cek apakah password cocok dengan hash yang ada di database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { error: 'Email atau password salah.' };
    }

    // Jika login berhasil, kembalikan data user (bisa juga buat session di sini)
    return {
      success: true,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    console.error('Error during login:', error);
    return {
      error: 'Internal server error',
    };
  }
};
