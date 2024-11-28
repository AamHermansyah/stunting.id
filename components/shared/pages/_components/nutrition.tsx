'use client'

import React, { useEffect, useState } from "react";
import CardNutritionDetail from "./card-nutrition-detail";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BreastfeedingTime, MealNutrition, MealTime, NutritionLog } from "@prisma/client";
import { formatCreatedAt, formatDateToYYYYMMDD, getDayName } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

interface IProps {
  edit: string;
  todayData: (NutritionLog & {
    mealNutrition?: MealNutrition[];
    breastfeedingTimes?: BreastfeedingTime[];
  }) | null;
  data: (NutritionLog & {
    mealNutrition?: MealNutrition[];
    breastfeedingTimes?: BreastfeedingTime[];
  })[]
}

function Nutrition({ edit, todayData, data }: IProps) {
  const [currentDate, setCurrentDate] = useState(todayData);
  const searchParams = useSearchParams();
  const dateQuery: string | null = searchParams.get('date');
  const statusQuery: string | null = searchParams.get('status');

  useEffect(() => {
    if (statusQuery && dateQuery) {
      if (statusQuery === 'missed') {
        setCurrentDate(null);
      } else if (statusQuery === 'completed') {
        const selectedDateQuery = formatDateToYYYYMMDD(new Date(dateQuery));

        const selectedDate = data.find((item) => {
          const currentDate = formatDateToYYYYMMDD(new Date(item.createdAt));

          return selectedDateQuery === currentDate;
        });

        if (selectedDate) setCurrentDate(selectedDate);
      }
    }
  }, [dateQuery, statusQuery]);

  return (
    <div className="p-4 w-full col-span-12 lg:col-span-4 xl:col-span-3 order-1 border rounded-lg flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex flex-col font-medium text-sm gap-2">
          <h1 className="lg:text-xl">{getDayName(dateQuery ? new Date(dateQuery) : new Date())}</h1>
          <span className="text-muted-foreground/70">{formatCreatedAt(dateQuery ? new Date(dateQuery) : new Date(), true)}</span>
        </div>
        <div>
          <h2 className="font-medium lg:text-base text-sm">Nutrisi Pribadi</h2>
          <div className="w-full grid grid-cols-2 gap-x-2 gap-y-4 py-2 lg:text-base text-sm">
            {currentDate ? (
              <>
                <CardNutritionDetail
                  label="Asupan Asi"
                  value={`${currentDate?.breastfeedingFreq}`}
                />
                {currentDate.breastfeedingTimes && currentDate.breastfeedingTimes.map((item, index) => (
                  <CardNutritionDetail
                    key={`asi-${index}`}
                    label={`ASI ke-${index + 1}`}
                    value={`${item.time} WIB`}
                  />
                ))}
                {currentDate.mealNutrition && currentDate.mealNutrition.map((item, index) => (
                  <CardNutritionDetail
                    label={`Makan ${timeofMealLabel(item.timeOfMeal)}`}
                    key={`menu-${index + 1}`}
                    value={item.menuOfMeal}
                  />
                ))}
              </>
            ) : <p className="col-span-2">Data nutrisi harian masih kosong!</p>}
          </div>
        </div>
      </div>
      {!currentDate && (
        <Link href={`${edit}?missedDate=${dateQuery || formatDateToYYYYMMDD(new Date())}`}>
          <Button className="mt-4 w-full">
            Tambah Data Nutrisi
          </Button>
        </Link>
      )}
    </div>
  );
};

function timeofMealLabel(time: MealTime) {
  switch (time) {
    case 'BREAKFAST':
      return 'Pagi';
    case 'LUNCH':
      return 'Siang';
    case 'SNACK':
      return 'Sore';
    default:
      return 'Malam';
  }
}

export default Nutrition;
