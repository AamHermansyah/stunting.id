"use client";

import React from 'react'
import GrowHistorySection from '@/components/shared/pages/grow-history-section'
import { useParams } from 'next/navigation';

const RiwayatPertumbuhan = () => {
  const { id } = useParams();

  return (
    <>
      <GrowHistorySection
        profile={`/dashboard/profile-anak/${id}`}
        diary={`/dashboard/profile-anak/${id}/diary-anak`}
        history={`/dashboard/profile-anak/${id}/riwayat-pertumbuhan`} 
      />
    </>
  )
}

export default RiwayatPertumbuhan
