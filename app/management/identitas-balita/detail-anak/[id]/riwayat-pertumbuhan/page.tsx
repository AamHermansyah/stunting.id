'use client';

import GrowHistorySection from '@/components/shared/sections/grow-history-section'
import { useParams } from 'next/navigation';
import React from 'react'

const GrowHistory = () => {
  const params = useParams();
  
  // Pastikan untuk mengambil userId dan id dari params dengan benar
  const userIdString = Array.isArray(params.userId) ? params.userId[0] : params.userId;
  const childIdString = Array.isArray(params.id) ? params.id[0] : params.id;

  // Tambahkan pengecekan jika childId undefined
  if (!childIdString) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GrowHistorySection
        profile={`/management/identitas-balita/detail-anak/${childIdString}`}
        diary={`/management/identitas-balita/detail-anak/${childIdString}/diary-anak`}
        history={`/management/identitas-balita/detail-anak/${childIdString}/riwayat-pertumbuhan`}
        childId={childIdString}
        userId={userIdString}
      />
    </div>
  )
}

export default GrowHistory
