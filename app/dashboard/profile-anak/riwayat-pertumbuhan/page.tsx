import React from 'react'
import GrowHistorySection from '@/components/shared/pages/grow-history-section'

const RiwayatPertumbuhan = () => {
  return (
    <div>
      <GrowHistorySection 
      profile='/dashboard/profile-anak' 
      diary='/dashboard/profile-anak/diary-anak' 
      history='/dashboard/profile-anak/riwayat-pertumbuhan'/>
    </div>
  )
}

export default RiwayatPertumbuhan
