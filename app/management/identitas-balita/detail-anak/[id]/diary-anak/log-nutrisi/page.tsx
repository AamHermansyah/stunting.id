import LogNutritionSection from '@/components/shared/sections/log-nutrition-section'
import { AuthCookie } from '@/types';
import { cookies } from 'next/headers';
import React from 'react'

function LogNutritionAdmin({ params }: { params: { id: string } }) {
  const { id } = params;
  const cookieAuth = cookies().get('auth');
  const user = JSON.parse(cookieAuth!.value) as AuthCookie;

  return (
    <div>
      <LogNutritionSection
        profile={`/management/identitas-balita/detail-anak/${id}`}
        diary={`/management/identitas-balita/detail-anak/${id}/diary-anak`}
        history={`/management/identitas-balita/detail-anak/${id}/riwayat-pertumbuhan`}
        cancel={`/management/identitas-balita/detail-anak/${id}/diary-anak`}
        childId={id}
        userId={user.id}
      />
    </div>
  )
}

export default LogNutritionAdmin
