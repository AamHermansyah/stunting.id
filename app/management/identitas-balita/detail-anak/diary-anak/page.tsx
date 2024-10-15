import ChildDiarySection from '@/components/shared/pages/child-diary-section'
import React from 'react'

const ChildDiaryAdmin = () => {
  return (
    <div>
      <ChildDiarySection 
      edit='/management/identitas-balita/detail-anak/diary-anak/log-nutrisi' 
      profile='/management/identitas-balita/detail-anak' 
      diary='/management/identitas-balita/detail-anak/diary-anak' 
      history='/management/identitas-balita/detail-anak/riwayat-pertumbuhan'/>
    </div>
  )
}

export default ChildDiaryAdmin
