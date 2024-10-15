import ChildDiarySection from '@/components/shared/pages/child-diary-section'
import React from 'react'

const ChildDiaryAdmin = () => {
  return (
    <div>
      <ChildDiarySection 
      edit='/management/pengukuran-balita/detail-anak/diary-anak/log-nutrisi' 
      profile='/management/pengukuran-balita/detail-anak' 
      diary='/management/pengukuran-balita/detail-anak/diary-anak' 
      history='/management/pengukuran-balita/detail-anak/riwayat-pertumbuhan'/>
    </div>
  )
}

export default ChildDiaryAdmin
