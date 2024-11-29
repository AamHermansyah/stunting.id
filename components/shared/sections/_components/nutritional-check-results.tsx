'use client'

import PleaseFillOut from "@/components/shared/please-fill-out";
import { cn, formatDateToYYYYMMDD, timeofMealLabel, translateNutritionType } from "@/lib/utils";
import { BreastfeedingTime, MealNutrition, MealTime, NutritionLog, NutritionType } from "@prisma/client";
import { Check, TriangleAlert } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { nutritionOptions } from "@/constants";
import { Separator } from "@/components/ui/separator";

interface IProps {
  todayData: (NutritionLog & {
    mealNutrition?: MealNutrition[];
    breastfeedingTimes?: BreastfeedingTime[];
  }) | null;
  data: (NutritionLog & {
    mealNutrition?: MealNutrition[];
    breastfeedingTimes?: BreastfeedingTime[];
  })[]
}

const nutritionTypes: NutritionType[] = [
  NutritionType.CARBOHYDRATE,
  NutritionType.ANIMAL_PROTEIN,
  NutritionType.PLANT_PROTEIN,
  NutritionType.GOOD_FATS,
  NutritionType.MINERAL,
  NutritionType.VITAMIN,
];

type GroupedMeals = {
  timeOfMeal: "BREAKFAST" | "LUNCH" | "SNACK" | "DINNER";
  menuOfMeal: string;
  nutritionType: ("CARBOHYDRATE" | "ANIMAL_PROTEIN" | "PLANT_PROTEIN" | "GOOD_FATS" | "VITAMIN" | "MINERAL")[];
};

function NutritionalCheckResult({ data, todayData }: IProps) {
  const [currentData, setCurrentData] = useState(todayData);
  const [groupedMeals, setGroupedMeals] = useState<GroupedMeals[] | null>(null);
  const [nutritions, setNutritions] = useState<NutritionType[]>([]);
  const searchParams = useSearchParams();
  const dateQuery: string | null = searchParams.get('date');
  const statusQuery: string | null = searchParams.get('status');

  const missingNutritionLabels = nutritionOptions
    .filter(option => !nutritions.includes(option.value))
    .map(option => option.label);

  useEffect(() => {
    if (statusQuery && dateQuery) {
      if (statusQuery === 'missed') {
        setCurrentData(null);
      } else if (statusQuery === 'completed') {
        const selectedDateQuery = formatDateToYYYYMMDD(new Date(dateQuery));

        const selectedDate = data.find((item) => {
          const currentData = formatDateToYYYYMMDD(new Date(item.createdAt));

          return selectedDateQuery === currentData;
        });

        if (selectedDate) setCurrentData(selectedDate);
      }
    }
  }, [dateQuery, statusQuery]);

  useEffect(() => {
    if (currentData && currentData.mealNutrition) {
      const result = currentData.mealNutrition.reduce((acc: GroupedMeals[], currentMeal) => {
        // Cek apakah waktu makan sudah ada di akumulator
        const existingMeal = acc.find(item => item.timeOfMeal === currentMeal.timeOfMeal);

        if (existingMeal) {
          // Jika ada, tambahkan menu makanan baru ke dalam menu yang sudah ada
          existingMeal.menuOfMeal += `, ${currentMeal.menuOfMeal}`;
          existingMeal.nutritionType = [
            ...Array.from(new Set([...existingMeal.nutritionType, ...currentMeal.nutritionType]))
          ];
        } else {
          // Jika belum ada, tambahkan objek baru ke dalam akumulator
          acc.push({
            timeOfMeal: currentMeal.timeOfMeal,
            menuOfMeal: currentMeal.menuOfMeal,
            nutritionType: currentMeal.nutritionType,
          });
        }
        return acc;
      }, []);

      const nutritionsData = Array.from(new Set(result.reduce((acc: NutritionType[], meal) => {
        acc.push(...meal.nutritionType);
        return acc;
      }, [])));

      setNutritions(nutritionsData);
      setGroupedMeals(result);
    }
  }, [currentData]);

  return (
    <div className="w-full col-span-12 xl:col-span-9 lg:col-span-8 order-3 xl:order-2 p-4 border rounded-lg space-y-2">
      <span className="flex sm:flex-row font-medium text-lg lg:text-xl gap-2 items-center">
        Hasil Pengecekan Nutrisi :
      </span>
      {currentData && (
        <>
          {(currentData.ageGroup === 'BABY' || currentData.ageGroup === 'INFANT') && (
            <div>
              <h2 className="text-lg font-semibold">Pemberian ASI</h2>
              <div className="w-full text-sm sm:text-base flex gap-2 sm:gap-4">
                {
                  (currentData.ageGroup === 'BABY' && (currentData.breastfeedingFreq || 0) < 8)
                    || (currentData.ageGroup === 'INFANT' && (currentData.breastfeedingFreq || 0) < 3)
                    ? <TriangleAlert className="w-7 h-7 text-destructive" />
                    : <Check className="w-7 h-7 text-emerald-500" />
                }
                {currentData.ageGroup === 'BABY' ? (
                  <ul className="w-full list-decimal list-outside pl-4 text-justify">
                    <li>
                      <b>Frekuensi pemberian ASI:</b> Bayi usia 0-6 bulan sebaiknya diberi ASI sekitar <b>8-12 kali sehari</b>.
                    </li>
                    <li>
                      <b>Penjelasan:</b> Bayi pada usia ini memiliki perut yang kecil dan membutuhkan ASI secara sering untuk memenuhi kebutuhan nutrisi dan hidrasi. ASI juga penting untuk meningkatkan daya tahan tubuh bayi dan mendukung pertumbuhannya.
                    </li>
                  </ul>
                ) : (
                  <ul className="w-full list-decimal list-outside pl-4 text-justify">
                    <li>
                      <b>Frekuensi pemberian ASI:</b> Pada usia 7-24 bulan, frekuensi pemberian ASI dapat berkurang menjadi sekitar <b>3-4 kali sehari</b>, tergantung pada kebutuhan bayi dan apakah mereka sudah mulai mengonsumsi makanan padat.
                    </li>
                    <li>
                      <b>Penjelasan:</b> Pada usia ini, bayi mulai diperkenalkan dengan makanan padat, tetapi ASI masih memainkan peran penting dalam pemenuhan kebutuhan nutrisi, terutama untuk memberikan protein, lemak sehat, dan antibodi. Meskipun demikian, jumlah ASI yang diberikan dapat berkurang karena bayi mulai makan makanan lain.
                    </li>
                  </ul>
                )}
              </div>
            </div>
          )}
          {(currentData.ageGroup === 'INFANT' || currentData.ageGroup === 'TODDLER') && currentData.mealNutrition && (
            <div className="space-y-4 pt-4">
              <Separator />
              <div>
                <h2 className="text-lg font-semibold">Status Nutrisi</h2>
                <div className="w-full flex gap-4">
                  <div className="w-full max-w-[200px] space-y-1.5 text-sm">
                    {nutritionOptions.map((item) => (
                      <span
                        key={`n-${crypto.randomUUID()}`}
                        className={cn(
                          'block py-1.5 px-3 rounded-full text-white whitespace-nowrap',
                          nutritions.some((nutrition) => nutrition === item.value) ? 'bg-emerald-500' : 'bg-red-500'
                        )}
                      >
                        {translateNutritionType(item.value)}
                      </span>
                    ))}
                  </div>
                  <div className="w-full p-4 bg-yellow-100 rounded-md border border-yellow-300 text-yellow-700">
                    <h3 className="font-semibold mb-2">Peringatan Kekurangan Nutrisi</h3>
                    {missingNutritionLabels.length > 0 ? (
                      <div className="w-full text-sm sm:text-base flex gap-2">
                        <div className="pt-1">
                          <TriangleAlert className="w-5 h-5 text-destructive" />
                        </div>
                        <p className="w-full">
                          Nutrisi berikut belum terpenuhi hari ini:{" "}
                          <span className="font-medium">
                            {missingNutritionLabels.join(", ")}.
                          </span>{" "}
                          Pastikan untuk menyertakan makanan yang kaya akan nutrisi ini dalam jadwal makan Anda untuk mencukupi kebutuhan gizi harian.
                        </p>
                      </div>
                    ) : (
                      <div className="w-full text-sm sm:text-base flex gap-2">
                        <div className="pt-1">
                          <Check className="w-5 h-5 text-emerald-700" />
                        </div>
                        <p className="w-full font-medium text-green-700">
                          Selamat! Semua kebutuhan nutrisi telah terpenuhi hari ini.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {groupedMeals && (
                <div>
                  <h3 className="font-semibold">Tabel Nutrisi Berdasarkan Waktu Makan</h3>
                  <div className="w-full text-sm sm:text-base mt-2 overflow-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Jenis Makan</TableHead>
                          <TableHead>Makanan</TableHead>
                          <TableHead>Status Nutrisi</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {groupedMeals.map((item) => (
                          <TableRow key={`meal-${item.timeOfMeal}`}>
                            <TableCell className="font-medium">{timeofMealLabel(item.timeOfMeal)}</TableCell>
                            <TableCell>{item.menuOfMeal}</TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-2 text-xs min-w-[210px]">
                                {nutritionTypes.map((nutritionType, index) => (
                                  <span
                                    key={index}
                                    className={cn(
                                      'block py-1 px-2 rounded-full text-white whitespace-nowrap',
                                      item.nutritionType.includes(nutritionType) ? 'bg-emerald-500' : 'bg-red-500'
                                    )}
                                  >
                                    {translateNutritionType(nutritionType)}
                                  </span>
                                ))}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-semibold">Tabel Nutrisi Berdasarkan Makanan</h3>
                <div className="w-full text-sm sm:text-base mt-2 overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Jenis Makan</TableHead>
                        <TableHead>Makanan</TableHead>
                        <TableHead>Status Nutrisi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentData.mealNutrition.map((item) => (
                        <TableRow key={`meal-${item.id}`}>
                          <TableCell className="font-medium">{timeofMealLabel(item.timeOfMeal)}</TableCell>
                          <TableCell>{item.menuOfMeal}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-2 text-xs min-w-[210px]">
                              {nutritionTypes.map((nutritionType, index) => (
                                <span
                                  key={index}
                                  className={cn(
                                    'block py-1 px-2 rounded-full text-white whitespace-nowrap',
                                    item.nutritionType.includes(nutritionType) ? 'bg-emerald-500' : 'bg-red-500'
                                  )}
                                >
                                  {translateNutritionType(nutritionType)}
                                </span>
                              ))}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {!currentData && (
        <PleaseFillOut
          image="/images/Document_empty.svg"
          label="Formulir Nutrisi Anak Belum Terisi"
          des="Silahkan isi terlebih dahulu formulir nutrisi anak anda untuk mendapatkan rekomendasi dari kami"
        />
      )}
    </div>
  );
};

export default NutritionalCheckResult;
