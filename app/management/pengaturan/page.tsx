import React from 'react'
import TabsNavigationsPengaturan from './_components/tabs-navigation-pengaturan'
import { DashboardBreadcrumb } from '@/components/shared/dashboard-breadcrumb'
import InfromasiAkun from './_components/informasi-akun'
import KeamananAkun from './_components/keamanan-akun'
import TabsButtonPengaturan from './_components/tabs-button-pengaturan'

const Pengaturan = () => {
  return (
    <>
      <DashboardBreadcrumb/>
        <h1 className="text-2xl font-semibold">Pengaturan</h1>
        
        <TabsButtonPengaturan/>

        <InfromasiAkun/>

        {/* <KeamananAkun/> */}

    </>
  )
}

export default Pengaturan
