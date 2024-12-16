'use client';

import React, { useEffect, useState } from 'react';
import ChildrenProfile from '@/app/dashboard/(home)/_components/children-profile';
import { useParams } from 'next/navigation';

const ProfilePage = () => {
  const params = useParams();
  // Pastikan userId adalah string tunggal
  const userId = Array.isArray(params['userId']) ? params['userId'][0] : params['userId'];

  const [children, setChildren] = useState([]);
  const [userRole, setUserRole] = useState<string>('');

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const res = await fetch(`/api/children?parentId=${userId}&role=${userRole}`);
        const data = await res.json();
        setChildren(data?.data || []);
      } catch (error) {
        console.error('Error fetching children:', error);
      }
    };

    const fetchUserRole = async () => {
      const role = await fetch(`/api/user-role/${userId}`).then(res => res.json());
      setUserRole(role || '');
    };

    fetchUserRole();
    fetchChildren();
  }, [userId, userRole]);

  return (
    <div>
      <ChildrenProfile
        children={children}
        detail={`/management/orang-tua/profile/${userId}/detail-anak`}
        add={`/management/orang-tua/profile/${userId}/tambah-anak`}
        edit={`/management/orang-tua/profile/${userId}/edit-anak/`}
        id={userId} // Gunakan userId yang sudah dipastikan sebagai string
        role={userRole}
      />
    </div>
  );
};

export default ProfilePage;
