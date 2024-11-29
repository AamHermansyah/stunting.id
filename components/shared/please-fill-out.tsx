import Image from 'next/image'
import React from 'react'

interface IProps {
  image: string;
  label: string;
  des: string;
}

function PleaseFillOut({ image, label, des }: IProps) {
  return (
    <div className="flex text-center items-center rounded-lg justify-center flex-col w-full space-y-4 py-4 md:py-10 text-centers">
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

export default PleaseFillOut
