import React from 'react'
import { IconType } from 'react-icons/lib';

interface IProps {
  label: string;
  value: string;
  Icon: IconType;
}

function CardOverview({ Icon, label, value }: IProps) {
  return (
    <div className="p-4 border rounded-lg">
      <div className="w-9 sm:w-10 aspect-square rounded-full shadow-sm bg-primary flex justify-center items-center border">
        <Icon className="text-primary-foreground sm:text-xl lg:text-2xl" />
      </div>
      <div className="mt-2 leading-5">
        <h3 className="text-sm sm:text-base">{label}</h3>
        <span className="text-xs sm:text-sm text-gray-500">{value}</span>
      </div>
    </div>
  )
}

export default CardOverview