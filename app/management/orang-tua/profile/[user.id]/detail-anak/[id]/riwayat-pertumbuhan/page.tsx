"use client";

import GrowHistorySection from '@/components/shared/pages/grow-history-section'
import { useParams } from 'next/navigation';
import React from 'react'

const GrowHistory = () => {
  const { id, userId } = useParams();
  
  const userIdString = Array.isArray(userId) ? userId[0] : userId;
  const childIdString = Array.isArray(id) ? id[0] : id;
  
  return (
    <div>
      <GrowHistorySection 
        profile={`/management/orang-tua/profile/${userIdString}/detail-anak/${childIdString}`} 
        diary={`/management/orang-tua/profile/${userIdString}/detail-anak/${childIdString}/diary-anak`} 
        history={`/management/orang-tua/profile/${userIdString}/detail-anak/${childIdString}/riwayat-pertumbuhan`} 
        userId={userIdString} 
        childId={childIdString} 
      />
    </div>
  )
}

export default GrowHistory