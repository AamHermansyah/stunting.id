import ProfileAccountSection from '@/components/shared/sections/profile-account-section'
import React from 'react'

const Profile = () => {
  return (
    <>
      <ProfileAccountSection profile='/management/profile' keamanan='/management/profile/keamanan-akun' />
    </>
  )
}

export default Profile
