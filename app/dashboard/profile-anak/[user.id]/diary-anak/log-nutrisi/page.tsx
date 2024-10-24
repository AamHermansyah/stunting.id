"use client";

import LogNutritionSection from '@/components/shared/pages/log-nutrition-section'
import { useParams } from 'next/navigation'
import React from 'react'

const LogNutrition = () => {
  const {id} = useParams();
  return (
    <div>
      <LogNutritionSection 
      profile={`/dashboard/profile-anak/${id}`}
      diary={`/dashboard/profile-anak/${id}/diary-anak`}
      history={`/dashboard/profile-anak/${id}/riwayat-pertumbuhan`} 
      cancel={`/dashboard/profile-anak/${id}/diary-anak`}
      />
    </div>
  )
}

export default LogNutrition
