'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useTransition, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createToddlerBabyNutrition } from '@/actions/nutrition';
import { toast } from 'sonner';
import { VscLoading } from 'react-icons/vsc';
import { mealTimes } from "@/constants";
import SelectFood, { SelectFoodValues } from '../../select-food';

interface IProps {
  batal: string;
  childId: number;
}

function Case3({ batal, childId }: IProps) {
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

    return loading || foodInputsCondition;
  }, [
    lunchInputValues,
    lunchInputValues,
    snackInputValues,
    dinnerInputValues,
    loading
  ]);

  const onSubmit = () => {
    if (isDisabled()) return;

    const payload = {
      breakfast: breakfastInputValues,
      lunch: lunchInputValues,
      snack: snackInputValues,
      dinner: dinnerInputValues,
    }

    startCreate(() => {
      createToddlerBabyNutrition(payload, childId, missedDateQuery ? new Date(missedDateQuery) : undefined)
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

export default Case3