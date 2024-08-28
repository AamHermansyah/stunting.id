"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const foodOptions = [
  { value: "Ayam Goreng", label: "Ayam Goreng" },
  { value: "Ayam Krispi", label: "Ayam Krispi" },
  { value: "Ayam Kalasan", label: "Ayam Kalasan" },
  { value: "Ayam Bumbu Kuning", label: "Ayam Bumbu Kuning" },
  { value: "Yogurt", label: "Yogurt" },
  { value: "Telur Rebus", label: "Telur Rebus" },
  { value: "Ubi Kukus", label: "Ubi Kukus" },
  { value: "menu-lainnya", label: "Menu Lainnya" }, // Option for custom input
];

const mealTimes = [
  { label: "Makan Pagi", time: "08:00" },
  { label: "Makan Siang", time: "12:00" },
  { label: "Snack Sore", time: "16:00" },
  { label: "Makan Malam", time: "18:00" },
];

const nutritionOptions = [
  { value: "Protein", label: "Protein" },
  { value: "Lemak", label: "Lemak" },
  { value: "Karbohidrat", label: "Karbohidrat" },
  { value: "Serat", label: "Serat" },
  { value: "Air", label: "Air" },
  { value: "Mineral", label: "Mineral" },
  { value: "Vitamin", label: "Vitamin" },
];

const InputMakanan = () => {
  const [selectedFoods, setSelectedFoods] = useState<string[][]>(
    new Array(mealTimes.length).fill([]).map(() => [])
  );
  const [customInput, setCustomInput] = useState<string>("");
  const [selectedNutrition, setSelectedNutrition] = useState<string[]>([]);
  const [showCustomInput, setShowCustomInput] = useState<boolean[]>(
    new Array(mealTimes.length).fill(false)
  );

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
    </div>
  );
};

export default InputMakanan;
