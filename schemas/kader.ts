// schemas/kader.ts
import * as z from "zod";

export const kaderSchema = z.object({
  name: z.string().min(1, "Nama Kader diperlukan"),
  nik: z.string()
    .min(16, "NIK harus 16 digit")
    .max(16, "NIK harus 16 digit"),
  email: z.string().email("Email tidak valid"),
  address: z.string().min(1, "Alamat diperlukan"),
  gender: z.enum(["LAKI_LAKI", "PEREMPUAN"], {
    errorMap: () => ({ message: "Jenis kelamin diperlukan" }),
  }),
  dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Tanggal lahir tidak valid",
  }),
});
