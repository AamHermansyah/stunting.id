import React from 'react'
import ChildrenProfile from './_components/children-profile'
import LatesArticles from './_components/lates-articles'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex flex-col bg-[#fbfeff] space-y-4'>
      <div className='grid grid-cols-6 rounded-lg overflow-hidden bg-white'>
        <div className='col-span-4 ml-4 my-6 space-y-2'>
          <h2 className='font-semibold text-2xl'>
          Selamat datang di <span className='text-[#119494]'>Stunting.id</span>  
          </h2>
          <p className='text-gray-400'>
            Ayo pantau perkembangan buah hati anda agar tetap sehat dan ceria
          </p>
        </div>
        <div className='relative col-span-2'>
          <Image
            src="/images/three_color.svg"
            alt='three-color'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <ChildrenProfile/>
      <LatesArticles/>
    </div>
  )
}

export default page
