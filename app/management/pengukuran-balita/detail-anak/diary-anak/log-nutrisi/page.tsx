import LogNutritionSection from '@/components/shared/pages/log-nutrition-section'
import React from 'react'

const LogNutritionAdmin = () => {
  return (
    <div>
      <LogNutritionSection 
      profile='/management/pengukuran-balita/detail-anak' 
      diary='/management/pengukuran-balita/detail-anak/diary-anak' 
      history='/management/pengukuran-balita/detail-anak/riwayat-pertumbuhan'
      cancel='/management/pengukuran-balita/detail-anak/diary-anak'
      />
    </div>
  )
}

export default LogNutritionAdmin
