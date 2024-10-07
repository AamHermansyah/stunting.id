'use client'

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const options = [
  { value: '1x', label: '1x' },
  { value: '2x', label: '2x' },
  { value: '3x', label: '3x' },
  { value: '4x', label: '4x' },
  { value: '8x', label: '8x' }
];

const calculateFeedingTimes = (count: number) => {
  const startHour = 6; 
  const endHour = 20; 
  
  if (count === 1) {
    return [`${startHour.toString().padStart(2, '0')}:00`];
  }

  const interval = (endHour - startHour) / (count - 1);

  return Array.from({ length: count }, (_, index) => {
    const hour = startHour + index * interval;
    const minutes = Math.floor((hour % 1) * 60);
    const formattedTime = `${Math.floor(hour).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return formattedTime;
  });
};

const InputAsi = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedingTimes, setFeedingTimes] = useState<string[]>([]);

  useEffect(() => {
    if (selectedOption) {
      const times = calculateFeedingTimes(parseInt(selectedOption));
      setFeedingTimes(times);
    }
  }, [selectedOption]);

  const handleChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="px-4">
      <h1 className="text-xl font-semibold mb-4">Nutrisi Pribadi</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Frekuensi Pemberian ASI</label>
          <Select onValueChange={handleChange}>
            <SelectTrigger className="mt-1 w-full">
              <SelectValue placeholder="Pilih Frekuensi" />
            </SelectTrigger>
            <SelectContent>
              {options.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {selectedOption && (
          <div className="grid grid-cols-2 gap-4">
            {feedingTimes.map((time, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700">
                  Waktu Pemberian ASI Ke-{index + 1}
                </label>
                <Input value={time} className="mt-1 w-full" readOnly />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputAsi;
