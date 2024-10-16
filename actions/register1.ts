'use server'

import { prisma } from '@/db';
import { registerPage1Schema } from '@/schemas/register';
import { z } from 'zod';

export const createAccount = async (values: z.infer<typeof registerPage1Schema>) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: values.nama,
        password: values.password,
        email: values.email,
      }
    });

    return {
      success: 'success',
      data: user
    }
  } catch (error) {
    console.log(error);
    return {
      error: 'Internal server error'
    }
  }
}


