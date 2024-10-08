import React from 'react'
import TabsButtonPengaturan from '../_components/tabs-button-pengaturan'
import KeamananAkun from '../_components/keamanan-akun'
import { DashboardBreadcrumb } from '@/components/shared/dashboard-breadcrumb'

const Keamanan = () => {
  return (
    <>
     <DashboardBreadcrumb/>
     <h1 className="text-2xl font-semibold">Pengaturan</h1>
    <div className='space-y-4'>
      <TabsButtonPengaturan/>
      <KeamananAkun/>
    </div>
    </>
  )
}

export default Keamanan
