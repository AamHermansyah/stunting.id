import ChildrenProfile from '@/app/dashboard/(home)/_components/children-profile'
import { AuthCookie } from '@/types';
import { cookies } from 'next/headers';
import React from 'react'

const ProfilePage = () => {
  const authCookie = cookies().get('auth');
  const user = JSON.parse(authCookie!.value) as AuthCookie;

  return (
    <div>
      <ChildrenProfile
        id={user.id}
        detail='/management/orang-tua/profile/detail-anak'
        add='/management/orang-tua/profile/tambah-anak'
      />
    </div>
  )
}

export default ProfilePage
