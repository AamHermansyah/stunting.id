import { prisma } from "@/db";

const allowedRoles = ["KADER", "KEPALA_KADER"];

export const getAllUsers = async (searchQuery: string | null = null) => {
  try {
    const users = await prisma.user.findMany({
      where: searchQuery
        ? {
            name: {
              contains: searchQuery,
              mode: 'insensitive', 
            },
          }
        : {}, 
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

export const getParentById = async (id: string, userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    const parent = await prisma.user.findUnique({ where: { id } });

    if (!parent || !user) {
      return { error: 'Data tidak ditemukan!' }
    }

    if (!allowedRoles.includes(user.role) && parent.id !== user.id) {
      return { error: 'Unauthorized' }
    }

    return { success: 'success', data: parent }
  } catch (error) {
    return { error: 'Internal server error' }
  }
}
