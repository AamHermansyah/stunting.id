import { z } from "zod";

export const puskesmasSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  district: z.string().min(3, {
    message: "District must be at least 3 characters.",
  }),
  summary: z.string().max(200, {
    message: "Summary must be at most 200 characters.",
  }),
  category: z.string().nonempty({
    message: "Category must be not empty",
  }),
  tags: z.string().nonempty({
    message: "Tags must be not empty",
  }),
  content: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  image: z
    .custom<FileList[0] | undefined>()
    .refine((file) => file && (!!file && file.size <= 10 * 1024 * 1024), {
      message: "The profile picture must be a maximum of 10MB.",
    })
    .refine((file) => file && (!!file && file.type?.startsWith("image")), {
      message: "Only images are allowed to be sent.",
    }),
  alt_image: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});