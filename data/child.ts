import { prisma } from "@/db"

const allowedRoles = ["KADER", "KEPALA_KADER"];

export const getChildById = async (id: number, userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    const child = await prisma.child.findUnique({ where: { id } });

    if (!child || !user) {
      return { error: 'Data tidak ditemukan!' }
    }

    if (!allowedRoles.includes(user.role) && child.userId !== user.id) {
      return { error: 'Unauthorized' }
    }

    return { success: 'success', data: child }
  } catch (error) {
    return { error: 'Internal server error' }
  }
}

export const getAllChildren = async () => {
  try {
    const children = await prisma.child.findMany({
      include: {
        User: true,
      },
    });

    // Urutkan data berdasarkan nama orang tua, lalu tanggal lahir anak
    const sortedChildren = children.sort((a, b) => {
      // Urutkan berdasarkan nama orang tua (User.name)
      const parentNameComparison = a.User.name.localeCompare(b.User.name);
      if (parentNameComparison !== 0) {
        return parentNameComparison;
      }

      // Jika nama orang tua sama, urutkan berdasarkan tanggal lahir anak (birthDate)
      return new Date(a.birthDate).getTime() - new Date(b.birthDate).getTime();
    });

    return sortedChildren;
  } catch (error) {
    console.error("Error fetching children data:", error);
    return [];
  }
};
