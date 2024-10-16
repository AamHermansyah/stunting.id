'use server'

import { prisma } from '@/db';
import { registerPage1Schema } from '@/schemas/register';
import { Prisma } from '@prisma/client';
import { z } from 'zod';

export const createAccount = async (values: z.infer<typeof registerPage1Schema>) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: values.nama,
        password: values.password,
        email: values.email,
        // Anda bisa lewati field seperti dateOfBirth, district, atau address
      } as Prisma.UserUncheckedCreateInput, // Mengabaikan validasi field tambahan
    });
    

    return {
      success: 'success', 
      data: user
    }
  } catch (error) {
    return {
      error: 'Internal server error'
    }
  }
}


