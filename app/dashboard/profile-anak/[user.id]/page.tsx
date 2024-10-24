"use client";

import { ChildProfielSection } from '@/components/shared/pages/child-profile-section'
import { useParams } from 'next/navigation';
import React from 'react'

function ProfileAnakPage() {
  const { id } = useParams();

  return (
    <>
      <ChildProfielSection
        profile={`/dashboard/profile-anak/${id}`}
        diary={`/dashboard/profile-anak/${id}/diary-anak`}
        history={`/dashboard/profile-anak/${id}/riwayat-pertumbuhan`} 
      />
    </>
  )
}

export default ProfileAnakPage