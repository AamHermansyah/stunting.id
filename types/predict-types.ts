import { SidebarLabel, SidebarNavItem } from ".";

export const isSidebarLabel = (item: SidebarNavItem | SidebarLabel): item is SidebarLabel => {
  return (item as SidebarLabel).label !== undefined;
};