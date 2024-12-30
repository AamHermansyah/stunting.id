"use client";

import React, { useEffect, useState } from 'react';
import CardOverview from './card-overview';
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import { getMeasurements } from "@/actions/measurement";

interface StatusCount {
  Sehat: number;
  Stunting: number;
  Obesitas: number;
}

function Overview() {
  const [statusCount, setStatusCount] = useState<StatusCount>({
    Sehat: 0,
    Stunting: 0,
    Obesitas: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      const measurements = await getMeasurements();
      
      // Menghitung jumlah untuk setiap status gizi
      const counts = measurements.reduce((acc, measurement) => {
        const status = measurement.statusGizi;
        if (status === "Sehat" || status === "Stunting" || status === "Obesitas") {
          acc[status] = (acc[status] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>);

      setStatusCount({
        Sehat: counts.Sehat || 0,
        Stunting: counts.Stunting || 0,
        Obesitas: counts.Obesitas || 0
      });
    };

    fetchData();
  }, []);

  return (
    <div className='w-full grid grid-cols-2 xl:grid-cols-4 gap-4 col-span-12'>
      <CardOverview 
        label='Sehat' 
        value={statusCount.Sehat.toString()} 
        status='Naik 2.34%' 
        Icon={BiTrendingUp} 
        since='tahun kemarin'
      />
      <CardOverview 
        label='Stunting' 
        value={statusCount.Stunting.toString()} 
        status='Turun 2.34%' 
        Icon={BiTrendingDown} 
        since='tahun kemarin'
      />
      <CardOverview 
        label='Kurang Gizi' 
        value='?' 
        status='Turun 3.01%' 
        Icon={BiTrendingUp} 
        since='tahun kemarin'
      />
      <CardOverview 
        label='Obesitas' 
        value={statusCount.Obesitas.toString()} 
        status='Turun 1.21%' 
        Icon={BiTrendingUp} 
        since='tahun kemarin'
      />
    </div>
  );
}

export default Overview;
