import React from "react";
import { DashboardBreadcrumb } from "../dashboard-breadcrumb";
import TabsButtonPengaturan from "./_components/tabs-button-pengaturan";
import InfromasiAkun from "./_components/informasi-akun";

interface IProps{
  profile:string
  keamanan:string
}

function ProfileAccountSection({profile, keamanan}: IProps) {
  return (
    <div>
      <DashboardBreadcrumb />
      <h1 className="text-2xl font-semibold">Informasi Pribadi</h1>
      <TabsButtonPengaturan profile={profile} keamanan={keamanan}/>
      <InfromasiAkun />
    </div>
  );
};

export default ProfileAccountSection;
