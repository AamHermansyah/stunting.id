'use client'

import ChildrenProfile from '@/app/dashboard/(home)/_components/children-profile';
import { useParams } from 'next/navigation';
import React from 'react';

const ProfilePage = () => {
  const params = useParams();
  const userId = params['user.id'];

  return (
    <div>
      <ChildrenProfile
        id={userId as string}
        detail={`/management/orang-tua/profile/${userId}/detail-anak`}
        add={`/management/orang-tua/profile/${userId}/tambah-anak`}
        edit={`/management/orang-tua/profile/${userId}/edit-anak/`}
      />
    </div>
  );
}

export default ProfilePage;