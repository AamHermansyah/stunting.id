'use client';

import { useRef } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardContent } from '@/components/ui/card';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Andi Muh. Irwan",
    comment: "Melalui upaya bersama, kita dapat memberikan akses yang lebih baik terhadap gizi, edukasi, dan perawatan kesehatan bagi anak-anak yang rentan terhadap stunting.",
    expert: "Ahli Gizi",
    imageUrl: 'https://picsum.photos/id/32/300/600'
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Dengan website ini, saya yakin kita dapat lebih meningkatkan pemahaman masyarakat tentang stunting.",
    expert: "Ahli Gigi",
    imageUrl: 'https://picsum.photos/id/32/300/600'
  },
  {
    id: 3,
    name: "Mike Johnson",
    comment: "Saya mendukung inisiatif web stunting ini.",
    expert: "Ahli Bedah",
    imageUrl: 'https://picsum.photos/id/32/300/600'
  },
  {
    id: 4,
    name: "Sarah Davis",
    comment: "Web stunting ini memberikan platform yang sangat penting untuk penyebaran informasi seputar perawatan kulit anak-anak.",
    expert: "Ahli Kulit",
    imageUrl: 'https://picsum.photos/id/32/300/600'
  },
  {
    id: 5,
    name: "David Lee",
    comment: "Sebagai ahli mata, saya melihat pentingnya akses yang lebih baik terhadap perawatan kesehatan mata anak-anak.",
    expert: "Ahli Mata",
    imageUrl: 'https://picsum.photos/id/32/300/600'
  },
  {
    id: 6,
    name: "Emily Brown",
    comment: "Inisiatif web stunting ini sangat penting dalam mendukung pemahaman masyarakat tentang kesehatan jantung anak-anak.",
    expert: "Ahli Jantung",
    imageUrl: 'https://picsum.photos/id/32/300/600'
  },
];


const ExpertsSay = () => {
  const swiperRef = useRef(null);

  const slidePrev = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section id="experts-say" className="mt-20">
      <div className="py-10">
        <div className="max-w-[500px] space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            What the expert say to this problem.
          </h1>
          <p>
            Mari kita resapi dan pahami yang mereka (para ahli) berbicara terkait dengan masalah yang dialami oleh kebanyakan keluarga di indonesia
          </p>
        </div>
        <div className="relative mt-10">
          <Button
            onClick={slidePrev}
            className="absolute top-[50%] -translate-y-[100%] -left-4 p-2.5 text-white z-10 active:scale-95"
          >
            <BiLeftArrowAlt fontSize={24} />
          </Button>
          <Button
            onClick={slideNext}
            className="absolute top-[50%] -translate-y-[100%] -right-4 p-2.5 text-white z-10 active:scale-95"
          >
            <BiRightArrowAlt fontSize={24} />
          </Button>
          <Swiper
            modules={[Pagination]}
            spaceBetween={12}
            slidesPerView={1}
            breakpoints={{
              900: {
                slidesPerView: 3,
              },
              678: {
                slidesPerView: 2,
              },
            }}
            pagination={{ clickable: true }}
            ref={swiperRef}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="relative">
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex h-[200px]">
                    <div className="relative bg-gray-200 basis-[30%]">
                      <img
                        src={item.imageUrl}
                        alt="expert"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="basis-[70%] pt-2 px-3">
                      <h1 className="text-lg font-semibold">
                        {item.name}
                      </h1>
                      <h6 className="text-xs text-gray-400">
                        {item.expert}
                      </h6>
                      <p className="mt-2 text-sm">
                        {`"${item.comment}"`}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ExpertsSay