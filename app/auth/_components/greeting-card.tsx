import Image from 'next/image'
import React from 'react'

const GreetingCard = () => {
  return (
    <div className='relative bg-[#82cacd] rounded-2xl w-full h-full lg:p-10 xl:p-12 text-white xl:space-y-8 lg:space-y-4 overflow-hidden'>
      <h1 className='xl:text-4xl lg:text-2xl font-semibold'>
        Halo! Selamat datang di <br/> Aplikasi Stunting.id
      </h1>
      <p className='xl:text-2xl lg:text-xl'> 
        Yuk, bersama-sama kita jaga kesehatan si kecil untuk masa depan yang lebih cerah. Masuk untuk mulai pemeriksaan, ya!
      </p>
      <div className='absolute bottom-0 right-0 lg:w-[400px] lg:h-[500px] xl:w-[550px] xl:h-[700px]'>
        <Image
        src="/images/Character.svg"
        fill={true}
        alt='character'
        className='object-cover'
        />
      </div>
    </div>
  )
}

export default GreetingCard
