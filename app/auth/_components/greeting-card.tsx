import Image from 'next/image'
import React from 'react'

const GreetingCard = () => {
  return (
    <div className="relative bg-primary rounded-2xl w-full h-full p-10 text-white xl:space-y-8 lg:space-y-4 overflow-hidden">
      <div className="absolute w-[60%] aspect-[4/5] bottom-0 right-0">
        <Image
          src="/images/Character.svg"
          fill={true}
          alt="character"
          className="object-cover"
        />
      </div>
      <div className="relative space-y-4">
        <h1 className="text-3xl xl:text-4xl font-semibold">
          Halo! Selamat datang di <br /> Aplikasi Stunting.id
        </h1>
        <p className="text-xl xl:text-2xl">
          Yuk, bersama-sama kita jaga kesehatan si kecil untuk masa depan yang lebih cerah. Masuk untuk mulai pemeriksaan, ya!
        </p>
      </div>
    </div>
  )
}

export default GreetingCard
