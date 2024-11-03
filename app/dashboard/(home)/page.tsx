import React from 'react'
import ChildrenProfile from './_components/children-profile'
import LatesArticles from './_components/latest-articles'
import Image from 'next/image'
import { cookies } from 'next/headers'
import { AuthCookie } from '@/types'

const DashboardHomePage = () => {
  const authCookie = cookies().get('auth')
  const user = JSON.parse(authCookie!.value) as AuthCookie
  return (
    <>
      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute top-0 right-0 h-full aspect-[3/2]">
          <Image
            src="/images/three_color.svg"
            alt="three-color"
            layout="fill"
            className="object-cover opacity-50 sm:opacity-100"
          />
        </div>
        <div className="relative space-y-2 py-6 sm:py-10">
          <h2 className="font-semibold text-2xl">
            Selamat datang di <span className="text-[#119494]">Stunting.id</span>
          </h2>
          <p className="text-gray-500">
            Ayo pantau perkembangan buah hati anda agar tetap sehat dan ceria
          </p>
        </div>
      </div>
      <ChildrenProfile
        id={user.id}
        detail={`/dashboard/profile-anak`}
        add={`/dashboard/tambah-anak`}
        edit={`/dashboard/profile-anak/${user.id}/edit-anak`}
      />
      <LatesArticles />
    </>
  )
}

export default DashboardHomePage