import GrowHistorySection from '@/components/shared/pages/grow-history-section'
import React from 'react'

const GrowHistory = () => {
  return (
    <div>
      <GrowHistorySection 
      profile='/management/identitas-balita/detail-anak' 
      diary='/management/identitas-balita/detail-anak/diary-anak' 
      history='/management/identitas-balita/detail-anak/riwayat-pertumbuhan'/>
    </div>
  )
}

export default GrowHistory
