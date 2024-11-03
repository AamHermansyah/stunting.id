import LogNutritionSection from '@/components/shared/pages/log-nutrition-section'
import React from 'react'

function LogNutrisiPage({ params }: { params: { childId: string } }) {
  const { childId } = params;
  return (
    <div>
      <LogNutritionSection
        profile={`/dashboard/profile-anak/${childId}`}
        diary={`/dashboard/profile-anak/${childId}/diary-anak`}
        history={`/dashboard/profile-anak/${childId}/riwayat-pertumbuhan`}
        cancel={`/dashboard/profile-anak/${childId}/diary-anak`}
      />
    </div>
  )
}

export default LogNutrisiPage
