import { Button } from '@/components/ui/button'
import { IoLocationSharp } from 'react-icons/io5'
import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

function CardPuskesmas() {
  return (
    <div className="border rounded overflow-hidden">
      <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
        <Image
          src="/images/puskesmas-1.jpg"
          alt="hero"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">Puskesmas Kawalu</h2>
        <span className="flex text-sm gap-2 text-gray-500">
          <IoLocationSharp fontSize={24} /> J6G7+W57, Jl. Perintis Kemerdekaan, Karsamenak, Kec. Kawalu, Kab. Tasikmalaya, Jawa Barat 46151
        </span>
        <div className="w-full flex justify-end items-center gap-1 font-bold text-yellow-400 mt-2">
          <AiFillStar fontSize={24} />
          <span className="text-gray-700">5.0</span>
        </div>
        <div>
          <Button className="w-full mt-4">
            Mulai Konsultasi
          </Button>
          <Link href="/puskesmas/1">
            <Button variant="outline" className="w-full mt-2">
              Detail
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardPuskesmas