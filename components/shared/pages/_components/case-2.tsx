'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect, useTransition } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';
import { createBabyNutrition } from '@/actions/nutrition';
import { toast } from 'sonner';
import { VscLoading } from 'react-icons/vsc';
import { calculateFeedingTimes } from '@/lib/utils';
import { breastfeedingTimes, foodOptions, mealTimes, nutritionOptions } from "@/constants";
import { X } from 'lucide-react';

interface IProps {
  batal: string;
  childId: number;
}

function Case2({ batal, childId }: IProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedingTimes, setFeedingTimes] = useState<{ key: string, value: string }[]>([]);
  const [selectedFoods, setSelectedFoods] = useState<string[][]>(
    new Array(mealTimes.length).fill([]).map(() => [])
  );
  const [customInput, setCustomInput] = useState<string>("");
  const [selectedNutrition, setSelectedNutrition] = useState<string[]>([]);
  const [showCustomInput, setShowCustomInput] = useState<boolean[]>(
    new Array(mealTimes.length).fill(false)
  );
  const [loading, startCreate] = useTransition();
  const searchParams = useSearchParams();
  const missedDateQuery: string | null = searchParams.get('missedDate');
  const navigate = useRouter();

  useEffect(() => {
    if (selectedOption) {
      const times = calculateFeedingTimes(selectedOption);
      setFeedingTimes(times);
    }
  }, [selectedOption]);

  const onSubmit = () => {
    console.log({ feedingTimes, selectedFoods, selectedNutrition });
  }

  const handleFoodSelect = (mealIndex: number, food: string) => {
    const newSelectedFoods = [...selectedFoods];
    const newShowCustomInput = [...showCustomInput];

    if (food === "menu-lainnya") {
      newShowCustomInput[mealIndex] = true;
      setShowCustomInput(newShowCustomInput);
    } else {
      newShowCustomInput[mealIndex] = false;
      setShowCustomInput(newShowCustomInput);
      if (!newSelectedFoods[mealIndex].includes(food)) {
        newSelectedFoods[mealIndex] = [...newSelectedFoods[mealIndex], food];
        setSelectedFoods(newSelectedFoods);
      }
    }
  };

  const handleRemoveFood = (mealIndex: number, food: string) => {
    const newSelectedFoods = [...selectedFoods];
    newSelectedFoods[mealIndex] = newSelectedFoods[mealIndex].filter(
      (item) => item !== food
    );
    setSelectedFoods(newSelectedFoods);
  };

  const handleCustomInputSave = (mealIndex: number) => {
    if (customInput) {
      const newSelectedFoods = [...selectedFoods];
      newSelectedFoods[mealIndex] = [
        ...newSelectedFoods[mealIndex],
        customInput,
      ];
      setSelectedFoods(newSelectedFoods);
      setCustomInput("");
      setSelectedNutrition([]);
    }
  };

  const handleNutritionSelect = (value: string) => {
    setSelectedNutrition((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

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

        {mealTimes.map((meal, mealIndex) => (
          <div key={mealIndex} className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {meal.label} • {meal.time}
            </label>
            <Select onValueChange={(food) => handleFoodSelect(mealIndex, food)}>
              <SelectTrigger className="mt-1 w-full">
                <SelectValue placeholder="Pilih Menu Makanan" />
              </SelectTrigger>
              <SelectContent>
                {foodOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {showCustomInput[mealIndex] && (
              <div className="space-y-2 mt-2">
                <Input
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Masukkan menu lainnya"
                  className="w-full"
                />
                <div className="flex flex-wrap  justify-between items-center gap-2">
                  {nutritionOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center"
                    >
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={selectedNutrition.includes(option.value)}
                        onChange={() => handleNutritionSelect(option.value)}
                        className="form-checkbox text-teal-600"
                      />
                      <span className="ml-2 text-sm">{option.label}</span>
                    </label>

                  ))}
                  <Button
                    onClick={() => handleCustomInputSave(mealIndex)}
                  >
                    Simpan
                  </Button>
                </div>
              </div>
            )}

            {selectedFoods[mealIndex].length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedFoods[mealIndex].map((food, foodIndex) => (
                  <div
                    key={foodIndex}
                    className="flex items-center bg-teal-100 text-teal-700 py-1 px-3 rounded-full"
                  >
                    <span>{food}</span>
                    <button
                      onClick={() => handleRemoveFood(mealIndex, food)}
                      className="ml-2 text-teal-700 hover:text-teal-900 focus:outline-none"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
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
        <Button className="gap-2" disabled={!selectedOption || loading}>
          {loading && <VscLoading className="w-4 h-4 animate-spin" />}
          Simpan
        </Button>
      </div>
    </form>
  )
}

export default Case2