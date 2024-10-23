'use server';

import { prisma } from '@/db';
import { registerParrentsAccount } from '@/schemas/register';
import { z } from 'zod';
import bcrypt from 'bcrypt';

export const handleParrentAccount = async (values: z.infer<typeof registerParrentsAccount>) => {
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

    // Buat user baru
    const user = await prisma.user.create({
      data: {
        name: values.nama,
        email,
        password: hashedPassword,
        address: values.alamat,
        district: values.kecamatan,
        nik: values.nik,
      },
    });

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    console.error('Error handling parent account:', error);
    return {
      success: false,
      error: 'Internal server error',
    };
  }
};
  