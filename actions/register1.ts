'use server'

import { prisma } from '@/db';
import { registerPage1Schema } from '@/schemas/register';
import { z } from 'zod';
import bcrypt from 'bcrypt';

export const createAccount = async (values: z.infer<typeof registerPage1Schema>) => {
  try {
    const email = values.email.toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: 'Email sudah digunakan. Silakan gunakan email lain.' };
    }

    const hashedPassword = await bcrypt.hash(values.password, 10);

    const user = await prisma.user.create({
      data: {
        name: values.nama,
        password: hashedPassword,
        email,
      },
    });

    return {
      success: 'success',
      data: user,
    };
  } catch (error) {
    return {
      error: 'Internal server error',
    };
  }
};
