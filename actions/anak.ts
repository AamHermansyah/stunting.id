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
export const deleteChild = async (childId: string) => {
  try {
    // Konversi childId menjadi number
    const childIdNumber = parseInt(childId, 10);
    if (isNaN(childIdNumber)) {
      return { error: 'ID anak tidak valid.' };
    }

    // Cek apakah anak tersebut ada di database
    const existingChild = await prisma.child.findUnique({
      where: { id: childIdNumber },
    });

    if (!existingChild) {
      return {
        error: 'Data anak tidak ditemukan.',
      };
    }

    // Hapus data anak
    await prisma.child.delete({
      where: { id: childIdNumber },
    });

    return {
      success: 'Data anak berhasil dihapus',
    };
  } catch (error) {
    return {
      error: 'Internal server error',
    };
  }
};
