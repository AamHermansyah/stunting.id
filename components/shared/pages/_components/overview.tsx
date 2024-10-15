import React from 'react'
import CardOverview from './card-overview'
import { TbManFilled } from 'react-icons/tb'
import { GiWeight } from 'react-icons/gi'
import { PiBabyFill } from 'react-icons/pi'
import { FaHandSparkles } from 'react-icons/fa6'

function Overview() {
  return (
    <div className="w-full grid grid-cols-2 xl:grid-cols-1 gap-4 col-span-12 lg:col-span-7 xl:col-span-3 order-2 xl:order-3">
      <CardOverview
        Icon={TbManFilled}
        label="Tinggi Badan"
        value="90 cm"
      />
      <CardOverview
        Icon={GiWeight}
        label="Berat Badan"
        value="6.5 kg"
      />
      <CardOverview
        Icon={PiBabyFill}
        label="Lingkar Kepala"
        value="41 cm"
      />
      <CardOverview
        Icon={FaHandSparkles}
        label="Lingkar Lengan"
        value="13 cm"
      />
    </div>
  )
}

export default Overview