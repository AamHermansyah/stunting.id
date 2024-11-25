import { prisma } from "@/db";

export const getAllNutritionByChildId = async (id: number) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0); // Set waktu ke awal hari
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999); // Set waktu ke akhir hari

  try {
    const data = await prisma.nutritionLog.findMany({
      where: { childId: id },
      include: {
        breastfeedingTimes: true,
        mealNutrition: true
      }
    });

    const todayData = await prisma.nutritionLog.findMany({
      where: {
        childId: id,
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        breastfeedingTimes: true,
        mealNutrition: true,
      },
    });

    const dateLabels = data.map(item => item.createdAt);

    return {
      success: 'Successfully',
      data: data,
      dateLabels: dateLabels,
      todayData: todayData[0] || null
    }
  } catch (error) {
    return {
      error: 'Internal server error',
    };
  }
}