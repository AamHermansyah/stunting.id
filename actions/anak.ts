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

export const deleteChild = async (childId: number, userId: string) => {
  try {
    // Cari data anak berdasarkan ID
    const child = await prisma.child.findUnique({
      where: { id: childId }
    });

    // Jika data anak tidak ditemukan atau userId tidak sesuai
    if (!child || child.userId !== userId) {
      return { error: 'Anak tidak ditemukan atau tidak diizinkan untuk menghapus' };
    }

    // Hapus data anak
    await prisma.child.delete({
      where: { id: childId }
    });

    return {
      success: 'Anak berhasil dihapus',
    };
  } catch (error) {
    return {
      error: 'Terjadi kesalahan pada server',
    };
  }
};
