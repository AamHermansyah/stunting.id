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

export type StuntingStatus = 'danger' | 'semi-danger' | 'warning' | 'normal';
