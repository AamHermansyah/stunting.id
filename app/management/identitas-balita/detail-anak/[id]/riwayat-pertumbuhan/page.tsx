import GrowHistorySection from '@/components/shared/sections/grow-history-section'
import { AuthCookie } from '@/types';
import { cookies } from 'next/headers';
import React from 'react'

function GrowHistory({ params }: { params: { id: string; } }) {
  const { id } = params;
  const cookieAuth = cookies().get('auth');
  const user = JSON.parse(cookieAuth!.value) as AuthCookie;

  return (
    <div>
      <GrowHistorySection
        profile={`/management/identitas-balita/detail-anak/${id}`}
        diary={`/management/identitas-balita/detail-anak/${id}/diary-anak`}
        history={`/management/identitas-balita/detail-anak/${id}/riwayat-pertumbuhan`}
        childId={id}
        userId={user.id}
      />
    </div>
  )
}

export default GrowHistory
