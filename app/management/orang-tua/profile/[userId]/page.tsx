
'use client'

import ChildrenProfile from '@/app/dashboard/(home)/_components/children-profile';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getUserRoleById } from '@/data/user';

const ProfilePage = () => {
  const params = useParams();
  const userId = Array.isArray(params['user.id']) ? params['user.id'][0] : params['user.id'];

  const [userRole, setUserRole] = useState<string>('');

  useEffect(() => {
    const fetchUserRole = async () => {
      const role = await getUserRoleById(userId);
      setUserRole(role || '');
    };

    fetchUserRole();
  }, [userId]);

  console.log(getUserRoleById);

  return (
    <div>
      <ChildrenProfile
        id={userId as string}
        detail={`/management/orang-tua/profile/${userId}/detail-anak`}
        add={`/management/orang-tua/profile/${userId}/tambah-anak`}
        edit={`/management/orang-tua/profile/${userId}/edit-anak/`}
        role={userRole}
      />
    </div>
  );
}

export default ProfilePage;