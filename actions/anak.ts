'use server'

import { prisma } from "@/db";
import { childSchema } from "@/schemas/anak";
import { z } from "zod";

const allowedRoles = ["KADER", "KEPALA_KADER"];

interface CreateChildResponse {
  success: boolean;
  data?: {
    id: number;
    [key: string]: any;
  };
  error?: string;
}

export const createChild = async (values: any, userId: string): Promise<CreateChildResponse> => {
  try {
    const child = await prisma.child.create({
      data: {
        name: `${values.firstName} ${values.lastName}`.trim(),
        birthDate: new Date(values.birthDate),
        gender: values.gender,
        bloodType: values.bloodType,
        height: parseFloat(values.height),
        headCircumference: parseFloat(values.headCircumference),
        weight: parseFloat(values.weight),
        armCircumference: parseFloat(values.armCircumference),
        allergy: values.allergy,
        premature: values.premature,
        motherHeight: parseFloat(values.motherHeight),
        fatherHeight: parseFloat(values.fatherHeight),
        User: {
          connect: {
            id: userId
          }
        }
      }
    });

    return {
      success: true,
      data: child
    };
  } catch (error: unknown) {
    console.error("Error creating child:", error);
    return {
      success: false,
      error: error instanceof Error 
        ? `Error creating child: ${error.message}`
        : "Error creating child: An unknown error occurred"
    };
  }
};

export const updateChild = async (values: z.infer<typeof childSchema>, id: number, userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    const child = await prisma.child.findUnique({ where: { id } });

    if (!user || !child) return { error: 'Data tidak ditemukan!' };

    if (user.id !== child.userId && !allowedRoles.includes(user.role)) return { error: 'Unauthorized' };

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
      where: { id: childId },
      include: {
        measurements: true,
        NutritionLog: {
          include: {
            breastfeedingTimes: true,
            mealNutrition: true, // Tidak perlu NutritionType
          },
        },
      },
    });

    // Jika data anak tidak ditemukan atau userId tidak sesuai
    if (!child || child.userId !== userId) {
      return { error: 'Anak tidak ditemukan atau tidak diizinkan untuk menghapus' };
    }

    // Hapus semua relasi terkait di NutritionLog
    for (const nutritionLog of child.NutritionLog) {
      // Hapus BreastfeedingTime terkait
      await prisma.breastfeedingTime.deleteMany({
        where: { nutritionLogId: nutritionLog.id },
      });

      // Hapus MealNutrition terkait
      await prisma.mealNutrition.deleteMany({
        where: { nutritionLogId: nutritionLog.id },
      });

      // Hapus NutritionLog
      await prisma.nutritionLog.delete({
        where: { id: nutritionLog.id },
      });
    }

    // Hapus semua pengukuran terkait
    await prisma.measurement.deleteMany({
      where: { childId: childId },
    });

    // Hapus data anak
    await prisma.child.delete({
      where: { id: childId },
    });

    return {
      success: 'Anak berhasil dihapus',
    };
  } catch (error) {
    console.error("Error deleting child:", error);
    return {
      error: 'Terjadi kesalahan pada server',
    };
  }
};

