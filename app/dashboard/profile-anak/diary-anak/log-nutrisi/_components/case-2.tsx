import React from 'react'
import InputAsi from '../_shared/input-asi'
import InputMakanan from '../_shared/input-makanan'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Case2 = () => {
  return (
    <>
      <InputAsi/>
      <InputMakanan/>
      <div className="flex space-x-4 mx-2">
        <Link href="/dashboard/profile-anak/diary-anak/">
          <Button variant="secondary">Batal</Button>
        </Link>
          <Button>Simpan</Button>
      </div>
    </>
  )
}

export default Case2
