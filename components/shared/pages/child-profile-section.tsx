'use client';

import React, { useEffect, useState } from 'react';
import TabsButton from '../tabs-button';
import Profile from './_components/profile';
import Chart from './_components/chart';
import Overview from './_components/overview';
import InterpretationResult from './_components/interpretation-result';
import { getChildren } from '@/actions/showAnak';
import { useParams } from 'next/navigation';

interface IProps {
  profile: string;
  diary: string;
  history: string;
}

export function ChildProfielSection({ profile, diary, history }: IProps) {
  const params = useParams();
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [child, setChild] = useState<any | null>(null); // State untuk menyimpan data anak
  const [loading, setLoading] = useState<boolean>(true); // State untuk loading

  // Ambil `childId` dari parameter sesuai role
  const childId =
    role === 'USER'
      ? params.childId // USER menggunakan params.childId
      : params.id; // KADER & KEPALA_KADER menggunakan params.id
  const parsedChildId =
    childId && !Array.isArray(childId) && !isNaN(Number(childId))
      ? parseInt(childId, 10)
      : null;

  console.log('Params from useParams:', params);
  console.log('Parsed childId:', parsedChildId);

  useEffect(() => {
    // Ambil informasi user dari cookie
    const authCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth='))?.split('=')[1];

    if (authCookie) {
      const user = JSON.parse(decodeURIComponent(authCookie));
      setUserId(user.id); // Set user ID dari cookie
      setRole(user.role); // Set role dari cookie
    }
  }, []);

  useEffect(() => {
    const fetchChild = async () => {
      if (userId && role && parsedChildId !== null) {
        console.log('Fetching child data with:', {
          userId,
          role,
          childId: parsedChildId,
        });

        const response = await getChildren(userId, role); // Ambil semua anak
        console.log('Response from getChildren:', response);

        if (response.success === 'success') {
          let selectedChild = null;

          if (role === 'KADER' || role === 'KEPALA_KADER') {
            // KADER & KEPALA_KADER bisa melihat semua data
            selectedChild = response.data.find(
              (child: any) => child.id === parsedChildId
            );
          } else if (role === 'USER') {
            // USER hanya bisa melihat anak miliknya sendiri
            selectedChild = response.data.find(
              (child: any) =>
                child.id === parsedChildId && child.userId === userId
            );
          }

          setChild(selectedChild || null); // Set data anak yang ditemukan
        }
        setLoading(false); // Set loading selesai
      }
    };

    fetchChild();
  }, [userId, role, parsedChildId]);

  if (loading) {
    return <div>Loading...</div>; // Tampilkan loading jika data sedang diambil
  }

  if (!child) {
    return <div>Anak tidak ditemukan atau Anda tidak memiliki izin untuk mengakses data ini.</div>; // Pesan jika anak tidak ditemukan atau akses ditolak
  }

  return (
    <>
      <TabsButton buku={profile} diary={diary} riwayat={history} />
      <div className="space-y-4">
        <div className="w-full grid grid-cols-12 items-start gap-4">
          <Profile userId={child.userId} childId={child.id} />
          <Chart />
          <Overview userId={child.userId} />
        </div>
        <InterpretationResult />
      </div>
    </>
  );
}
