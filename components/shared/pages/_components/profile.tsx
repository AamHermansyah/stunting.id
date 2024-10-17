'use client'

import React, { useEffect, useState } from 'react';
import CardProfileDetail from './card-profile-detail';
import { Button } from '@/components/ui/button';
import { getChildren } from '@/actions/showAnak';

interface ChildProfile {
  id: number;
  name: string;
  birthDate: string; // Tetap sebagai string
  gender: string;
  bloodType: string;
  height: number;
  headCircumference: number;
  weight: number;
  armCircumference: number;
  allergies: string;
}

function Profile() {
  const [child, setChild] = useState<ChildProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const userId = 'cm2bz7nxq0000saja1z3y8lxf'; // Ganti dengan user dinamis

  useEffect(() => {
    const fetchChild = async () => {
      const res = await getChildren(userId);
      if (res.success && res.data.length > 0) {
        const fetchedChild = {
          ...res.data[0],
          birthDate: new Date(res.data[0].birthDate).toISOString(), // Konversi Date menjadi string (ISO format)
          allergies: res.data[0].allergy, // Ubah dari 'allergy' menjadi 'allergies'
        };
        setChild(fetchedChild);
      }
      setLoading(false);
    };
    fetchChild();
  }, []);

  const calculateMonthDifference = (startDate: string, endDate: Date) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return 'Invalid Date';
    }

    const yearsDifference = end.getFullYear() - start.getFullYear();
    const monthsDifference = end.getMonth() - start.getMonth();

    return yearsDifference * 12 + monthsDifference;
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
              : `0 Tahun ${calculateMonthDifference(
                  child?.birthDate || '',
                  new Date()
                )} Bulan`}
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-x-2 gap-y-4 py-3">
        <CardProfileDetail
          label="Tanggal Lahir"
          value={loading ? 'Memuat...' : new Date(child?.birthDate || '').toLocaleDateString()}
        />
        <CardProfileDetail
          label="Jenis Kelamin"
          value={loading ? 'Memuat...' : child?.gender || ''}
        />
        <CardProfileDetail
          label="Riwayat Alergi"
          value={loading ? 'Memuat...' : child?.allergies || 'Tidak ada'}
        />
        <CardProfileDetail
          label="Golongan Darah"
          value={loading ? 'Memuat...' : child?.bloodType || ''}
        />
      </div>
      <Button variant="secondary" className="w-full">
        {loading ? 'Memuat...' : 'Lihat Detail'}
      </Button>
    </div>
  );
}

export default Profile;
