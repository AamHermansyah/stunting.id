'use client'

import React from 'react'
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
    label: "Upper",
    color: "hsl(var(--chart-1))",
  },
  middle: {
    label: "Middle",
    color: "hsl(var(--chart-3))",
  },
  baby: {
    label: "Baby",
    color: "hsl(var(--chart-4))",
  },
  lower: {
    label: "Lower",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const chartData = [
  { month: "January", upper: 90, middle: 79, lower: 70, baby: 78 },
  { month: "February", upper: 93, middle: 83, lower: 72, baby: 79 },
  { month: "March", upper: 95, middle: 85, lower: 75, baby: 82 },
  { month: "April", upper: 98, middle: 88, lower: 78, baby: 83 },
  { month: "May", upper: 99, middle: 90, lower: 80, baby: 85 },
  { month: "June", upper: 101, middle: 93, lower: 82, baby: 89 },
]

function Chart() {
  return (
    <div className="w-full col-span-12 xl:col-span-6 order-3 xl:order-2 py-4 border rounded-lg space-y-4 bg-white">
      <div className="flex justify-between gap-2 items-center px-4">
        <h1 className="text-lg font-semibold">Grafik WHO</h1>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Pilih rentan usia" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Rentan</SelectLabel>
              <SelectItem value="6">0 - 6 Bulan</SelectItem>
              <SelectItem value="12">6 - 12 Bulan</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ChartContainer config={chartConfig} className="px-2 sm:px-4">
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
              value: "Usia (bulan)",
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
              value: "Tinggi (cm)",
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
            type="linear"
            stroke="var(--color-baby)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-baby)",
              r: 5
            }}
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