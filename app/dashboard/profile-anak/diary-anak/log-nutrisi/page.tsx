import LogNutritionSection from '@/components/shared/pages/log-nutrition-section'
import React from 'react'

const LogNutrition = () => {
  return (
    <div>
      <LogNutritionSection 
      profile='/dashboard/profile-anak' 
      diary='/dashboard/profile-anak/diary-anak' 
      history='/dashboard/profile-anak/riwayat-pertumbuhan'
      cancel='/dashboard/profile-anak/diary-anak'
      />
    </div>
  )
}

export default LogNutrition
