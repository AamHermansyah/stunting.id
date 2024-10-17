'use server'

import { prisma } from '@/db';
import { registerPage2Schema } from '@/schemas/register';
import { z } from 'zod';

export const updateUserInformation = async (values: z.infer<typeof registerPage2Schema>, userEmail: string) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!existingUser) {
      return { error: 'Akun tidak ditemukan.' };
    }

    const existingNik = await prisma.user.findFirst({
      where: { nik: values.nik },
    });

    if (existingNik) {
      return { error: 'NIK sudah digunakan. Silakan gunakan NIK lain.' };
    }

    const updatedUser = await prisma.user.update({
      where: { email: userEmail },
      data: {
        address: values.alamat,
        district: values.kecamatan,
        nik: values.nik,
      },
    });

    return {
      success: true,
      data: updatedUser,
    };
  } catch (error) {
    console.error('Error updating user information:', error);
    return {
      success: false,
      error: 'Internal server error',
    };
  }
};
