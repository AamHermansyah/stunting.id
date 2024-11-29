import React from "react";
import { DashboardBreadcrumb } from "../dashboard-breadcrumb";
import TabsButtonPengaturan from "./_components/tabs-button-pengaturan";
import KeamananAkun from "./_components/keamanan-akun";

interface IProps{
  profile:string
  keamanan:string
}

function AccountSecuritySection({profile, keamanan}: IProps) {
  return (
    <div>
      <DashboardBreadcrumb />
      <h1 className="text-2xl font-semibold">Profil</h1>
      <div className="space-y-4">
        <TabsButtonPengaturan profile={profile} keamanan={keamanan}/>
        <KeamananAkun />
      </div>
    </div>
  );
};

export default AccountSecuritySection;
