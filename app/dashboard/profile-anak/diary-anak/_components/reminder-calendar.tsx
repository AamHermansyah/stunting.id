"use client";

import React, { useState, useRef } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const ReminderCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [year, setYear] = useState<number>(2024);
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  // Daftar bulan
  const months = ["Juni", "Juli", "Agustus", "September", "Oktober"];

  // Ref untuk carousel container
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handler untuk navigasi tahun berikutnya
  const handleNextYear = () => {
    setYear((prevYear) => prevYear + 1);
  };

  // Handler untuk navigasi tahun sebelumnya
  const handlePreviousYear = () => {
    setYear((prevYear) => prevYear - 1);
  };

  // Handler untuk navigasi ke kanan
  const handleNext = () => {
    if (carouselIndex < months.length - 1) {
      setCarouselIndex((prevIndex) => prevIndex + 1);
      carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Handler untuk navigasi ke kiri
  const handlePrevious = () => {
    if (carouselIndex > 0) {
      setCarouselIndex((prevIndex) => prevIndex - 1);
      carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Free drag functionality
  const handleDragStart = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = "auto";
      carouselRef.current.dataset.dragging = "true";
      carouselRef.current.dataset.mouseStartX = e.clientX.toString();
      carouselRef.current.dataset.scrollStartX = carouselRef.current.scrollLeft.toString();
    }
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (carouselRef.current?.dataset.dragging === "true") {
      const diff = e.clientX - Number(carouselRef.current.dataset.mouseStartX);
      carouselRef.current.scrollLeft = Number(carouselRef.current.dataset.scrollStartX) - diff;
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
      <div className="flex sm:flex-row flex-col sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row font-medium text-xl gap-2 items-center">
          Kalendar Pengingat
          <div className="flex items-center gap-2">
            <span> • {year}</span>
            <button onClick={handlePreviousYear} className="p-2 rounded">
              &lt;
            </button>
            <button onClick={handleNextYear} className="p-2 rounded">
              &gt;
            </button>
          </div>
        </div>
        <div className="space-x-4">
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
        {months.map((monthName, index) => (
              <div key={index}>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  defaultMonth={new Date(year, month + index)}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default ReminderCalendar;
