'use client';

import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useState } from "react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: 'Aam Hermansyah',
    content: 'Pelayanan puskesmas Kawalu sangat memuaskan. Dokter dan perawatnya ramah dan profesional.',
  },
  {
    id: 2,
    name: 'Ahmad Saepudin',
    content: 'Puskesmas Kawalu memiliki fasilitas yang lengkap dan bersih. Pelayanan medisnya juga sangat baik.',
  },
  {
    id: 3,
    name: 'Niar Nuriyanti',
    content: 'Saya sangat senang dengan pelayanan puskesmas Kawalu. Semua staffnya sangat membantu.',
  },
  {
    id: 4,
    name: 'Dian Ramdani',
    content: 'Puskesmas Kawalu memberikan pelayanan yang cepat dan efisien. Saya merasa aman dan nyaman.',
  },
]

const Reviews = () => {
  const [rating, setRating] = useState(0)

  return (
    <div className="mt-14">
      <h1 className="text-xl font-semibold py-2">Rating dan Ulasan</h1>

      <div className="flex flex-col sm:flex-row mt-4 place-items-center gap-4">
        <div className="basis-[50%] flex flex-col items-center justify-center space-y-2">
          <h1 className="text-6xl md:text-7xl font-bold text-primary">5,0</h1>
          <div className="flex gap-1 items-center text-orange-400 text-3xl sm:text-4xl">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            {/* <AiOutlineStar /> */}
          </div>
          <h4 className="font-semibold text-muted-foreground">
            10 Ulasan
          </h4>
        </div>

        <div className="basis-[50%] w-full">
          {[5, 4, 3, 2, 1].map((rate) => (
            <div key={rate} className="w-full flex items-center gap-4">
              <span className="font-semibold text-lg text-muted-foreground">{rate}</span>
              <div className="relative w-full h-3 bg-muted-foreground/10 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 inset-y-0 bg-primary rounded-full"
                  style={{ width: rate * 10 + '%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-white mt-8 lg:mt-16">
        <div className="w-full flex flex-col-reverse md:flex-row gap-4">
          <div className="md:basis-[50%] space-y-8 md:max-h-[600px] overflow-y-auto custom-scrollbar">
            {reviews.map((review) => (
              <div key={review.id}>
                <div className="w-full flex items-center gap-4 text-lg text-gray-900">
                  <img
                    className="w-16 h-16 rounded-full text-xs"
                    src="https://picsum.photos/id/32/100/100"
                    alt="Michael Gough"
                  />
                  <div>
                    <h6>
                      {review.name}
                    </h6>
                    <time dateTime="2022-02-08" title="February 8th, 2022" className="text-sm text-gray-600">
                      Feb. 8, 2022
                    </time>
                  </div>
                </div>
                <div className="flex gap-1 items-center mt-3 text-xl text-orange-400">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  {/* <AiOutlineStar /> */}
                </div>
                <div className="mt-1.5">
                  <p className="text-gray-500 text-sm">
                    {review.content}
                  </p>
                </div>
              </div>
            ))}
            <Button>Muat lebih banyak</Button>
          </div>
          <div className="md:basis-[50%] ">
            <div className="flex flex-col mb-6">
              <h2 className="text-md lg:text-xl font-bold">
                Tuliskan Ulasan Anda
              </h2>
              <div className="flex gap-1 items-center text-orange-400 mt-4">
                {Array.from({ length: 5 }).map((_, index) => {
                  if (index + 1 <= rating) return (
                    <button key={index} className="text-4xl active:scale-90 transition">
                      <AiFillStar
                        onClick={() => setRating(index + 1)}
                      />
                    </button>
                  )

                  return (
                    <button key={index} className="text-4xl active:scale-90 transition">
                      <AiOutlineStar
                        onClick={() => setRating(index + 1)}
                      />
                    </button>
                  )
                })}
              </div>
            </div>
            <form className="mb-6">
              <textarea
                id="comment"
                className="w-full h-[200px] text-sm py-2 px-4 mb-4 bg-white rounded-lg border border-border focus:border-border focus:ring-0 focus:outline-none resize-none"
                placeholder="Silahkan tulis review anda..."
              />
              <Button type="button">
                Kirim Review
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Reviews
