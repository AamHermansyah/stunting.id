'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { artikelKategoriList } from '@/constants'
import InputDelayed from '@/components/shared/input-delayed'
import Link from 'next/link'
import CardArticle from '@/components/shared/card-article'

function ArticleSection() {
  return (
    <div className="py-4">
      <div className="flex items-end justify-between gap-4 mb-4">
        <h4 className="text-2xl font-bold">Artikel Terbaru</h4>
        <Link href="/artikel/add">
          <Button>Tambah Artikel</Button>
        </Link>
      </div>
      <div className="my-2 max-w-2xl grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-2">
        <div className="sm:col-span-2">
          <InputDelayed
            placeholder="Cari disini..."
            onChange={(value) => null}
          />
        </div>
        <div className="sm:col-span-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Kategori" />
            </SelectTrigger>
            <SelectContent className="max-h-[160px]">
              <SelectGroup>
                <SelectLabel>Kategori</SelectLabel>
                <SelectItem value="all">
                  Semua
                </SelectItem>
                {artikelKategoriList.map((item) => (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
        <CardArticle />
      </div>
    </div>
  )
}

export default ArticleSection