/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect, useState } from 'react';
import CardProfileDetail from './card-profile-detail';
import { Button } from '@/components/ui/button';
import { getChildren } from '@/actions/showAnak';
import { Child } from '@prisma/client';
import Link from 'next/link';
import { calculateMonthDifferenceText } from '@/lib/utils';

interface ProfileProps {
  userId: string;
  childId: string;
}

function Profile({ userId, childId }: ProfileProps) {
  const [child, setChild] = useState<Child | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getChildren(userId.toString());
      if (res.success && res.data.length > 0) {
        const fetchedChild = res.data.find((child: Child) => child.id.toString() === childId);
        if (fetchedChild) {
          setChild(fetchedChild);
        }
      }
      setLoading(false);
    })();
  }, []);

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
              : calculateMonthDifferenceText(child?.birthDate || new Date(), new Date())}
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-x-2 gap-y-4 py-3">
        <CardProfileDetail
          label="Tanggal Lahir"
          value={loading ? 'Memuat...' : child?.birthDate?.toLocaleDateString() || '-'}
        />
        <CardProfileDetail
          label="Jenis Kelamin"
          value={loading ? 'Memuat...' : child?.gender || '-'}
        />
        <CardProfileDetail
          label="Riwayat Alergi"
          value={loading ? 'Memuat...' : child?.allergy || '-'}
        />
        <CardProfileDetail
          label="Prematur"
          value={loading ? 'Memuat...' : child?.premature || '-'}
        />
        <CardProfileDetail
          label="Golongan Darah"
          value={loading ? 'Memuat...' : child?.bloodType || '-'}
        />
      </div>
      <Link href={`/dashboard/profile-anak/${childId}/diary-anak`}>
        <Button variant="secondary" className="w-full">
          Log Nutrisi
        </Button>
      </Link>
    </div>
  );
}

export default Profile;
