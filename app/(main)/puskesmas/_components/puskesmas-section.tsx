'use client'

import CardPuskesmas from '@/components/shared/card-puskesmas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select, SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { kecamatanList } from '@/constants'
import Link from 'next/link'

function PuskesmasSection() {
  return (
    <div className="py-4">
      <div className="flex items-end justify-between gap-4 mb-4">
        <h4 className="text-xl sm:text-2xl font-bold">Puskesmas Terdekat</h4>
        <Link href="/puskesmas/add">
          <Button>Tambah</Button>
        </Link>
      </div>
      <div className="my-2 max-w-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
        <div className="lg:col-span-2">
          <Input placeholder="Cari disini..." name="search" />
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Kecamatan" />
            </SelectTrigger>
            <SelectContent className="max-h-[160px]">
              <SelectGroup>
                <SelectLabel>Kecamatan</SelectLabel>
                {kecamatanList.map((item) => (
                  <SelectItem
                    value={item.value}
                    key={item.id}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <CardPuskesmas />
      </div>
      {/* <div className="text-center">
        <div className="inline-flex mt-10 gap-2">
          <Button className="inline-flex gap-2 items-center">
            <AiOutlineArrowLeft fontSize={20} />
            Prev
          </Button>
          <Button className="inline-flex gap-2 items-center">
            Next
            <AiOutlineArrowRight fontSize={20} />
          </Button>
        </div>
      </div> */}
    </div>
  )
}

export default PuskesmasSection