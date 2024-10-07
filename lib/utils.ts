import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCreatedAt(created_at: string): string {
  const date = new Date(created_at);

  const daysOfWeek = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  let dayOfMonth: string = `${date.getDate()}`;
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let hours: string = `${date.getHours()}`;
  let minutes: string = `${date.getMinutes()}`;

  dayOfMonth = `${+dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth}`;
  hours = `${+hours < 10 ? `0${hours}` : hours}`;
  minutes = `${+minutes < 10 ? `0${minutes}` : minutes}`;

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year} ${hours}:${minutes}`;

  return formattedDate;
}

export function formatDateToYYYYMMDD(date: Date | undefined): string {
  if (!date) return '';

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function calculateMonthsDifference(targetDate: string): number {
  // Convert the target date to a Date object
  const target = new Date(targetDate);

  // Current date
  const currentDate = new Date();

  // Calculate the difference in months
  const diffInMonths = (currentDate.getFullYear() - target.getFullYear()) * 12 +
    (currentDate.getMonth() - target.getMonth());

  // Round down to the nearest integer
  const roundedMonths = Math.floor(diffInMonths);

  return roundedMonths;
}

