"use client";

import { ChildProfielSection } from '@/components/shared/sections/child-profile-section'
import { useParams } from 'next/navigation';
import React from 'react'

function ChildProfilePage() {
  const { id } = useParams();

  return (
    <>
      <ChildProfielSection
        profile={`/management/orang-tua/profile/${id}/detail-anak/${id}`}
        diary={`/management/orang-tua/profile/${id}/detail-anak/${id}/diary-anak`}
        history={`/management/orang-tua/profile/${id}/detail-anak/${id}/riwayat-pertumbuhan`}
      />
    </>
  )
}

export default ChildProfilePage