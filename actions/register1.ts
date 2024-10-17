'use server'

import { prisma } from '@/db';
import { registerPage1Schema } from '@/schemas/register';
import { z } from 'zod';
import bcrypt from 'bcrypt';

export const createAccount = async (values: z.infer<typeof registerPage1Schema>) => {
  try {
    // Ubah email menjadi huruf kecil sebelum pengecekan dan penyimpanan
    const email = values.email.toLowerCase();

    // Cek apakah email sudah terdaftar di database
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    // Jika user dengan email tersebut sudah ada, kembalikan error
    if (existingUser) {
      return { error: 'Email sudah digunakan. Silakan gunakan email lain.' };
    }

    // Enkripsi password sebelum menyimpan ke database
    const hashedPassword = await bcrypt.hash(values.password, 10);

    // Jika email belum ada, buat akun baru
    const user = await prisma.user.create({
      data: {
        name: values.nama,
        password: hashedPassword,
        email,
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
