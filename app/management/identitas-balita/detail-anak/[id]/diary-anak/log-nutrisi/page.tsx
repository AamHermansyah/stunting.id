"use client";

import LogNutritionSection from '@/components/shared/pages/log-nutrition-section'
import { useParams } from 'next/navigation'
import React from 'react'

const LogNutritionAdmin = () => {
  const { id } = useParams();

  return (
    <div>
      <LogNutritionSection 
      profile={`/management/identitas-balita/detail-anak/${id}`} 
      diary={`/management/identitas-balita/detail-anak/${id}/diary-anak`} 
      history={`/management/identitas-balita/detail-anak/${id}/riwayat-pertumbuhan`} 
      cancel={`/management/identitas-balita/detail-anak/${id}/diary-anak`}
      />
    </div>
  )
}

export default LogNutritionAdmin
