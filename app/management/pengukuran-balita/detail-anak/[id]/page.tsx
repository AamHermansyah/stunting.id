"use client";

import { ChildProfielSection } from '@/components/shared/sections/child-profile-section'
import React from 'react'
import { useParams } from 'next/navigation'

const Page = () => {
  const { id } = useParams();

  return (
    <div>
      <ChildProfielSection
        profile={`/management/pengukuran-balita/detail-anak/${id}`}
        diary={`/management/pengukuran-balita/detail-anak/${id}/diary-anak`}
        history={`/management/pengukuran-balita/detail-anak/${id}/riwayat-pertumbuhan`}
      />
    </div>
  )
}

export default Page;
