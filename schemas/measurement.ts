import { z } from "zod";

export const measurementSchema = z.object({
  childId: z.string().min(1, "Pilih anak."),
  height: z.string().refine((val) => !isNaN(parseFloat(val)), "Tinggi badan harus berupa angka."),
  weight: z.string().refine((val) => !isNaN(parseFloat(val)), "Berat badan harus berupa angka."),
  headCircumference: z.string().refine((val) => !isNaN(parseFloat(val)), "Lingkar kepala harus berupa angka."),
  armCircumference: z.string().refine((val) => !isNaN(parseFloat(val)), "Lingkar lengan harus berupa angka."),
  date: z.string().min(1, "Tanggal pengukuran wajib diisi."),
  nutritionalStatus: z.string().min(1, "Status gizi wajib diisi."),
});

export type MeasurementFormType = z.infer<typeof measurementSchema>;
