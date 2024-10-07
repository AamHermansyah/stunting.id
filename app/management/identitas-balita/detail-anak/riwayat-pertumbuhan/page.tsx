import React from 'react'
import SejarahPertumbuhan from './_components/sejarah-pertumbuhan'
import TabsButton from '@/app/dashboard/_components/tabs-button'


const RiwayatPertumbuhan = () => {
  return (
    <div className='space-y-4'>
     <TabsButton buku='/management/identitas-balita/detail-anak' diary='/management/identitas-balita/detail-anak/diary-anak' riwayat='/management/identitas-balita/detail-anak/riwayat-pertumbuhan' />
      <SejarahPertumbuhan/>
    </div>
  )
}

export default RiwayatPertumbuhan
