import React from 'react'
import Image from 'next/image'

const TextGreeting = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-end rounded-lg overflow-hidden bg-white shadow-sm border">
      <div className="sm:my-6 my-2 px-4 space-y-2 ">
        <h2 className="font-semibold text-lg sm:text-xl">
          Halo Jagoan Balita Indonesia! Selamat datang di sistem
          stunting.id👋
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Sebagai kader posyandu, Anda adalah ujung tombak dalam upaya
          pencegahan stunting di wilayah Anda. Anda memiliki peran yang sangat
          penting dalam membantu keluarga, terutama mereka yang tidak memiliki
          akses terhadap teknologi, untuk melakukan pendataan kesehatan bayi.
        </p>
      </div>
      <div className="relative h-[100px] sm:h-[150px] aspect-[16/7]">
        <Image
          src="/images/cuate.svg"
          alt="three-color"
          layout="fill"
          className="object-contain object-bottom"
        />
      </div>
    </div>
  )
}

export default TextGreeting
