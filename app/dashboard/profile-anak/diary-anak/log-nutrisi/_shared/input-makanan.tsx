'use client'

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';

const foodOptions = [
  { value: 'Ayam Goreng', label: 'Ayam Goreng' },
  { value: 'Ayam Krispi', label: 'Ayam Krispi' },
  { value: 'Ayam Kalasan', label: 'Ayam Kalasan' },
  { value: 'Ayam Bumbu Kuning', label: 'Ayam Bumbu Kuning' },
  { value: 'Yogurt', label: 'Yogurt' },
  { value: 'Telur Rebus', label: 'Telur Rebus' },
  { value: 'Ubi Kukus', label: 'Ubi Kukus' }
];

const mealTimes = [
  { label: "Makan Pagi", time: "08:00" },
  { label: "Makan Siang", time: "12:00" },
  { label: "Snack Sore", time: "16:00" },
  { label: "Makan Malam", time: "18:00" }
];

const InputMakanan = () => {

  const [selectedFoods, setSelectedFoods] = useState<string[][]>(
    new Array(mealTimes.length).fill([]).map(() => [])
  );

  const handleFoodSelect = (mealIndex: number, food: string) => {
    const newSelectedFoods = [...selectedFoods];
    if (!newSelectedFoods[mealIndex].includes(food)) {
      newSelectedFoods[mealIndex] = [...newSelectedFoods[mealIndex], food];
      setSelectedFoods(newSelectedFoods);
    }
  };

  const handleRemoveFood = (mealIndex: number, food: string) => {
    const newSelectedFoods = [...selectedFoods];
    newSelectedFoods[mealIndex] = newSelectedFoods[mealIndex].filter(item => item !== food);
    setSelectedFoods(newSelectedFoods);
  };

  return (
    <div className="px-4">
      <div className="space-y-4">
        {mealTimes.map((meal, mealIndex) => (
          <div key={mealIndex} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {meal.label} • {meal.time}
            </label>
            <Select onValueChange={(food) => handleFoodSelect(mealIndex, food)}>
              <SelectTrigger className="mt-1 w-full">
                <SelectValue placeholder="Pilih Menu Makanan" />
              </SelectTrigger>
              <SelectContent>
                {foodOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
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
    </div>
  );
};

export default InputMakanan;