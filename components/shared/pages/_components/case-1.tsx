'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select';

const options = [
  { value: '1', label: '1x' },
  { value: '2', label: '2x' },
  { value: '3', label: '3x' },
  { value: '4', label: '4x' },
  { value: '8', label: '8x' }
];

interface IProps {
  batal: string;
}

function Case1({ batal }: IProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedingTimes, setFeedingTimes] = useState<{ key: string, value: string }[]>([]);

  useEffect(() => {
    if (selectedOption) {
      const times = calculateFeedingTimes(selectedOption);
      setFeedingTimes(times);
    }
  }, [selectedOption]);

  const onSubmit = () => {
    if (!selectedOption) return;

    console.log('ok');
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
              {options.map(option => (
                <SelectItem key={`asi-${option.value}`} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <h2 className="font-semibold text-lg">Waktu Pemberian</h2>
        {selectedOption && (
          <div className="grid grid-cols-2 gap-4">
            {feedingTimes.map((time, index) => (
              <div key={`t-${time.key}`}>
                <label className="block text-sm font-medium text-gray-700">
                  Waktu Pemberian ASI Ke-{index + 1}
                </label>
                <Input value={time.value} className="mt-1 w-full" readOnly />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex space-x-4 pt-6">
        <Link href={batal}>
          <Button variant="secondary">Kembali</Button>
        </Link>
        <Button disabled={!selectedOption}>Simpan</Button>
      </div>
    </form>
  )
}

export default Case1

const calculateFeedingTimes = (count: number) => {
  const startHour = 6;
  const endHour = 20;

  if (count === 1) {
    return [{ key: '1', value: `${startHour.toString().padStart(2, '0')}:00` }];
  }

  const interval = (endHour - startHour) / (count - 1);

  return Array.from({ length: count }, (_, index) => {
    const hour = startHour + index * interval;
    const minutes = Math.floor((hour % 1) * 60);
    const formattedTime = `${Math.floor(hour).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return { key: `${index + 1}`, value: formattedTime };
  });
};
