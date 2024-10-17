import { prisma } from "@/db"

export const getChildById = async (id: number, userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    const child = await prisma.child.findUnique({ where: { id } });

    if (!child || !user) {
      return { error: 'Data tidak ditemukan!' }
    }

    if (child.userId !== user.id) {
      return { error: 'Unauthorized' }
    }

    return { success: 'success', data: child }
  } catch (error) {
    return { error: 'Internal server error' }
  }
}