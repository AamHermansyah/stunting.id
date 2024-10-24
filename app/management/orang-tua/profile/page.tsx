import ChildrenProfile from '@/app/dashboard/(home)/_components/children-profile'
import { AuthCookie } from '@/types';
import { cookies } from 'next/headers';
import { useParams } from 'next/navigation';
import React from 'react'

const ProfilePage = () => {
  const authCookie = cookies().get('auth');
  const user = JSON.parse(authCookie!.value) as AuthCookie;
  const id = useParams();

  return (
    <div>
      <ChildrenProfile
        id={user.id}
        detail={`/management/orang-tua/profile/${id}/detail-anak`}
        add={`/management/orang-tua/profile/${id}/tambah-anak`}
      />
    </div>
  )
}

export default ProfilePage
