/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useEffect, useState } from "react";
import CardOverview from './card-overview';
import { TbManFilled } from 'react-icons/tb';
import { GiWeight } from 'react-icons/gi';
import { PiBabyFill } from 'react-icons/pi';
import { FaHandSparkles } from 'react-icons/fa6';
import { getChildren } from "@/actions/showAnak";
import { usePathname } from 'next/navigation';

interface ChildOverview {
  id: number; // Tambahkan properti id
  height: number;
  weight: number;
  headCircumference: number;
  armCircumference: number;
} 

interface OverviewProps {
  userId: any;
}

function Overview({ userId }: OverviewProps) {
  const pathname = usePathname();
  const [child, setChild] = useState<ChildOverview | null>(null);
  const [loading, setLoading] = useState(true);

  // Extract the child ID from the pathname
  const childId = pathname.split('/').pop(); // Assuming the ID is the last part of the URL

  useEffect(() => {
    const fetchChild = async () => {
      const res = await getChildren(userId.toString());
      if (res.success && res.data.length > 0) {
        // Find the child with the ID from the URL
        const fetchedChild = res.data.find((child: ChildOverview) => child.id.toString() === childId);
        if (fetchedChild) {
          setChild(fetchedChild);
        }
      } else {
        console.error(res.error);
      }
      setLoading(false);
    };
    fetchChild();
  }, [childId]);

  return (
    <div className="w-full grid grid-cols-2 xl:grid-cols-1 gap-4 col-span-12 lg:col-span-7 xl:col-span-3 order-2 xl:order-3">
      <CardOverview
        Icon={TbManFilled}
        label="Tinggi Badan"
        value={loading ? 'Memuat...' : `${child?.height || 0} cm`}
      />
      <CardOverview
        Icon={GiWeight}
        label="Berat Badan"
        value={loading ? 'Memuat...' : `${child?.weight || 0} kg`}
      />
      <CardOverview
        Icon={PiBabyFill}
        label="Lingkar Kepala"
        value={loading ? 'Memuat...' : `${child?.headCircumference || 0} cm`}
      />
      <CardOverview
        Icon={FaHandSparkles}
        label="Lingkar Lengan"
        value={loading ? 'Memuat...' : `${child?.armCircumference || 0} cm`}
      />
    </div>
  );
}

export default Overview;
