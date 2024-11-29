import LogNutritionSection from '@/components/shared/sections/log-nutrition-section'
import React from 'react'

function LogNutritionAdmin({ params }: { params: { id: string; userId: string } }) {
  const { id, userId } = params;

  return (
    <div>
      <LogNutritionSection
        profile={`/management/orang-tua/profile/${id}/detail-anak/${id}`}
        diary={`/management/orang-tua/profile/${id}/detail-anak/${id}/diary-anak`}
        history={`/management/orang-tua/profile/${id}/detail-anak/${id}/riwayat-pertumbuhan`}
        cancel={`/management/orang-tua/profile/${id}/detail-anak/${id}/diary-anak`}
        childId={id}
        userId={userId}
      />
    </div>
  )
}

export default LogNutritionAdmin
