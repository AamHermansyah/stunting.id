import { ChildProfielSection } from '@/components/shared/pages/child-profile-section'
import React from 'react'

function ProfileAnakPage({ params }: { params: { childId: string } }) {
  const { childId } = params;

  return (
    <>
      <ChildProfielSection
        profile={`/dashboard/profile-anak/${childId}`}
        diary={`/dashboard/profile-anak/${childId}/diary-anak`}
        history={`/dashboard/profile-anak/${childId}/riwayat-pertumbuhan`}
      />
    </>
  )
}

export default ProfileAnakPage