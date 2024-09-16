import React from 'react'
import Image from 'next/image'

const TextHelp = () => {
  return (
    <div className="grid grid-cols-6 rounded-lg overflow-hidden bg-white shadow-sm border items-center">
      <div className="sm:col-span-4 lg:col-span-4 col-span-6 sm:my-6 my-2 px-4 space-y-2 ">
        <h2 className="font-semibold text-lg sm:text-xl">
          You reach the end of page. Apakah kamu merasa kebingungan ?
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Jika Anda mengalami kendala dalam menggunakan sistem stunting.id, kami siap membantu. Silakan klik di sini untuk
          memberikan laporan terkait masalah yang Anda hadapi 😉
        </p>
      </div>
      <div className="relative min-h-[100px] min-w-[120px] mx-auto sm:col-span-2 col-span-6 mb-4 sm:mb-0">
        <Image
          src="/images/question.svg"
          alt="three-color"
          layout="fill"
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default TextHelp
