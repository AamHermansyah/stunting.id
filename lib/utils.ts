import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDayName(date: Date): string {
  const daysOfWeek: string[] = [
    "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"
  ];
  return daysOfWeek[date.getDay()];
}

export function formatCreatedAt(created_at: string | Date, onlyDate?: boolean): string {
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

  const formattedDate = `${!onlyDate ? `${dayOfWeek}, ` : ''}${dayOfMonth} ${month} ${year}${!onlyDate ? ` ${hours}:${minutes}` : ''}`;

  return formattedDate;
}

export function formatDateToYYYYMMDD(date: Date | undefined): string {
  if (!date) return '';

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function calculateMonthsDifference(targetDate: string | Date): number {
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

export const calculateMonthDifferenceText = (startDate: Date, endDate: Date) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return 'Invalid Date';
  }

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years} Tahun ${months} Bulan`;
};

export function totalMonthUntilNow(startDate: string | Date): number {
  const createdDate = new Date(startDate);
  const now = new Date();

  const yearDifference = now.getFullYear() - createdDate.getFullYear();
  const monthDifference = now.getMonth() - createdDate.getMonth();

  const totalMonths = yearDifference * 12 + monthDifference;

  return totalMonths >= 0 ? totalMonths : 0;
}