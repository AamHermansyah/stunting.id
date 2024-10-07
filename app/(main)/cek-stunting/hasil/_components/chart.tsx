'use client';

import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"

const chartConfig = {
  stunted: {
    label: "Terkena Stunting",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

const chartData = [
  { year: "2013", stunted: 90 },
  { year: "2014", stunted: 60 },
  { year: "2015", stunted: 80 },
  { year: "2016", stunted: 100 },
  { year: "2017", stunted: 75 },
  { year: "2018", stunted: 84 },
]

const Chart = () => {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
        Grafik bayi terkena stunting
      </h1>
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
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={0}
            tickCount={7}
            domain={['auto', 'auto']}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="stunted"
            type="monotone"
            stroke="var(--color-stunted)"
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
  );
};

export default Chart;
