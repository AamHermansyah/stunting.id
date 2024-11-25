import React from "react";
import CardNutritionDetail from "./card-nutrition-detail";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BreastfeedingTime, MealNutrition, MealTime, NutritionLog } from "@prisma/client";
import { formatCreatedAt, getDayName } from "@/lib/utils";

interface IProps {
  edit: string;
  todayData: (NutritionLog & {
    mealNutrition?: MealNutrition[];
    breastfeedingTimes?: BreastfeedingTime[];
  }) | null;
}
function Nutrition({ edit, todayData }: IProps) {
  return (
    <div className="p-4 w-full col-span-12 lg:col-span-4 xl:col-span-3 order-1 border rounded-lg flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex flex-col font-medium text-sm gap-2">
          <h1 className="lg:text-xl">{getDayName(new Date())}</h1>
          <span className="text-muted-foreground/70">{formatCreatedAt(new Date(), true)}</span>
        </div>
        <div>
          <h2 className="font-medium lg:text-base text-sm">Nutrisi Pribadi</h2>
          <div className="w-full grid grid-cols-2 gap-x-2 gap-y-4 py-2 lg:text-base text-sm">
            <CardNutritionDetail label="Asupan Asi" value={`${todayData?.breastfeedingFreq || '-'}`} />
            {todayData && todayData.breastfeedingTimes && todayData.breastfeedingTimes.map((item, index) => (
              <CardNutritionDetail
                key={`asi-${index}`}
                label={`ASI ke-${index + 1}`}
                value={`${item.time} WIB`}
              />
            ))}
            {todayData && todayData.mealNutrition && todayData.mealNutrition.map((item, index) => (
              <CardNutritionDetail
                label={`Makan ${timeofMealLabel(item.timeOfMeal)}`}
                key={`menu-${index + 1}`}
                value={item.menuOfMeal}
              />
            ))}
          </div>
        </div>
      </div>
      <Link href={`${edit}${todayData ? `?dataId=${todayData.id}` : ''}`}>
        <Button className="mt-4 w-full">
          {todayData ? 'Edit' : 'Tambah'} Data Nutrisi
        </Button>
      </Link>
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
