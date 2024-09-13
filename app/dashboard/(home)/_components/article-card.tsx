import Image from 'next/image'
import React from 'react'

interface IProps {
  article: string;
  description: string;

}

function ArticleCard({article, description} : IProps) {
  return (
    <div className="flex flex-col space-y-2 shadow-md p-4 rounded-lg">
    <div className="relative w-full aspect-[16/9]">
      <Image
        src={article}
        fill={true}
        alt="artikel1"
        className="object-cover rounded-sm"
      />
    </div>
    <p className="line-clamp-3 text-sm ">
      {description}
    </p>
  </div>
  )
}

export default ArticleCard
