import { Role } from "@prisma/client";
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

export type RowCSVStuntingCheck = {
  month: number;
  mean: number;
  SDsNeg: number[];
  SDsPos: number[];
};

export type BabyInformation = {
  fullname: string;
  district: string;
  gender: 'boy' | 'girl';
  weight: string;
  height: string;
  DOB: string;
  headCircumference: string;
};

export type Article = {
  id: number;
  title: string;
  summary: string;
  category: string;
  tags: string;
  content: string;
  image: string;
  alt_image: string;
  created_at: string;
  authorId: number;
  author: Pick<User, 'id' | 'name' | 'email' | 'image'>;
}

export type User = {
  id: number;
  name: string;
  image: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  created_at: Date;
};

export type StuntingStatus = 'danger' | 'semi-danger' | 'warning' | 'normal';

export type AuthCookie = {
  childId: any;
  id: string,
  name: string,
  email: string,
  emailVerified: Date | null,
  district: string | null,
  nik: string | null,
  role: Role;
}
