'use server';

import { prisma } from "@/db";

// Fetch all children associated with a user or all children if the user is KADER or KEPALA_KADER
export const getChildren = async (userId: string, role?: string) => {
  try {
    const children = role === 'KADER' || role === 'KEPALA_KADER'
      ? await prisma.child.findMany() // KADER dan KEPALA_KADER mendapatkan semua data anak
      : await prisma.child.findMany({
        where: { userId }, // USER hanya mendapatkan data anak milik dirinya sendiri
      });

    return {
      success: 'success',
      data: children,
    };
  } catch (error) {
    console.error('Error fetching children:', error); // Log error untuk debugging
    return {
      error: 'Internal server error',
    };
  }
};
