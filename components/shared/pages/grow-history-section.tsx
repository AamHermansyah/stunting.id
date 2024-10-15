import React from 'react'
import TabsButton from '../tabs-button'
import SejarahPertumbuhan from './_components/sejarah-pertumbuhan'

interface IProps{
  profile:string
  diary:string
  history:string
}

function GrowHistorySection({profile, diary, history}:IProps) {
  return (
    <div className='space-y-4'>
      <TabsButton buku={profile} diary={diary} riwayat={history} />
      <SejarahPertumbuhan/>
    </div>
  )
}

export default GrowHistorySection
