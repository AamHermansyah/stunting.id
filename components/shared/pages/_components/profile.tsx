/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect, useState } from 'react';
import CardProfileDetail from './card-profile-detail';
import { Button } from '@/components/ui/button';
import { getChildren } from '@/actions/showAnak';
import { usePathname } from 'next/navigation';

interface ChildProfile {
  id: number;
  name: string;
  birthDate: Date; 
  gender: string;
  bloodType: string;
  height: number;
  headCircumference: number;
  weight: number;
  armCircumference: number;
  allergy: string;
}

interface ProfileProps {
  userId: any;
}

function Profile({ userId }: ProfileProps) {
  const pathname = usePathname();
  const [child, setChild] = useState<ChildProfile | null>(null);
  const [loading, setLoading] = useState(true);
  
  const childId = pathname.split('/').pop(); 
  
  useEffect(() => {
    const fetchChild = async () => {
      const res = await getChildren(userId.toString());
      if (res.success && res.data.length > 0) {
        const fetchedChild = res.data.find((child: ChildProfile) => child.id.toString() === childId);
        if (fetchedChild) {
          setChild(fetchedChild); 
        }
      }
      setLoading(false);
    };
    fetchChild();
  }, [childId]);

  const calculateMonthDifference = (startDate: Date, endDate: Date) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return 'Invalid Date';
    }

    const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `${years} Tahun ${months} Bulan`;
  };

  return (
    <div className="p-4 w-full col-span-12 lg:col-span-5 xl:col-span-3 order-1 border rounded-lg space-y-2 bg-white">
      <h1 className="text-lg font-semibold">Profile Anak</h1>
      <div className="flex items-center gap-3">
        <div className="relative w-14 aspect-square bg-gray-200 border-white border-4 shadow-md rounded-full"></div>
        <div className="leading-5">
          <h3 className="font-semibold">{loading ? 'Memuat...' : child?.name}</h3>
          <span className="text-sm text-muted-foreground/70">
            {loading
              ? 'Memuat...'
              : calculateMonthDifference(child?.birthDate || new Date(), new Date())}
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-x-2 gap-y-4 py-3">
        <CardProfileDetail
          label="Tanggal Lahir"
          value={loading ? 'Memuat...' : child?.birthDate?.toLocaleDateString() || ''} // Fallback ke string kosong
        />
        <CardProfileDetail
          label="Jenis Kelamin"
          value={loading ? 'Memuat...' : child?.gender || ''} // Fallback ke string kosong
        />
        <CardProfileDetail
          label="Riwayat Alergi"
          value={loading ? 'Memuat...' : child?.allergy || 'Tidak ada'} // Fallback jika tidak ada data alergi
        />
        <CardProfileDetail
          label="Golongan Darah"
          value={loading ? 'Memuat...' : child?.bloodType || ''} // Fallback ke string kosong
        />
      </div>
      <Button variant="secondary" className="w-full">
        {loading ? 'Memuat...' : 'Lihat Detail'}
      </Button>
    </div>
  );
}

export default Profile;
