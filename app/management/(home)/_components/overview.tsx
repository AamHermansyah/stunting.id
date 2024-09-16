import React from 'react'
import CardOverview from './card-overview'
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

function Overview() {
  return (
    <div className='w-full grid grid-cols-2 xl:grid-cols-4 gap-4 col-span-12 '>
      <CardOverview label='Sehat' value='198' status='Naik 2.34%' Icon={BiTrendingUp} since='tahun kemarin'/>
      <CardOverview label='Stunting' value='84' status='Turun 2.34%' Icon={BiTrendingDown} since='tahun kemarin'/>
      <CardOverview label='Kurang Gizi' value='17' status='Turun 3.01%' Icon={BiTrendingUp} since='tahun kemarin'/>
      <CardOverview label='Obesitas' value='9' status='Turun 1.21%' Icon={BiTrendingUp} since='tahun kemarin'/>
    </div>
  )
}

export default Overview
