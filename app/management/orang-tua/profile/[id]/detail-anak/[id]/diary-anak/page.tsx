"use client";

import ChildDiarySection from '@/components/shared/pages/child-diary-section'
import { useParams } from 'next/navigation';
import React from 'react'

const ChildDiaryAdmin = () => {
  const { id } = useParams();
  return (
    <div>
      <ChildDiarySection 
      edit={`/management/orang-tua/profile/${id}/detail-anak/${id}/diary-anak/log-nutrisi`}
      profile={`/management/orang-tua/profile/${id}/detail-anak/${id}`} 
      diary={`/management/orang-tua/profile/${id}/detail-anak/${id}/diary-anak`} 
      history={`/management/orang-tua/profile/${id}/detail-anak/${id}/riwayat-pertumbuhan`} 
    />
    </div>
  )
}

export default ChildDiaryAdmin
