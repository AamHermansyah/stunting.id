import CardArticle from '@/components/shared/card-article'
import React from 'react'

function RelatedArticles() {
  return (
    <div className="mt-10 sm:mt-20">
      <h1 className="text-2xl sm:text-3xl font-bold">
        Artikel terkait
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
        <CardArticle />
      </div>
    </div>
  )
}

export default RelatedArticles