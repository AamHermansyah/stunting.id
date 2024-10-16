import * as z from 'zod';

export const childSchema = z.object({
  firstName: z.string().min(1, 'Nama depan wajib diisi'),
  lastName: z.string().optional(),
  birthDate: z.string().min(1, 'Tanggal lahir wajib diisi'),
  gender: z.enum(['laki-laki', 'perempuan']),
  height: z.string().min(1, 'Tinggi badan saat lahir wajib diisi'),
  weight: z.string().min(1, 'Berat badan saat lahir wajib diisi'),
  headCircumference: z.string().min(1, 'Lingkar kepala wajib diisi'),
  armCircumference: z.string().min(1, 'Lingkar lengan wajib diisi'),
  bloodType: z.enum(['A', 'B', 'AB', 'O'], {message: "Golongan darah wajib diisi"}),
  allergy: z.enum(['ya', 'tidak'], {message:"Alergi wajib dipilih"}),
  premature: z.enum(['ya', 'tidak'], {message:"Prematur wajib dipilih"}),
  motherHeight: z.string().min(1, 'Tinggi badan ibu wajib diisi'),
  fatherHeight: z.string().min(1, 'Tinggi badan ayah wajib diisi'),
});
