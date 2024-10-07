"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type typeProps = {
  onChange: (date: Date | undefined) => void;
  disableFutureDate?: boolean;
  className?: string;
  placeholder?: string;
  disabledCustomDate?: {
    date: Date,
    type: 'prev' | 'next'
  } | null,
  defaultValue?: Date;
  type?: 'dropdown-buttons' | 'buttons';
}

export function DatePicker({
  onChange,
  disableFutureDate,
  placeholder,
  disabledCustomDate,
  defaultValue,
  className = '',
  type = 'buttons'
}: typeProps) {
  const [date, setDate] = React.useState<Date | undefined>(defaultValue);
  const [openCalendar, setOpenCalendar] = React.useState(false);

  const fromDate = new Date(1950, 0);
  const toDate = new Date();

  return (
    <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{!placeholder ? 'Pick a date' : placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date);
            onChange(date);
          }}
          disabled={(date) => {
            if (disableFutureDate) return date > new Date() || date < new Date("1900-01-01");
            if (disabledCustomDate) {
              const { type, date: customDate } = disabledCustomDate;
              return type === 'prev' ? date < customDate : date > customDate
            }
            return false;
          }}
          initialFocus
          captionLayout={type}
          fromDate={fromDate}
          toDate={toDate}
          classNames={type === 'dropdown-buttons' ? {
            caption_dropdowns: "w-full flex gap-2",
            caption_label: "hidden",
            vhidden: "hidden",
            dropdown_icon: "hidden",
            dropdown: "w-full rounded-lg",
            nav_button_next: "absolute bottom-4 left-4 translate-x-[150%]",
            nav_button_previous: "absolute bottom-4 left-4",
            caption: "flex justify-center pt-1 items-center",
          } : undefined}

        />
        <div className="w-full flex justify-end px-4 pb-4">
          <Button size="sm" disabled={!date} onClick={() => setOpenCalendar(false)}>
            Save
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}