import React from 'react'
import Case2 from './_components/case-2'
import TabsButton from '../tabs-button'

interface IProps{
  profile:string
  diary:string
  history:string
  cancel:string
}

function LogNutritionSection({profile, diary, history, cancel}:IProps) {
  return (
    <>
        <TabsButton buku={profile} diary={diary} riwayat={history} />
        <Case2 batal={cancel}/>
    </>
  )
}

export default LogNutritionSection
