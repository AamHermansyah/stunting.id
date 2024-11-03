import React from 'react'
import InputAsi from './input-asi'
import InputMakanan from './input-makanan'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface IProps {
  batal: string;
}
function Case2({ batal }: IProps) {
  return (
    <>
      <InputAsi />
      <InputMakanan />
      <div className="flex space-x-4 pt-2">
        <Link href={batal}>
          <Button variant="secondary">Batal</Button>
        </Link>
        <Button>Simpan</Button>
      </div >
    </>
  )
}

export default Case2
