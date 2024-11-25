'use server'

import { prisma } from "@/db";

export const createBabyNutrition = async (
  values: { key: string, value: string }[],
  freq: number,
  childId: number
) => {
  try {
    await prisma.nutritionLog.create({
      data: {
        ageGroup: "BABY",
        breastfeedingFreq: freq,
        breastfeedingTimes: {
          create: values.map((data) => ({ time: data.value }))
        },
        mealNutrition: {
          create: []
        },
        childId
      }
    });

    return {
      success: 'success',
    };
  } catch (error) {
    return {
      error: 'Internal server error',
    };
  }
}