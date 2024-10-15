import { ChildProfielSection } from '@/components/shared/pages/child-profile-section'
import React from 'react'

function ProfileAnakPage() {
  return (
    <>
      <ChildProfielSection 
      profile='/dashboard/profile-anak' 
      diary='/dashboard/profile-anak/diary-anak' 
      history='/dashboard/profile-anak/riwayat-pertumbuhan' />
    </>
  )
}

export default ProfileAnakPage