"use client";

import ChildDiarySection from '@/components/shared/pages/child-diary-section'
import { useParams } from 'next/navigation';
import React from 'react'

const ChildDiaryAdmin = () => {
  const { id } = useParams();
  return (
    <div>
      <ChildDiarySection
        edit={`/management/identitas-balita/detail-anak/${id}/diary-anak/log-nutrisi`}
        profile={`/management/identitas-balita/detail-anak/${id}`}
        diary={`/management/identitas-balita/detail-anak/${id}/diary-anak`}
        history={`/management/identitas-balita/detail-anak/${id}/riwayat-pertumbuhan`}
      />
    </div>
  )
}

export default ChildDiaryAdmin
