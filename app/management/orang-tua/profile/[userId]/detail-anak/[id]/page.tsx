"use client";

import { ChildProfielSection } from '@/components/shared/sections/child-profile-section'
import { useParams } from 'next/navigation';
import React from 'react'

function ChildProfilePage() {
  const params = useParams();
  
  // Pastikan untuk mengambil userId dan id dari params dengan benar
  const userIdString = Array.isArray(params.userId) ? params.userId[0] : params.userId;
  const childIdString = Array.isArray(params.id) ? params.id[0] : params.id;

  return (
    <>
      <ChildProfielSection
        profile={`/management/orang-tua/profile/${userIdString}/detail-anak/${childIdString}`}
        diary={`/management/orang-tua/profile/${userIdString}/detail-anak/${childIdString}/diary-anak`}
        history={`/management/orang-tua/profile/${userIdString}/detail-anak/${childIdString}/riwayat-pertumbuhan`}
      />
    </>
  )
}

export default ChildProfilePage