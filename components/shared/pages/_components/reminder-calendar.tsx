"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { formatDateToYYYYMMDD, getMissedDays, totalMonthUntilNow } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface IProps {
  data: Date[];
  childId: string;
  userJoined: Date;
}

function ReminderCalendar({ data, childId, userJoined }: IProps) {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const totalCalendar = totalMonthUntilNow(new Date()) + 1;
  const navigate = useRouter();

  const firstCompleted = data[0] || new Date(userJoined);
  const missedDays = getMissedDays(firstCompleted, data);

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
            mode="range"
            className="rounded-md border"
            defaultMonth={new Date(year, month + index)}
            onDayClick={(day, activeModifier) => {
              if (activeModifier?.completed || activeModifier?.missed) {
                const query = `date=${formatDateToYYYYMMDD(day)}&status=${activeModifier?.completed ? 'completed' : 'missed'}`;
                navigate.push(`/dashboard/profile-anak/${childId}/diary-anak?${query}`);
              }
            }}
            modifiers={{
              completed: data,
              missed: missedDays
            }}
            modifiersClassNames={{
              completed: "bg-emerald-200 text-emerald-500 rounded-none hover:bg-emerald-200 hover:text-emerald-500",
              missed: "bg-red-200 text-red-500 rounded-none hover:bg-red-200 hover:text-red-500",
            }}
          />
        ))}
      </div>

      {missedDays.length > 0 && (
        <div className="p-4 bg-destructive/70 text-destructive-foreground rounded-md">
          <h4 className="font-semibold">Perhatian</h4>
          <p className="text-sm">Silahkan lakukan pengisian data nutrisi harian. Tercatat {missedDays.length} hari anda tidak mengisinya^^</p>
        </div>
      )}
    </div>
  );
};

export default ReminderCalendar;
