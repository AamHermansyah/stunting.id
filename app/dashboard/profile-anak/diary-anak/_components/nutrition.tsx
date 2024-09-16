import React from "react";
import CardNutritionDetail from "./card-nutrition-detail";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Nutrition = () => {
  return (
    <div className="p-4 w-full col-span-12 lg:col-span-4 xl:col-span-3 order-1 border rounded-lg min-h-[300px] lg:min-h-[500px] flex flex-col justify-between">
  <div className="space-y-4">
    <div className="flex flex-col font-medium text-sm gap-2">
      <h1 className="lg:text-xl">Senin</h1>
      <span className="text-muted-foreground/70">22 - 07 - 2024</span>
    </div>
    <div>
      <h2 className="font-medium lg:text-base text-sm">Nutrisi Pribadi</h2>
      <CardNutritionDetail label="Asupan Asi" value="-" />
      <div className="w-full grid grid-cols-2 gap-x-2 gap-y-4 py-2 lg:text-base text-sm">
        <CardNutritionDetail label="Makan Pagi" value="-" />
        <CardNutritionDetail label="Makan Siang" value="-" />
        <CardNutritionDetail label="Snack Siang" value="-" />
        <CardNutritionDetail label="Snack Sore" value="-" />
        <CardNutritionDetail label="Makan Malam" value="-" />
      </div>
    </div>
  </div>
  <Link href="/dashboard/profile-anak/diary-anak/log-nutrisi">
    <Button className="mt-4 w-full">
      Edit Data Nutrisi
    </Button>
  </Link>
</div>

  );
};

export default Nutrition;
