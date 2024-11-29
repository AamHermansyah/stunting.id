import { NutritionType } from "@prisma/client";
import { SidebarLabel, SidebarNavItem } from ".";

export const isSidebarLabel = (item: SidebarNavItem | SidebarLabel): item is SidebarLabel => {
  return (item as SidebarLabel).label !== undefined;
};

export const isNutritionType = (value: string): value is NutritionType => {
  return Object.values(NutritionType).includes(value as NutritionType);
};