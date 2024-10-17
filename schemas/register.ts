import * as z from 'zod';

// Schema untuk halaman pertama (Buat Akun)
export const registerPage1Schema = z.object({
  nama: z.string().min(1, 'Nama wajib diisi'),
  email: z
  .string()
  .email('Email tidak valid')
  .min(1, 'E-mail wajib diisi')
  .transform((email) => email.toLowerCase()),
  password: z
    .string()
    .min(8, 'Password minimal 8 karakter')
    .regex(/[A-Z]/, 'Password harus memiliki minimal 1 huruf kapital'),
  confirmPassword: z
    .string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password dan Konfirmasi Password harus sama",
  path: ["confirmPassword"],
});

// Schema untuk halaman kedua (Informasi Pribadi)
export const registerPage2Schema = z.object({
  alamat: z.string().min(1, 'Alamat wajib diisi'),
  kecamatan: z.string().min(1, 'Kecamatan wajib diisi'),
  nik: z
    .string()
    .min(16, 'NIK harus 16 digit')
    .max(16, 'NIK harus 16 digit')
    .regex(/^\d+$/, 'NIK hanya boleh berisi angka'),
});
