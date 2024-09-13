import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import ArticleCard from "./article-card";

const LatestArticles = () => {
  return (
    <div className="flex flex-col  rounded-lg px-4 py-4 shadow-sm border">
      <Link href="#">
        <div className="flex justify-between">
          <span className="font-medium text-xl">Artikel Terbaru</span>
          <BsArrowRight fontSize={24} className="my-auto" />
        </div>
      </Link>
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3  lg:my-6 gap-4 items-center">
        <ArticleCard article="/images/example-article.png" description="5 Resep Makanan Bayi Sehat dan Bergizi yang Mudah Dibuat di Rumah"/>
        <ArticleCard article="/images/article-example2.png" description="Panduan Lengkap Nutrisi untuk Bayi: Apa yang Harus Diberikan dan Kapan?"/>
        <ArticleCard article="/images/article-example3.png" description="Tips dan Trik Memperkenalkan Makanan Padat kepada Bayi Anda"/>
        <ArticleCard article="/images/article-example4.png" description="Makanan Super untuk Bayi: Meningkatkan Imunitas dan Kesehatan dengan Bahan Alami"/>
        <ArticleCard article="/images/article-example5.png" description="Makanan Super untuk Bayi: Meningkatkan Imunitas dan Kesehatan dengan Bahan Alami"/>
        <ArticleCard article="/images/article-example6.png" description="Makanan Super untuk Bayi: Meningkatkan Imunitas dan Kesehatan dengan Bahan Alami"/>
      </div>
    </div>
  );
};

export default LatestArticles;
