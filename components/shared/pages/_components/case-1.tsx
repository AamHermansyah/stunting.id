import React from 'react'
import InputAsi from './input-asi'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface IProps {
  batal: string;
}
function Case1({ batal }: IProps) {
  return (
    <>
      <InputAsi />
      <div className="flex space-x-4 pt-2">
        <Link href={batal}>
          <Button variant="secondary">Batal</Button>
        </Link>
        <Button>Simpan</Button>
      </div>
    </>
  )
}

export default Case1
