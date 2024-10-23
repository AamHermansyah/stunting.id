import { prisma } from "@/db";

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      include: {
        _count: {
          select: { Child: true },
        },
      },
    });

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
