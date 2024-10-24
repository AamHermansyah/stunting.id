import ChildrenProfile from '@/app/dashboard/(home)/_components/children-profile'
import { AuthCookie } from '@/types';
import { cookies } from 'next/headers';
import { useParams } from 'next/navigation';
import React from 'react'

const ProfilePage = () => {
  const authCookie = cookies().get('auth');
  const user = JSON.parse(authCookie!.value) as AuthCookie;

  return (
    <div>
      <ChildrenProfile
        id={user.id}
        detail={`/management/orang-tua/profile/${user.id}/detail-anak`}
        add={`/management/orang-tua/profile/${user.id}/tambah-anak`}
        edit={`/management/orang-tua/profile/${user.id}/edit-anak/`}
      />
    </div>
  )
}

export default ProfilePage
