import React from 'react'
import DataOrangtuaBalita from './_components/data-orangtua-balita'

// Menggunakan props 'searchParams' untuk meneruskan query pencarian
const OrangTuaPage = ({ searchParams }: { searchParams: { query: string } }) => {
  return (
    <div>
      <DataOrangtuaBalita searchParams={searchParams} />
    </div>
  )
}

export default OrangTuaPage
