import { z } from "zod";

export const stuntingCheckSchema = z.object({
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  district: z.string().min(3, {
    message: "District must be at least 3 characters.",
  }),
  gender: z.enum(["boy", "girl"]),
  weight: z.string().refine((value) => {
    const numericValue = parseFloat(value);
    return !isNaN(numericValue) && numericValue > 0;
  }, {
    message: "Weight must be a positive number.",
  }),
  height: z.string().refine((value) => {
    const numericValue = parseFloat(value);
    return !isNaN(numericValue) && numericValue > 0;
  }, {
    message: "Height must be a positive number.",
  }),
  DOB: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "DOB must be in the format YYYY-MM-DD.",
  }),
  headCircumference: z.string().refine((value) => {
    const numericValue = parseFloat(value);
    return !isNaN(numericValue) && numericValue > 0;
  }, {
    message: "Head circumference must be a positive number.",
  }),
});