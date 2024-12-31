'use server';

import { prisma } from "@/db";

export const deleteUser = async (userId: string) => {
  try {

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        Child: {
          include: {
            NutritionLog: {
              include: {
                mealNutrition: true,
                breastfeedingTimes: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return { error: 'User not found' };
    }

    for (const child of user.Child) {
      for (const log of child.NutritionLog) {

        await prisma.mealNutrition.deleteMany({
          where: { nutritionLogId: log.id },
        });

        await prisma.breastfeedingTime.deleteMany({
          where: { nutritionLogId: log.id },
        });
      }

      await prisma.nutritionLog.deleteMany({
        where: { childId: child.id },
      });

      await prisma.measurement.deleteMany({
        where: { childId: child.id },
      });
    }

    await prisma.child.deleteMany({
      where: { userId: userId },
    });

    await prisma.user.delete({
      where: { id: userId },
    });

    return {
      success: 'User deleted successfully',
    };
  } catch (error) {
    console.error("Error deleting user:", error);
    return {
      error: 'Server error occurred',
    };
  }
};
