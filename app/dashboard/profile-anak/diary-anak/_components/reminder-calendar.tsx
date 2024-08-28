'use client'

import React from "react";
import { Calendar } from "@/components/ui/calendar";

const ReminderCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="w-full border rounded-lg space-y-4 p-4">
      <div className="flex flex-row">
        Kalendar Pengingat • <span>2024</span>
      </div>
      <div className="flex flex-row overflow-auto">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    </div>
  );
};

export default ReminderCalendar;
