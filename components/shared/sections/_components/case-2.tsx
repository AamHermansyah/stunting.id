'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect, useTransition, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';
import { createInfantBabyNutrition } from '@/actions/nutrition';
import { toast } from 'sonner';
import { VscLoading } from 'react-icons/vsc';
import { calculateFeedingTimes } from '@/lib/utils';
import { breastfeedingTimes, mealTimes } from "@/constants";
import SelectFood, { SelectFoodValues } from '../../select-food';

interface IProps {
  batal: string;
  childId: number;
}

function Case2({ batal, childId }: IProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedingTimes, setFeedingTimes] = useState<{ key: string, value: string }[]>([]);
  const [breakfastInputValues, setBreakfastInputValues] = useState<SelectFoodValues>([]);
  const [lunchInputValues, setLunchInputValues] = useState<SelectFoodValues>([]);
  const [snackInputValues, setSnackInputValues] = useState<SelectFoodValues>([]);
  const [dinnerInputValues, setDinnerInputValues] = useState<SelectFoodValues>([]);
  const [loading, startCreate] = useTransition();
  const searchParams = useSearchParams();
  const missedDateQuery: string | null = searchParams.get('missedDate');
  const navigate = useRouter();

  const isDisabled = useCallback(() => {
    const foodInputsCondition = breakfastInputValues.length === 0
      || lunchInputValues.length === 0
      || snackInputValues.length === 0
      || dinnerInputValues.length === 0;

    return loading || foodInputsCondition || !selectedOption;
  }, [
    lunchInputValues,
    lunchInputValues,
    snackInputValues,
    dinnerInputValues,
    selectedOption,
    loading
  ]);

  useEffect(() => {
    if (selectedOption) {
      const times = calculateFeedingTimes(selectedOption);
      setFeedingTimes(times);
    }
  }, [selectedOption]);

  const onSubmit = () => {
    if (isDisabled()) return;

    const payload = {
      breastfeedingTimes: feedingTimes,
      breastfeedingFreq: selectedOption!,
      breakfast: breakfastInputValues,
      lunch: lunchInputValues,
      snack: snackInputValues,
      dinner: dinnerInputValues,
    }

    startCreate(() => {
      createInfantBabyNutrition(payload, childId, missedDateQuery ? new Date(missedDateQuery) : undefined)
        .then((res) => {
          if (res.success) {
            navigate.push(`/dashboard/profile-anak/${childId}/diary-anak?date=${missedDateQuery}&status=completed`);
            toast.success('Data nutrisi harian telah dibuat!');
          } else {
            toast.warning('Terjadi kesalahan. Coba lagi!');
          }
        })
    })
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h1 className="text-xl font-semibold mb-4">Nutrisi Pribadi</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Frekuensi Pemberian ASI</label>
          <Select onValueChange={(value) => setSelectedOption(+value)}>
            <SelectTrigger className="mt-1 w-full">
              <SelectValue placeholder="Pilih Frekuensi" />
            </SelectTrigger>
            <SelectContent>
              {breastfeedingTimes.map(option => (
                <SelectItem key={`asi-${option.value}`} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {selectedOption && (
          <div className="grid grid-cols-2 gap-4">
            {feedingTimes.map((time, index) => (
              <div key={`t-${time.key}`}>
                <label className="block text-sm font-medium text-gray-700">
                  Waktu Pemberian ASI Ke-{index + 1}
                </label>
                <Input
                  value={time.value}
                  className="mt-1 w-full"
                  onChange={(e) => setFeedingTimes((values) => {
                    const newData = [...values];
                    newData[index] = { key: `${index + 1}`, value: e.target.value };

                    return newData;
                  })}
                  pattern="^([01]\d|2[0-3]):([0-5]\d)$"
                  title="Masukkan waktu dalam format HH:MM (contoh: 12:40)"
                />
              </div>
            ))}
          </div>
        )}

        <SelectFood
          meal={mealTimes[0]}
          values={breakfastInputValues}
          onChangeValues={setBreakfastInputValues}
        />
        <SelectFood
          meal={mealTimes[1]}
          values={lunchInputValues}
          onChangeValues={setLunchInputValues}
        />
        <SelectFood
          meal={mealTimes[2]}
          values={snackInputValues}
          onChangeValues={setSnackInputValues}
        />
        <SelectFood
          meal={mealTimes[3]}
          values={dinnerInputValues}
          onChangeValues={setDinnerInputValues}
        />
      </div>
      <div className="flex space-x-4 pt-6">
        <Link
          href={batal}
          onClick={(e) => {
            if (loading) e.preventDefault();
          }}
        >
          <Button variant="secondary" disabled={loading}>Kembali</Button>
        </Link>
        <Button className="gap-2" disabled={isDisabled()}>
          {loading && <VscLoading className="w-4 h-4 animate-spin" />}
          Simpan
        </Button>
      </div>
    </form>
  )
}

export default Case2