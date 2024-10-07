'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "2013", stunted: 186, notStunted: 80 },
  { month: "2014", stunted: 305, notStunted: 200 },
  { month: "2015", stunted: 237, notStunted: 120 },
  { month: "2016", stunted: 73, notStunted: 190 },
  { month: "2017", stunted: 209, notStunted: 130 },
  { month: "2018", stunted: 214, notStunted: 140 },
  { month: "2019", stunted: 100, notStunted: 40 },
  { month: "2020", stunted: 180, notStunted: 150 },
  { month: "2021", stunted: 220, notStunted: 170 },
  { month: "2022", stunted: 160, notStunted: 130 },
  { month: "2023", stunted: 190, notStunted: 110 },
  { month: "2024", stunted: 170, notStunted: 90 }
];

const chartConfig = {
  stunted: {
    label: "Terkena Stunting",
    color: "hsl(var(--chart-1))",
  },
  notStunted: {
    label: "Tidak Stunting",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const StuntingChart = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold sm:mb-10">
        Grafik Perkembangan Stunting Di Tasikmalaya
      </h1>
      <ChartContainer className="p-0" config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="10 10" color="#000"
            className="!stroke-gray-200"
            strokeWidth={1.5}
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar
            dataKey="stunted"
            stackId="a"
            fill="var(--color-stunted)"
            radius={[0, 0, 4, 4]}
          />
          <Bar
            dataKey="notStunted"
            stackId="a"
            fill="var(--color-notStunted)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default StuntingChart;
