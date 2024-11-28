'use server';

import { prisma } from '@/db';
import { loginSchema } from '@/schemas/login';
import { AuthCookie } from '@/types';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { z } from 'zod';

export const loginUser = async (values: z.infer<typeof loginSchema>) => {
  try {
    const { email, password } = values;

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      return { error: 'Email atau password salah.' };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { error: 'Email atau password salah.' };
    }

    const cookiePayload: AuthCookie = {
      id: user.id,
      name: user.name,
      email: user.email,
      emailVerified: user.emailVerified,
      district: user.district,
      nik: user.nik,
      role: user.role,
      createdAt: user.createdAt
    }

    cookies().set('auth', JSON.stringify(cookiePayload));

    return {
      success: 'success',
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
    };
  } catch (error) {
    return {
      error: 'Internal server error',
    };
  }
};
