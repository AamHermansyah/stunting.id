"use client";

import React from 'react'
import GrowHistorySection from '@/components/shared/pages/grow-history-section'

function RiwayatPertumbuhanPage({ params }: { params: { childId: string } }) {
  const { childId } = params;

  return (
    <>
      <GrowHistorySection
        profile={`/dashboard/profile-anak/${childId}`}
        diary={`/dashboard/profile-anak/${childId}/diary-anak`}
        history={`/dashboard/profile-anak/${childId}/riwayat-pertumbuhan`}
      />
    </>
  )
}

export default RiwayatPertumbuhanPage
