import ChildDiarySection from '@/components/shared/sections/child-diary-section'
import { AuthCookie } from '@/types';
import { cookies } from 'next/headers';
import React from 'react'

function ChildDiaryAdmin({ params }: { params: { id: string } }) {
  const { id } = params;

  const cookieAuth = cookies().get('auth');
  const user = JSON.parse(cookieAuth!.value) as AuthCookie;

  return (
    <div>
      <ChildDiarySection
        edit={`/management/orang-tua/profile/${id}/detail-anak/${id}/diary-anak/log-nutrisi`}
        profile={`/management/orang-tua/profile/${id}/detail-anak/${id}`}
        diary={`/management/orang-tua/profile/${id}/detail-anak/${id}/diary-anak`}
        history={`/management/orang-tua/profile/${id}/detail-anak/${id}/riwayat-pertumbuhan`}
        childId={id}
        user={user}
      />
    </div>
  )
}

export default ChildDiaryAdmin
