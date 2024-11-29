import React from 'react'
import { cookies } from 'next/headers'
import { AuthCookie } from '@/types'
import InputMeasurementForm from '../_components/form-input-measurement'

const TambahDataPengukuran = () => {
  const authCookie = cookies().get('auth')
  const user = JSON.parse(authCookie!.value) as AuthCookie

  return (
    <div>
      <InputMeasurementForm userId={user.id} role={user.role} />
    </div>
  )
}

export default TambahDataPengukuran
