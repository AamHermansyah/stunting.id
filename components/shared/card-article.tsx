import { Article } from '@/types'
import { formatCreatedAt } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PropTypes = {
  data: Article
}

function CardArtikel({ data }: PropTypes) {
  return (
    <div className="mb-4 sm:mb-8">
      <Link href={`/artikel/${data.id}`} className="relative block w-full aspect-video rounded bg-gray-100 mb-1 overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill={true}
          className="object-cover"
        />
      </Link>
      <div>
        <div className="flex items-center gap-2 mt-4 mb-2">
          <div className="relative w-10 aspect-square rounded-full border-2 bg-gray-100 overflow-hidden">
            <Image
              src={data.author.image}
              alt={data.author.name}
              fill={true}
              className="object-cover"
            />
          </div>
          <div>
            <span className="block font-bold text-xs sm:text-sm text-gray-600">
              {data.author.name}
            </span>
            <span className="block text-xs sm:text-sm text-gray-400">
              {formatCreatedAt(data.created_at)}
            </span>
          </div>
        </div>
        <Link href={`/artikel/${data.id}`} className="block font-bold sm:text-lg mb-1 hover:text-primary transition">
          {data.title}
        </Link>
        <p className="text-sm text-gray-500 text-justify">
          {data.summary}
        </p>
        <div className="flex flex-wrap gap-2 items-center mt-2">
          {data.tags.split(',').map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="block py-1 px-2 rounded border border-primary text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardArtikel