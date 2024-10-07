import React from 'react'
import SejarahPertumbuhan from './_components/sejarah-pertumbuhan'
import TabsNavigations from '@/app/management/_components/tabs-navigation'
import TabsButton from '../../_components/tabs-button'

const RiwayatPertumbuhan = () => {
  return (
    <div className='space-y-4'>
      <TabsButton buku='/dashboard/profile-anak' diary='/dashboard/profile-anak/diary-anak' riwayat='/dashboard/profile-anak/riwayat-pertumbuhan' />
      <SejarahPertumbuhan/>
    </div>
  )
}

export default RiwayatPertumbuhan
