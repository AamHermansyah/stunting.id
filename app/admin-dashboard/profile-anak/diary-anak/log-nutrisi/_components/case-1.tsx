import React from 'react'
import InputAsi from '../_shared/input-asi'
import { Button } from '@/components/ui/button'

const Case1 = () => {
  return (
    <>
      <InputAsi/>
      <div className="flex space-x-4">
          <Button variant="secondary">Batal</Button>
          <Button>Simpan</Button>
      </div>
    </>
  )
}

export default Case1
