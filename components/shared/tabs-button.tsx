import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
interface IProps {
  buku: string;
  diary: string;
  riwayat: string;
}

function TabsButton({ buku, diary, riwayat }: IProps) {
  return (
    <div className="w-full overflow-auto pb-2 sm:pb-0">
      <div className='flex flex-row gap-3'>
        <div>
          <Link href={buku}>
            <Button variant={"secondary"} className='sm:w-full'>
              Buku Anak
            </Button>
          </Link>
        </div>
        <div>
          <Link href={diary}>
            <Button variant={"secondary"}>
              Diary Anak
            </Button>
          </Link>
        </div>
        <div>
          <Link href={riwayat}>
            <Button variant={"secondary"}>
              Riwayat Pertumbuhan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TabsButton
