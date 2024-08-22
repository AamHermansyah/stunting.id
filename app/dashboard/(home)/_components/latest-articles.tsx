import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const LatestArticles = () => {
  return (
    <div className="flex flex-col  rounded-lg px-4 py-4 shadow-sm border">
      <Link href="#">
        <div className="flex justify-between">
          <span className="font-medium text-xl">Artikel Terbaru</span>
          <BsArrowRight fontSize={24} className="my-auto" />
        </div>
      </Link>
      <div className="flex overflow-x-auto flex-row lg:my-6 space-x-2">
        <div className="lg:flex-shrink-0 flex flex-col max-w-[220px] space-y-2 shadow-md p-4 rounded-lg">
          <div className="relative lg:w-full w-[100px] h-[51px] lg:h-[91px]">
            <Image
              src="/images/example-article.png"
              fill={true}
              alt="artikel1"
              className="object-cover rounded-sm"
            />
          </div>
          <p className="line-clamp-3 text-xs lg:text-sm ">
            5 Resep Makanan Bayi Sehat dan Bergizi yang Mudah Dibuat di Rumah
          </p>
        </div>
        <div className="lg:flex-shrink-0 flex flex-col max-w-[220px] space-y-2 shadow-md p-4 rounded-lg">
          <div className="relative lg:w-full w-[100px] h-[51px] lg:h-[91px]">
            <Image
              src="/images/example-article.png"
              fill={true}
              alt="artikel1"
              className="object-cover rounded-sm"
            />
          </div>
          <p className="line-clamp-3 text-xs lg:text-sm ">
            5 Resep Makanan Bayi Sehat dan Bergizi yang Mudah Dibuat di Rumah
          </p>
        </div>
        <div className="lg:flex-shrink-0 flex flex-col max-w-[220px] space-y-2 shadow-md p-4 rounded-lg">
          <div className="relative lg:w-full w-[100px] h-[51px] lg:h-[91px]">
            <Image
              src="/images/example-article.png"
              fill={true}
              alt="artikel1"
              className="object-cover rounded-sm"
            />
          </div>
          <p className="line-clamp-3 text-xs lg:text-sm ">
            5 Resep Makanan Bayi Sehat dan Bergizi yang Mudah Dibuat di Rumah
          </p>
        </div>
        <div className="lg:flex-shrink-0 flex flex-col max-w-[220px] space-y-2 shadow-md p-4 rounded-lg">
          <div className="relative lg:w-full w-[100px] h-[51px] lg:h-[91px]">
            <Image
              src="/images/example-article.png"
              fill={true}
              alt="artikel1"
              className="object-cover rounded-sm"
            />
          </div>
          <p className="line-clamp-3 text-xs lg:text-sm ">
            5 Resep Makanan Bayi Sehat dan Bergizi yang Mudah Dibuat di Rumah
          </p>
        </div>
        <div className="lg:flex-shrink-0 flex flex-col max-w-[220px] space-y-2 shadow-md p-4 rounded-lg">
          <div className="relative lg:w-full w-[100px] h-[51px] lg:h-[91px]">
            <Image
              src="/images/example-article.png"
              fill={true}
              alt="artikel1"
              className="object-cover rounded-sm"
            />
          </div>
          <p className="line-clamp-3 text-xs lg:text-sm ">
            5 Resep Makanan Bayi Sehat dan Bergizi yang Mudah Dibuat di Rumah
          </p>
        </div>
        <div className="lg:flex-shrink-0 flex flex-col max-w-[220px] space-y-2 shadow-md p-4 rounded-lg">
          <div className="relative lg:w-full w-[100px] h-[51px] lg:h-[91px]">
            <Image
              src="/images/example-article.png"
              fill={true}
              alt="artikel1"
              className="object-cover rounded-sm"
            />
          </div>
          <p className="line-clamp-3 text-xs lg:text-sm ">
            5 Resep Makanan Bayi Sehat dan Bergizi yang Mudah Dibuat di Rumah
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;