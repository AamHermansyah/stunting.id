'use client'

import React from 'react'
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
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

const chartData = [
  { month: "January", upper: 450, middle: 350, lower: 300, baby: 320 },
  { month: "February", upper: 400, middle: 380, lower: 320, baby: 340 },
  { month: "March", upper: 370, middle: 390, lower: 350, baby: 360 },
  { month: "April", upper: 350, middle: 360, lower: 370, baby: 380 },
  { month: "May", upper: 370, middle: 330, lower: 380, baby: 360 },
  { month: "June", upper: 400, middle: 310, lower: 350, baby: 340 },
  { month: "July", upper: 430, middle: 330, lower: 300, baby: 320 },
  { month: "August", upper: 410, middle: 360, lower: 340, baby: 360 },
  { month: "September", upper: 390, middle: 390, lower: 360, baby: 370 },
  { month: "October", upper: 420, middle: 410, lower: 380, baby: 390 },
  { month: "November", upper: 450, middle: 420, lower: 400, baby: 410 },
  { month: "December", upper: 480, middle: 430, lower: 420, baby: 430 },
];

function Chart() {
  return (
    <div className="w-full col-span-12 xl:col-span-6 order-3 xl:order-2 py-4 border rounded-lg space-y-4 bg-background">
      <div className="flex flex-col sm:flex-row justify-between gap-2 items-center px-4">
        <div className='flex flex-col'>
          <h1 className="text-base sm:text-lg font-semibold">Statistik Balita yang (Sehat/Stunting/Gizi/Obesitas)</h1>
          <h2 className="text-xs sm:text-sm font-semibold text-gray-400">Data balita yang terdapat di Posyandu ...</h2>
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Pilih Tahun" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tahun ini (2024)</SelectLabel>
              <SelectItem value="6">Tahun 2023</SelectItem>
              <SelectItem value="12">Tahun 2022</SelectItem>
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
