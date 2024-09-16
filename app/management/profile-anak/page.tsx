import React from 'react'
import TabsNavigations from '../_components/tabs-navigation'
import Profile from './_components/profile'
import Overview from './_components/overview'
import Chart from './_components/chart'
import InterpretationResult from './_components/interpretation-result'

function ProfileAnakPage() {
  return (
    <>
      <TabsNavigations />
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

export default ProfileAnakPage