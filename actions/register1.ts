'use server'

import { prisma } from '@/db';
import { registerPage1Schema } from '@/schemas/register';
import { z } from 'zod';

export const createAccount = async (values: z.infer<typeof registerPage1Schema>) => {
  try {
    // Cek apakah email sudah terdaftar di database
    const existingUser = await prisma.user.findUnique({
      where: { email: values.email },
    });

    // Jika user dengan email tersebut sudah ada, kembalikan error
    if (existingUser) {
      return { error: 'Email sudah digunakan. Silakan gunakan email lain.' };
    }

    // Jika email belum ada, buat akun baru
    const user = await prisma.user.create({
      data: {
        name: values.nama,
        password: values.password,
        email: values.email,
        // Field lain bisa ditambahkan jika diperlukan
      },
    });

    return {
      success: 'success',
      data: user,
    };
  } catch (error) {
    // Tangani error lain sebagai internal server error
    return {
      error: 'Internal server error',
    };
  }
};
