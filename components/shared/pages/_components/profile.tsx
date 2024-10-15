import React from 'react'
import CardProfileDetail from './card-profile-detail'
import { Button } from '@/components/ui/button'

function Profile() {
  return (
    <div className="p-4 w-full col-span-12 lg:col-span-5 xl:col-span-3 order-1 border rounded-lg space-y-2 bg-white">
      <h1 className="text-lg font-semibold">Profile Anak</h1>
      <div className="flex items-center gap-3">
        <div className="relative w-14 aspect-square bg-gray-200 border-white border-4 shadow-md rounded-full">
        </div>
        <div className="leading-5">
          <h3 className="font-semibold">Syafira</h3>
          <span className="text-sm text-muted-foreground/70">0 Tahun 4 Bulan</span>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-x-2 gap-y-4 py-3">
        <CardProfileDetail
          label="Tanggal Lahir"
          value="3 Maret 2024"
        />
        <CardProfileDetail
          label="Jenis Kelamin"
          value="Perempuan"
        />
        <CardProfileDetail
          label="Riwayat Alergi"
          value="Tidak ada"
        />
        <CardProfileDetail
          label="Golongan Darah"
          value="O"
        />
      </div>
      <Button variant="secondary" className="w-full">
        Lihat Detail
      </Button>
    </div>
  )
}

export default Profile