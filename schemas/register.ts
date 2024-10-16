import * as z from 'zod';

// Schema untuk halaman pertama (Buat Akun)
export const registerPage1Schema = z.object({
  nama: z.string().min(1, 'Nama wajib diisi'),
  email: z.string().email('Email tidak valid').min(1, 'E-mail wajib diisi'),
  password: z
    .string()
    .min(8, 'Password minimal 8 karakter')
    .regex(/[A-Z]/, 'Password harus memiliki minimal 1 huruf kapital')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password harus memiliki minimal 1 simbol'),
  confirmPassword: z
    .string()
    .min(8, 'Konfirmasi password minimal 8 karakter')
    .regex(/[A-Z]/, 'Konfirmasi password harus memiliki minimal 1 huruf kapital')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Konfirmasi password harus memiliki minimal 1 simbol'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password dan Konfirmasi Password harus sama",
  path: ["confirmPassword"],
});

// Schema untuk halaman kedua (Informasi Pribadi)
export const registerPage2Schema = z.object({
  alamat: z.string().min(1, 'Alamat wajib diisi'),
  kecamatan: z.string().min(1, 'Kecamatan wajib diisi'),
  NIK: z
    .string()
    .min(16, 'NIK harus 16 digit')
    .max(16, 'NIK harus 16 digit')
    .regex(/^\d+$/, 'NIK hanya boleh berisi angka'),
});
