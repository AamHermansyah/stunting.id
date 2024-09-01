"use client";

import React, { useState, useRef } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ReminderCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  // Ref untuk carousel container
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handler untuk navigasi ke kanan
  const handleNext = () => {
    if (carouselIndex < 1) { // Karena hanya ada dua kalender
      setCarouselIndex((prevIndex) => prevIndex + 1);
      carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
      setMonth((prevMonth) => prevMonth + 1);
    }
  };

  // Handler untuk navigasi ke kiri
  const handlePrevious = () => {
    if (carouselIndex > 0) {
      setCarouselIndex((prevIndex) => prevIndex - 1);
      carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
      setMonth((prevMonth) => prevMonth - 1);
    }
  };

  // Free drag functionality
  const handleDragStart = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = "auto";
      carouselRef.current.dataset.dragging = "true";
      carouselRef.current.dataset.mouseStartX = e.clientX.toString();
      carouselRef.current.dataset.scrollStartX =
        carouselRef.current.scrollLeft.toString();
    }
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (carouselRef.current?.dataset.dragging === "true") {
      const diff = e.clientX - Number(carouselRef.current.dataset.mouseStartX);
      carouselRef.current.scrollLeft =
        Number(carouselRef.current.dataset.scrollStartX) - diff;
    }
  };

  const handleDragEnd = () => {
    if (carouselRef.current) {
      carouselRef.current.dataset.dragging = "false";
      carouselRef.current.style.scrollBehavior = "smooth";
    }
  };

  return (
    <div className="w-full border rounded-lg space-y-4 sm:p-4 p-1">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center">
        <div className="flex sm:flex-row font-medium lg:text-xl text-sm gap-2 items-center">
          Kalendar Pengingat
          <div className="flex items-center gap-2">
            <span> • {year}</span>
            <Button onClick={() => setYear(year - 1)} className="p-2 rounded bg-transparent text-black hover:bg-gray-50">
              <IoIosArrowBack fontSize={20} className="my-auto" />
            </Button>
            <Button onClick={() => setYear(year + 1)} className="p-2 rounded bg-transparent text-black hover:bg-gray-50">
              <IoIosArrowForward fontSize={20} className="my-auto" />
            </Button>
          </div>
        </div>
        <div className="sm:flex hidden space-x-4">
          <Button
            onClick={handlePrevious}
            className="bg-transparent p-2 text-[#108786] border-2 shadow-sm opacity-50 hover:opacity-100"
          >
            <BsArrowLeft fontSize={20} className="my-auto" />
          </Button>
          <Button
            onClick={handleNext}
            className="bg-transparent p-2 text-[#108786] border-2 shadow-sm opacity-50 hover:opacity-100"
          >
            <BsArrowRight fontSize={20} className="my-auto" />
          </Button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex flex-row gap-4 overflow-x-auto scrollbar-hide"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {/* Render hanya bulan sebelumnya dan bulan saat ini */}
        <div key={month - 1}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            defaultMonth={new Date(year, month - 1)}
          />
        </div>
        <div key={month}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            defaultMonth={new Date(year, month)}
          />
        </div>
      </div>
      <div className="justify-center flex sm:hidden space-x-4">
          <Button
            onClick={handlePrevious}
            className="bg-transparent p-2 text-[#108786] border-2 shadow-sm opacity-50 hover:opacity-100"
          >
            <BsArrowLeft fontSize={20} className="my-auto" />
          </Button>
          <Button
            onClick={handleNext}
            className="bg-transparent p-2 text-[#108786] border-2 shadow-sm opacity-50 hover:opacity-100"
          >
            <BsArrowRight fontSize={20} className="my-auto" />
          </Button>
        </div>
    </div>
  );
};

export default ReminderCalendar;
