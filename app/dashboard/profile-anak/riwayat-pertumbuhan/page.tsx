import React from 'react'
import SejarahPertumbuhan from './_components/sejarah-pertumbuhan'
import TabsNavigations from '@/app/management/_components/tabs-navigation'

const RiwayatPertumbuhan = () => {
  return (
    <div className='space-y-4'>
      <TabsNavigations/>
      <SejarahPertumbuhan/>
    </div>
  )
}

export default RiwayatPertumbuhan
