import React from 'react'
import { IconType } from 'react-icons/lib';

interface IProps{
  label:string;
  value:string;
  status:string;
  since:string;
  Icon: IconType;
}

function CardOverview ({label, value, status, since, Icon} : IProps) {
  return (
    <div className='p-4 border rounded-lg aspect-[16:9] bg-white shadow-sm'>
      <div className='space-y-3'>
        <h1 className='text-base sm:text-lg text-gray-400'>Total Balita {label}</h1>
        <span className='text-3xl sm:text-4xl'>{value}</span>
        <div className='flex flex-wrap'>
        <p className='text-xs sm:text-sm flex items-center'>
          {status} <Icon className='mx-1'/>
        </p>
        <p className='text-xs sm:text-sm flex items-center'>
        dari {since}
        </p>
        </div>
      </div>
    </div>
  )
}

export default CardOverview
