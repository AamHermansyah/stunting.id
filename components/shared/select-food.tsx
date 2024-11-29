import { foodOptions, mealTimes, nutritionOptions } from '@/constants'
import { X } from 'lucide-react'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';

export type SelectFoodValues = {
  id: string;
  value: string;
  nutrition: string[];
}[]

interface IProps {
  meal: { label: string, time: string };
  values: SelectFoodValues;
  onChangeValues: (values: SelectFoodValues) => void;
}

function SelectFood({ meal, values, onChangeValues }: IProps) {
  const [defaultValue, setDefaultValue] = useState<string | undefined>(undefined);
  const [customInput, setCustomInput] = useState(false);
  const [customInputValue, setCustomInputValue] = useState('');
  const [customNutritionValues, setCustomNutritionValues] = useState<string[]>([]);

  const handleSave = () => {
    onChangeValues([...values, {
      id: crypto.randomUUID(),
      value: customInputValue,
      nutrition: customNutritionValues
    }])

    setDefaultValue('');
    setCustomInputValue('');
    setCustomNutritionValues([]);
    setCustomInput(false);
  }

  const handleCheckboxChange = (value: string) => {
    setCustomNutritionValues((prev) => {
      return prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value];
    });
  };

  const handleRemoveValue = (id: string) => {
    onChangeValues(values.filter((item) => item.id !== id));
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {meal.label} • {meal.time}
      </label>
      <Select
        value={defaultValue}
        onValueChange={(value) => {
          setDefaultValue(value);
          if (value === 'others') setCustomInput(true);
          else {
            const data = foodOptions.find((item) => item.id === value)!;
            onChangeValues([...values, {
              id: data.id,
              value: data.value,
              nutrition: data.nutrition
            }])
            setDefaultValue('');

            if (customInput) {
              setCustomInputValue('');
              setCustomNutritionValues([]);
              setCustomInput(false);
            }
          }
        }}
      >
        <SelectTrigger className="mt-1 w-full">
          <SelectValue placeholder="Pilih Menu Makanan" />
        </SelectTrigger>
        <SelectContent>
          {foodOptions.map((option) => (
            <SelectItem key={option.id} value={option.id} disabled={values.some((item) => item.id === option.id)}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {customInput && (
        <div className="pt-2">
          <div className="space-y-2">
            <Input
              value={customInputValue}
              onChange={(e) => setCustomInputValue(e.target.value)}
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
                    checked={customNutritionValues.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}
                    className="form-checkbox text-teal-600"
                  />
                  <span className="ml-2 text-sm">{option.label}</span>
                </label>
              ))}
              <Button
                onClick={() => handleSave()}
                className="mt-2"
                disabled={customInputValue.length < 3 || customNutritionValues.length === 0}
              >
                Tambah
              </Button>
            </div>
          </div>
        </div>
      )}
      {values.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {values.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-teal-100 text-teal-700 py-1 px-3 rounded-full"
            >
              <span className="text-xs">{item.value}</span>
              <button
                onClick={() => handleRemoveValue(item.id)}
                className="ml-2 text-teal-700 hover:text-teal-900 focus:outline-none"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectFood