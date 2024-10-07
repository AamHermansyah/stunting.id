import React from 'react'
import InputAsi from '../_shared/input-asi'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Case1 = () => {
  return (
    <>
      <InputAsi/>
      <div className="flex space-x-4">
        <Link href="/dashboard/profile-anak/diary-anak/">
          <Button variant="secondary">Batal</Button>
        </Link>
          <Button>Simpan</Button>
      </div>
    </>
  )
}

export default Case1
