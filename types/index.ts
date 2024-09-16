import { IconType } from "react-icons/lib";

export interface SidebarLabel {
  id: string;
  label: string;
}

export interface SidebarNavItem {
  id: string;
  href: string;
  icon: IconType;
  text: string;
}