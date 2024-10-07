import { Button } from '@/components/ui/button'
import { BabyInformation, StuntingStatus } from '@/types'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

type PropTypes = {
  data: BabyInformation;
  result: string;
  status: StuntingStatus;
}

function ResultCheck({ data, result, status }: PropTypes) {
  let statusColor;

  switch (status) {
    case 'danger':
      statusColor = 'bg-red-500';
      break;
    case 'semi-danger':
      statusColor = 'bg-orange-400';
      break;
    default:
      statusColor = 'bg-green-500';
      break;
  }

  return (
    <div className="max-w-md rounded-lg mx-auto px-6 sm:px-10 py-8 bg-primary text-white">
      <h1 className="text-center uppercase text-xl sm:text-2xl font-bold">Hasil Pemeriksaan</h1>
      <ul className="mt-4 space-y-2">
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Nama</span>
          :
          <span>{data.fullname}</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Tanggal Lahir</span>
          :
          <span>{data.DOB}</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Kecamatan</span>
          :
          <span className="capitalize">{data.district}</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Jenis Kelamin</span>
          :
          <span>{data.gender}</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Berat Badan</span>
          :
          <span>{data.weight}kg</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Tinggi Badan</span>
          :
          <span>{data.height}cm</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Lingkar Kepala</span>
          :
          <span>{data.headCircumference}cm</span>
        </li>
        <li className="text-sm sm:text-base flex flex-col items-center gap-1 pt-2">
          <span className="font-bold">Status</span>
          <span className={cn("py-1 px-4 rounded-full text-sm", statusColor)}>
            {result}
          </span>
        </li>
      </ul>
      <div className="text-center mt-6">
        <Link href="/cek-stunting">
          <Button className="bg-white text-primary hover:bg-gray-100">
            Cek Ulang
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ResultCheck