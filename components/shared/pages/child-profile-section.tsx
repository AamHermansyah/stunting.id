import React from 'react'
import TabsButton from '../tabs-button'
import Profile from './_components/profile'
import Chart from './_components/chart'
import Overview from './_components/overview'
import InterpretationResult from './_components/interpretation-result'
import { AuthCookie } from '@/types';
import { cookies } from 'next/headers';

interface IProps{
  profile:string
  diary:string
  history:string
}


export function ChildProfielSection ({profile, diary, history}:IProps) {
  const authCookie = cookies().get('auth')
  const user = JSON.parse(authCookie!.value) as AuthCookie
  
  return (
    <>
    <TabsButton buku={profile} diary={diary} riwayat={history} />
      <div className="space-y-4">
        <div className="w-full grid grid-cols-12 items-start gap-4">
          <Profile userId={user.id} />
          <Chart />
          <Overview userId={user.id} />
        </div>
        <InterpretationResult />
      </div>
    </>
  )
}
