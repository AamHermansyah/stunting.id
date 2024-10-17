'use client'

import BackButton from '@/components/shared/back-button'
import Image from 'next/image'
import { HTMLRenderer } from '@/components/shared/html-renderer'
import RelatedArticles from './_components/related-articles'
import { formatCreatedAt } from '@/lib/utils'

const article = {
  title: 'Stunting: Masalah Nutrisi yang Perlu Diperhatikan',
  author: {
    name: 'Dr. Siti Rahmawati',
    image: '/images/doctor-icon.jpg',
  },
  created_at: '2024-10-07',
  image: '/images/puskesmas-1.jpg',
  alt_image: 'Ilustrasi anak-anak yang mengalami stunting.',
  content: `
    <p>Stunting merupakan masalah nutrisi yang serius dan menjadi perhatian di banyak negara, termasuk Indonesia. Menurut World Health Organization (WHO), stunting adalah kondisi di mana anak-anak memiliki tinggi badan yang kurang dibandingkan standar untuk usianya, yang disebabkan oleh malnutrisi kronis.</p>
    
    <h2>Apa Penyebab Stunting?</h2>
    <p>Penyebab stunting sangat kompleks dan dapat dipengaruhi oleh beberapa faktor, antara lain:</p>
    <ul>
      <li>Asupan nutrisi yang tidak memadai selama masa kehamilan dan awal kehidupan.</li>
      <li>Penyakit infeksi yang sering dialami anak, seperti diare dan infeksi saluran pernapasan.</li>
      <li>Kondisi lingkungan yang tidak bersih dan kurangnya akses terhadap air bersih.</li>
    </ul>

    <h2>Dampak Stunting</h2>
    <p>Stunting dapat memiliki dampak jangka pendek dan jangka panjang. Anak-anak yang mengalami stunting berisiko tinggi mengalami masalah kesehatan, perkembangan kognitif yang terhambat, dan prestasi akademik yang rendah. Dalam jangka panjang, stunting dapat mempengaruhi produktivitas dan kualitas hidup seseorang.</p>

    <h2>Upaya Penanggulangan Stunting</h2>
    <p>Pemerintah Indonesia telah melakukan berbagai upaya untuk menanggulangi stunting, termasuk:</p>
    <ul>
      <li>Program penyuluhan nutrisi kepada masyarakat tentang pentingnya nutrisi seimbang bagi ibu hamil dan anak-anak.</li>
      <li>Memberikan suplementasi nutrisi kepada anak-anak yang rentan.</li>
      <li>Memperbaiki akses terhadap air bersih dan sanitasi yang layak.</li>
    </ul>
    
    <p>Selain itu, peran keluarga dan masyarakat sangat penting dalam pencegahan stunting. Dengan memberikan nutrisi yang cukup dan perhatian terhadap kesehatan anak, kita dapat bersama-sama mencegah stunting dan memastikan generasi yang lebih sehat di masa depan.</p>
  `,
  tags: 'Stunting,Nutrisi,Kesehatan,Anak',
};


function ArticleDetail() {
  return (
    <div>
      <BackButton />
      <div>
        <div className="border-b-2 pb-4">
          <h1 className="text-2xl sm:text-4xl font-bold">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 mb-2">
            <div className="relative w-16 sm:w-20 aspect-square rounded-full border-2 bg-gray-100 overflow-hidden">
              <Image
                src={article.author.image}
                alt={article.author.name}
                fill={true}
                className="object-contain"
              />
            </div>
            <div>
              <span className="block font-bold text-sm sm:text-lg text-gray-600">
                {article.author.name}
              </span>
              <span className="block text-xs sm:text-base text-gray-400">
                {formatCreatedAt(article.created_at)}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <div className="relative w-full aspect-video rounded-md bg-gray-100 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill={true}
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              <b>Gambar</b> <span className="italic">{article.alt_image}</span>
            </p>
          </div>

          <div id="article-detail">
            <HTMLRenderer htmlString={article.content} className="py-4" />
          </div>

          <div>
            <h4 className="font-bold">Tag:</h4>
            <div className="flex flex-wrap gap-2 items-center mt-2 text-xs sm:text-base">
              {article.tags.split(',').map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="block py-1 px-2 rounded bg-primary text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <RelatedArticles />
    </div>
  )
}

export default ArticleDetail