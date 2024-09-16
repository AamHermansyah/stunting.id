import React from 'react'
import Image from 'next/image'

const TextGreeting = () => {
  return (
    <div className="grid grid-cols-6 rounded-lg overflow-hidden bg-white shadow-sm border">
    <div className="sm:col-span-4 lg:col-span-4  col-span-6 sm:my-6 my-2 px-4 space-y-2 ">
      <h2 className="font-semibold text-base sm:text-xl">
        Halo Jagoan Balita Indonesia! Selamat datang di sistem
        stunting.id👋
      </h2>
      <p className="text-gray-400 text-xs sm:text-base">
        Sebagai kader posyandu, Anda adalah ujung tombak dalam upaya
        pencegahan stunting di wilayah Anda. Anda memiliki peran yang sangat
        penting dalam membantu keluarga, terutama mereka yang tidak memiliki
        akses terhadap teknologi, untuk melakukan pendataan kesehatan bayi.
      </p>
    </div>
    <div className="relative aspect-[16/9] lg:aspect-[16/9] sm:aspect-[4/3] lg:h-[205px] xl:h-[150px] sm:h-[255px] h-[150px] col-span-2">
      <Image
        src="/images/cuate.svg"
        alt="three-color"
        layout="fill"
        className="object-cover"
      />
    </div>
  </div>
  )
}

export default TextGreeting
