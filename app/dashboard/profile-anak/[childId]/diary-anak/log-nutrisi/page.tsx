import LogNutritionSection from '@/components/shared/sections/log-nutrition-section'
import { AuthCookie } from '@/types';
import { cookies } from 'next/headers';
import React from 'react'

function LogNutrisiPage({ params }: { params: { childId: string } }) {
  const { childId } = params;
  const authCookie = cookies().get('auth');
  const user = JSON.parse(authCookie!.value) as AuthCookie;

  return (
    <div>
      <LogNutritionSection
        profile={`/dashboard/profile-anak/${childId}`}
        diary={`/dashboard/profile-anak/${childId}/diary-anak`}
        history={`/dashboard/profile-anak/${childId}/riwayat-pertumbuhan`}
        cancel={`/dashboard/profile-anak/${childId}/diary-anak`}
        childId={childId}
        userId={user.id}
      />
    </div>
  )
}

export default LogNutrisiPage
