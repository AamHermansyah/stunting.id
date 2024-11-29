'use server'

import { SelectFoodValues } from "@/components/shared/select-food";
import { prisma } from "@/db";
import { isNutritionType } from "@/types/predict-types";
import { MealTime, NutritionType } from "@prisma/client";

export const createBabyNutrition = async (
  values: { key: string, value: string }[],
  freq: number,
  childId: number,
  createdAt?: Date
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
        childId,
        createdAt,
        updatedAt: createdAt
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

export const createInfantBabyNutrition = async (
  data: {
    breastfeedingTimes: { key: string, value: string }[];
    breastfeedingFreq: number;
    breakfast: SelectFoodValues;
    lunch: SelectFoodValues;
    snack: SelectFoodValues;
    dinner: SelectFoodValues;
  },
  childId: number,
  createdAt?: Date
) => {
  try {
    await prisma.nutritionLog.create({
      data: {
        ageGroup: "INFANT",
        breastfeedingFreq: data.breastfeedingFreq,
        breastfeedingTimes: {
          create: data.breastfeedingTimes.map((data) => ({ time: data.value }))
        },
        mealNutrition: {
          create: [
            ...data.breakfast.map((item) => ({
              timeOfMeal: 'BREAKFAST' as MealTime,
              menuOfMeal: item.value,
              nutritionType: item.nutrition.filter(isNutritionType),
            })),
            ...data.lunch.map((item) => ({
              timeOfMeal: 'LUNCH' as MealTime,
              menuOfMeal: item.value,
              nutritionType: item.nutrition.filter(isNutritionType),
            })),
            ...data.snack.map((item) => ({
              timeOfMeal: 'SNACK' as MealTime,
              menuOfMeal: item.value,
              nutritionType: item.nutrition.filter(isNutritionType),
            })),
            ...data.dinner.map((item) => ({
              timeOfMeal: 'DINNER' as MealTime,
              menuOfMeal: item.value,
              nutritionType: item.nutrition.filter(isNutritionType),
            })),
          ],
        },
        childId,
        createdAt,
        updatedAt: createdAt
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

export const createToddlerBabyNutrition = async (
  data: {
    breakfast: SelectFoodValues;
    lunch: SelectFoodValues;
    snack: SelectFoodValues;
    dinner: SelectFoodValues;
  },
  childId: number,
  createdAt?: Date
) => {
  try {
    await prisma.nutritionLog.create({
      data: {
        ageGroup: "TODDLER",
        breastfeedingTimes: {
          create: []
        },
        mealNutrition: {
          create: [
            ...data.breakfast.map((item) => ({
              timeOfMeal: 'BREAKFAST' as MealTime,
              menuOfMeal: item.value,
              nutritionType: item.nutrition.filter(isNutritionType),
            })),
            ...data.lunch.map((item) => ({
              timeOfMeal: 'LUNCH' as MealTime,
              menuOfMeal: item.value,
              nutritionType: item.nutrition.filter(isNutritionType),
            })),
            ...data.snack.map((item) => ({
              timeOfMeal: 'SNACK' as MealTime,
              menuOfMeal: item.value,
              nutritionType: item.nutrition.filter(isNutritionType),
            })),
            ...data.dinner.map((item) => ({
              timeOfMeal: 'DINNER' as MealTime,
              menuOfMeal: item.value,
              nutritionType: item.nutrition.filter(isNutritionType),
            })),
          ],
        },
        childId,
        createdAt,
        updatedAt: createdAt
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