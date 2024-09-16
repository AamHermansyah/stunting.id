import Image from 'next/image'
import React from 'react'

interface IProps{
  image:string;
  label:string;
  des:string;
}

function NotFilled({image, label, des} : IProps) {
  return (
    <div className="flex items-center justify-center flex-col my-10 space-y-4">
    <div className="relative w-[125px] h-[125px]">
      <Image
        src={image}
        fill={true}
        alt="user-empty"
        className="w-full h-full object-cover"
      />
    </div>
    <h2 className="font-semibold text-lg text-center">{label}</h2>
    <p className="text-gray-400 text-sm text-center m-auto max-w-[400px]">
      {des}
    </p>
  </div>
  )
}

export default NotFilled
