import React from 'react'
import DataIdentitasAnak from './_components/data-identitas-anak'

const IdentitasBalitaPage = ({ searchParams }: { searchParams: { query: string } }) => {
  return (
    <>
      <DataIdentitasAnak searchParams={searchParams}/>
    </>
  )
}

export default IdentitasBalitaPage
