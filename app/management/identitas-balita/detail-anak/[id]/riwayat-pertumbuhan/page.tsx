"use client";

import GrowHistorySection from '@/components/shared/pages/grow-history-section'
import { useParams } from 'next/navigation';
import React from 'react'

const GrowHistory = () => {
  const { id } = useParams();
  return (
    <div>
      <GrowHistorySection 
        profile={`/management/identitas-balita/detail-anak/${id}`} 
        diary={`/management/identitas-balita/detail-anak/${id}/diary-anak`} 
        history={`/management/identitas-balita/detail-anak/${id}/riwayat-pertumbuhan`} 
      />
    </div>
  )
}

export default GrowHistory
