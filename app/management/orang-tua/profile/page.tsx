import ChildrenProfile from '@/app/dashboard/(home)/_components/children-profile'
import React from 'react'

const page = () => {
  return (
    <div>
      <ChildrenProfile detail='/management/orang-tua/profile/detail-anak' add='/management/orang-tua/profile/tambah-anak'/>
    </div>
  )
}

export default page
