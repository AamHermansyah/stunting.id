/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useEffect, useState } from "react";
import CardOverview from './card-overview';
import { TbManFilled } from 'react-icons/tb';
import { GiWeight } from 'react-icons/gi';
import { PiBabyFill } from 'react-icons/pi';
import { FaHandSparkles } from 'react-icons/fa6';
import { getChildren } from "@/actions/showAnak";

interface ChildOverview {
  height: number;
  weight: number;
  headCircumference: number;
  armCircumference: number;
} 

interface OverviewProps {
  userId: any;
}

function Overview({ userId }: OverviewProps) {
  const [child, setChild] = useState<ChildOverview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChild = async () => {
      const res = await getChildren(userId);
      if (res.success && res.data.length > 0) {
        const childData = res.data[0];
        setChild({
          height: childData.height,
          weight: childData.weight,
          headCircumference: childData.headCircumference,
          armCircumference: childData.armCircumference,
        });
      } else {
        console.error(res.error);
      }
      setLoading(false);
    };
    fetchChild();
  }, []);

  return (
    <div className="w-full grid grid-cols-2 xl:grid-cols-1 gap-4 col-span-12 lg:col-span-7 xl:col-span-3 order-2 xl:order-3">
      <CardOverview
        Icon={TbManFilled}
        label="Tinggi Badan"
        value={loading ? 'Memuat...' : `${child?.height} cm`}
      />
      <CardOverview
        Icon={GiWeight}
        label="Berat Badan"
        value={loading ? 'Memuat...' : `${child?.weight} kg`}
      />
      <CardOverview
        Icon={PiBabyFill}
        label="Lingkar Kepala"
        value={loading ? 'Memuat...' : `${child?.headCircumference} cm`}
      />
      <CardOverview
        Icon={FaHandSparkles}
        label="Lingkar Lengan"
        value={loading ? 'Memuat...' : `${child?.armCircumference} cm`}
      />
    </div>
  );
}

export default Overview;
