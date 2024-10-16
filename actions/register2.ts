'use server'

import { prisma } from '@/db';
import { registerPage2Schema } from '@/schemas/register';
import { z } from 'zod';

export const createUserInformation = async (values: z.infer<typeof registerPage2Schema>, userEmail: string) => {
  try {
    // Cek apakah user dengan email tersebut ada di database
    const existingUser = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    // Jika user tidak ditemukan, kembalikan error
    if (!existingUser) {
      return { error: 'Akun tidak ditemukan.' };
    }

    // Update data opsional seperti alamat, kecamatan, dan NIK
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
    // Tangani error lain sebagai internal server error
    return {
      success: false,
      error: 'Internal server error',
    };
  }
};
