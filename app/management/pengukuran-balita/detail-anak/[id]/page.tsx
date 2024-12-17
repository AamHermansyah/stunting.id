"use client";

import { ChildProfielSection } from '@/components/shared/sections/child-profile-section'
import React from 'react'
import { useParams } from 'next/navigation'

const MeasurementDetailPage = () => {
  const params = useParams();
  
  const childIdString = Array.isArray(params.id) ? params.id[0] : params.id;

  return (
    <div>
      <ChildProfielSection
        profile={`/management/pengukuran-balita/detail-anak/${childIdString}`}
        diary={`/management/pengukuran-balita/detail-anak/${childIdString}/diary-anak`}
        history={`/management/pengukuran-balita/detail-anak/${childIdString}/riwayat-pertumbuhan`}
      />
    </div>
  )
}

export default MeasurementDetailPage;
