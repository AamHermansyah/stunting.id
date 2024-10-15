import GrowHistorySection from '@/components/shared/pages/grow-history-section'
import React from 'react'

const GrowHistory = () => {
  return (
    <div>
      <GrowHistorySection 
      profile='/management/pengukuran-balita/detail-anak' 
      diary='/management/pengukuran-balita/detail-anak/diary-anak' 
      history='/management/pengukuran-balita/detail-anak/riwayat-pertumbuhan'/>
    </div>
  )
}

export default GrowHistory
