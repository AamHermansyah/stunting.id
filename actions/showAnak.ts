'use server';

import { prisma } from "@/db";

// Fetch all children associated with a user
export const getChildren = async (userId: string) => {
  try {
    const children = await prisma.child.findMany({
      where: {
        userId,
      },
    });
    
    return {
      success: 'success',
      data: children,
    };
  } catch (error) {
    return {
      error: 'Internal server error',
    };
  }
};

export const getChildById = async (childId: number) => {
  try {
    const child = await prisma.child.findUnique({
      where: {
        id: childId,
      },
    });
    
    return {
      success: 'success',
      data: child,
    };
  } catch (error) {
    return {
      error: 'Internal server error',
    };
  }
}; 
