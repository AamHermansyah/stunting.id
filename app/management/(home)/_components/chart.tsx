'use client'

import React, { useEffect, useState } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { getMeasurements } from "@/actions/measurement"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"

const chartConfig = {
  upper: {
    label: "Sehat",
    color: "hsl(var(--chart-2))",
  },
  middle: {
    label: "Stunting",
    color: "hsl(var(--chart-3))",
  },
  baby: {
    label: "Kurang Nutrisi",
    color: "hsl(var(--chart-4))",
  },
  lower: {
    label: "Obesitas",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

interface MonthlyStats {
  month: string;
  upper: number; // Sehat
  middle: number; // Stunting
  lower: number; // Obesitas
  baby: number; // Kurang Nutrisi
}

function Chart() {
  const [chartData, setChartData] = useState<MonthlyStats[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    // Generate years from one year back to three years ahead
    const currentYear = new Date().getFullYear();
    const generatedYears = Array.from({ length: 5 }, (_, i) => currentYear - 1 + i);
    setYears(generatedYears);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const measurements = await getMeasurements();
      
      // Filter measurements by selected year
      const filteredMeasurements = measurements.filter(measurement => {
        const measurementYear = new Date(measurement.date).getFullYear();
        return measurementYear === selectedYear;
      });

      // Membuat objek untuk menyimpan statistik bulanan
      const monthlyData: { [key: string]: { Sehat: number; Stunting: number; Obesitas: number; 'Kurang Nutrisi': number } } = {};
      
      // Inisialisasi data untuk setiap bulan
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];
      
      months.forEach(month => {
        monthlyData[month] = {
          Sehat: 0,
          Stunting: 0,
          Obesitas: 0,
          'Kurang Nutrisi': 0
        };
      });

      // Menghitung jumlah status gizi per bulan
      filteredMeasurements.forEach(measurement => {
        const date = new Date(measurement.date);
        const month = date.toLocaleString('en-US', { month: 'long' });
        const status = measurement.statusGizi;
        
        if (monthlyData[month]) {
          if (status === 'Sehat') monthlyData[month].Sehat++;
          else if (status === 'Stunting') monthlyData[month].Stunting++;
          else if (status === 'Obesitas') monthlyData[month].Obesitas++;
          else if (status === 'Kurang Nutrisi') monthlyData[month]['Kurang Nutrisi']++;
        }
      });

      // Mengkonversi data ke format yang dibutuhkan chart
      const formattedData = months.map(month => ({
        month,
        upper: monthlyData[month].Sehat,
        middle: monthlyData[month].Stunting,
        lower: monthlyData[month].Obesitas,
        baby: monthlyData[month]['Kurang Nutrisi']
      }));

      setChartData(formattedData);
    };

    fetchData();
  }, [selectedYear]); // Fetch data when selectedYear changes

  return (
    <div className="w-full col-span-12 xl:col-span-6 order-3 xl:order-2 py-4 border rounded-lg space-y-4 bg-background">
      <div className="flex flex-col sm:flex-row justify-between gap-2 items-center px-4">
        <div className='flex flex-col'>
          <h1 className="text-base sm:text-lg font-semibold">Statistik Balita yang (Sehat/Stunting/Gizi/Obesitas)</h1>
          <h2 className="text-xs sm:text-sm font-semibold text-gray-400">Data balita yang terdapat di Posyandu ...</h2>
        </div>
        <Select onValueChange={(value) => setSelectedYear(Number(value))}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Pilih Tahun" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {years.map(year => (
                <SelectItem key={year} value={year.toString()}>{`Tahun ${year}`}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <ChartContainer config={chartConfig} className="px-2 sm:px-4 h-[400px] w-full">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: -25,
            right: 10,
            bottom: 10
          }}
        >
          <CartesianGrid
            vertical={true}
            strokeDasharray="10 10" color="#000"
            className="!stroke-gray-200"
            strokeWidth={1.5}
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
            label={{
              value: "Bulan",
              position: "insideBottom",
              offset: -8,
              className: "fill-primary font-semibold"
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={0}
            tickCount={7}
            domain={['auto', 'auto']}
            label={{
              value: "Jumlah Balita",
              position: "outsideRight",
              angle: -90,
              offset: 0,
              className: "fill-primary font-semibold"
            }}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="upper"
            type="monotone"
            stroke="var(--color-upper)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="middle"
            type="monotone"
            stroke="var(--color-middle)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="lower"
            type="monotone"
            stroke="var(--color-lower)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="baby"
            type="monotone"
            stroke="var(--color-baby)"
            strokeWidth={2}
            dot={false}
          />
          <ChartLegend
            content={<ChartLegendContent className="justify-start pl-14 pb-4" />}
            layout="horizontal"
            verticalAlign="top"
            align="left"
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}

export default Chart
