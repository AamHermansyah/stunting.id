import { ChildProfielSection } from '@/components/shared/pages/child-profile-section'
import React from 'react'

const page = () => {
  return (
    <div>
      <ChildProfielSection 
      profile='/management/identitas-balita/detail-anak' 
      diary='/management/identitas-balita/detail-anak/diary-anak' 
      history='/management/identitas-balita/detail-anak/riwayat-pertumbuhan'/>
    </div>
  )
}

export default page
