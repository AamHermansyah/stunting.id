"use client";

import LogNutritionSection from '@/components/shared/pages/log-nutrition-section'
import { useParams } from 'next/navigation'
import React from 'react'

const LogNutritionAdmin = () => {
  const { id } = useParams();

  return (
    <div>
      <LogNutritionSection 
      profile={`/management/orang-tua/profile/${id}/detail-anak/${id}`} 
      diary={`/management/orang-tua/profile/${id}/detail-anak/${id}/diary-anak`} 
      history={`/management/orang-tua/profile/${id}/detail-anak/${id}/riwayat-pertumbuhan`} 
      cancel={`/management/orang-tua/profile/${id}/detail-anak/${id}/diary-anak`}
      />
    </div>
  )
}

export default LogNutritionAdmin
