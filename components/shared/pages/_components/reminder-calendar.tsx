"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { totalMonthUntilNow } from "@/lib/utils";

const ReminderCalendar = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const totalCalendar = totalMonthUntilNow(new Date()) + 1;

  return (
    <div className="w-full border rounded-lg space-y-4 sm:p-4 p-1">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center">
        <h2 className="flex sm:flex-row font-medium lg:text-xl text-sm gap-2 items-center">
          Kalendar Pengingat
        </h2>
      </div>

      <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide">
        {Array.from({ length: totalCalendar }).map((_, index) => (
          <Calendar
            key={`c-${index}`}
            mode="single"
            className="rounded-md border"
            defaultMonth={new Date(year, month + index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReminderCalendar;
