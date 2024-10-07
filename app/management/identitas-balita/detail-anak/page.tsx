import React from 'react'

import Profile from './_components/profile'
import Overview from './_components/overview'
import Chart from './_components/chart'
import InterpretationResult from './_components/interpretation-result'
import SejarahPertumbuhan from './riwayat-pertumbuhan/_components/sejarah-pertumbuhan'
import TabsButton from '@/app/dashboard/_components/tabs-button'


function DetailAnak() {
  return (
    <>
      <TabsButton buku='/management/identitas-balita/detail-anak' diary='/management/identitas-balita/detail-anak/diary-anak' riwayat='/management/identitas-balita/detail-anak/riwayat-pertumbuhan' />
      <div className="space-y-4 mt-4">
        <div className="w-full grid grid-cols-12 items-start gap-4">
          <Profile />
          <Chart />
          <Overview />
        </div>
        <InterpretationResult />
      </div>
    </>
  )
}

export default DetailAnak