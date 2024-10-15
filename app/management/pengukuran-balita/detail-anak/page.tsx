import { ChildProfielSection } from '@/components/shared/pages/child-profile-section'
import React from 'react'

const page = () => {
  return (
    <div>
      <ChildProfielSection 
      profile='/management/pengukuran-balita/detail-anak' 
      diary='/management/pengukuran-balita/detail-anak/diary-anak' 
      history='/management/pengukuran-balita/detail-anak/riwayat-pertumbuhan'/>
    </div>
  )
}

export default page
