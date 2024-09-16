import React from 'react'
import InputAsi from '../_shared/input-asi'
import InputMakanan from '../_shared/input-makanan'
import { Button } from '@/components/ui/button'

const Case3 = () => {
  return (
    <>
      <InputMakanan/>
      <div className="flex space-x-4 mx-2">
          <Button variant="secondary">Batal</Button>
          <Button>Simpan</Button>
      </div>
    </>
  )
}

export default Case3
