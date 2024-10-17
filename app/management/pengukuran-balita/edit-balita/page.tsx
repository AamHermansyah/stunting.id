import FormAddAnak from '@/components/shared/form-add-anak'
import { AuthCookie } from '@/types';
import { cookies } from 'next/headers';
import React from 'react'

const EditBalita = () => {
  const authCookie = cookies().get('auth');
  const user = JSON.parse(authCookie!.value) as AuthCookie;

  return (
    <div>
      <FormAddAnak id={user.id} />
    </div>
  )
}

export default EditBalita
