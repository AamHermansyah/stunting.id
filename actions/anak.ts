'use server'

import { prisma } from "@/db";
import { childSchema } from "@/schemas/anak";
import { z } from "zod";

const allowedRoles = ["KADER", "KEPALA_KADER"];

export const createChild = async (values: z.infer<typeof childSchema>, userId: string) => {
  try {
    console.log("userId:", userId)
    const child = await prisma.child.create({
      data: {
        userId: userId,
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

export const updateChild = async (values: z.infer<typeof childSchema>, id: number, userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    const child = await prisma.child.findUnique({ where: { id } });

    if (!user || !child) return { error: 'Data tidak ditemukan!' };

    if (user.id !== child.userId && !allowedRoles.includes(user.role) ) return { error: 'Unauthorized' };

    const updatedChild = await prisma.child.update({
      where: { id: child.id },
      data: {
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
      data: updatedChild
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
