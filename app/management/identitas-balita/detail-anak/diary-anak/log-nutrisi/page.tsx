import LogNutritionSection from '@/components/shared/pages/log-nutrition-section'
import React from 'react'

const LogNutritionAdmin = () => {
  return (
    <div>
      <LogNutritionSection 
      profile='/management/identitas-balita/detail-anak' 
      diary='/management/identitas-balita/detail-anak/diary-anak' 
      history='/management/identitas-balita/detail-anak/riwayat-pertumbuhan'
      cancel='/management/identitas-balita/detail-anak/diary-anak'
      />
    </div>
  )
}

export default LogNutritionAdmin
