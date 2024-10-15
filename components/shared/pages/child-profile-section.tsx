
import React from 'react'
import TabsButton from '../tabs-button'
import Profile from './_components/profile'
import Chart from './_components/chart'
import Overview from './_components/overview'
import InterpretationResult from './_components/interpretation-result'

interface IProps{
  profile:string
  diary:string
  history:string
}

export function ChildProfielSection ({profile, diary, history}:IProps) {
  return (
    <>
    <TabsButton buku={profile} diary={diary} riwayat={history} />
      <div className="space-y-4">
        <div className="w-full grid grid-cols-12 items-start gap-4">
          <Profile />
          <Chart />
          <Overview />
        </div>
        <InterpretationResult />
      </div>
    </>
  )
}
