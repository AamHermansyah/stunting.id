import * as z from 'zod';

// Schema untuk halaman login
export const loginSchema = z.object({
  email: z
    .string()
    .email('Email tidak valid')
    .min(1, 'Email wajib diisi'),
  password: z.string().min(1, 'Password wajib diisi'),
});
