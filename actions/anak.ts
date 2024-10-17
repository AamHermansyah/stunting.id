'use server'

import { prisma } from "@/db";
import { childSchema } from "@/schemas/anak";
import { z } from "zod";

export const createChildren =  async (values:z.infer<typeof childSchema>, id:string) => {
  try {
    const child = await prisma.child.create({
      data: {
        userId: id,
        name: `${values.firstName} ${values.lastName ? ` ${values.lastName}` : ''}`,
        birthDate: new Date(values.birthDate),
        gender: values.gender,
        bloodType: values.bloodType,
        height: +values.height,
        headCircumference: +values.headCircumference,
        weight: +values.weight,
        armCircumference: +values.armCircumference,
        allergy: values.allergy,
        premature: values.premature,
        motherHeight: +values.motherHeight,
        fatherHeight: +values.fatherHeight
      }
    });
    
    return {
      success: 'success', 
      data: child
    }
  } catch (error) {
    return {
      error: 'Internal server error'
    }
  }
}
