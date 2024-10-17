'use client'

import CardArtikel from '@/components/shared/card-article'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { artikelKategoriList } from '@/constants'
import { useEffect, useState } from 'react'
import { FaFaceSadCry } from 'react-icons/fa6'
import { ImSpinner6 } from 'react-icons/im'
import DelayedInput from '@/components/shared/input-delayed'
import { Article } from '@/types'
import { PageInfo } from '../types'
import Link from 'next/link'
import { toast } from 'sonner'

function ArticleSection() {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  }

  useEffect(() => {
    setLoading(true);
    const searchQuery = search !== '' ? `&search=${search}` : '';
    const categoryQuery = category !== '' ? `&category=${category}` : '';

    fetch(`/api/article?page=${currentPage}${searchQuery}${categoryQuery}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/octet-stream',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 500) {
          toast.error('Artikel gagal diunggah. Coba beberapa saat lagi!');
          return;
        }

        setArticles((prev) => {
          if (prev) return [...prev, ...res.data];
          return res.data;
        });
        setPageInfo(res.pageInfo);
        setLoading(false);
      })
      .catch((error) => {
        toast.error((error as Error).message);
      })
  }, [search, category, currentPage]);

  return (
    <div className="py-4">
      <div className="flex items-end justify-between gap-4 mb-4">
        <h4 className="text-2xl font-bold">Artikel Terbaru</h4>
        <Link href="/artikel/add">
          <Button>Tambah Artikel</Button>
        </Link>
      </div>
      <div className="my-2 max-w-2xl grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-2">
        <div className="sm:col-span-2">
          <DelayedInput
            placeholder="Cari disini..."
            onChange={(value) => {
              setCurrentPage(1);
              setSearch(value);
              setArticles(null);
            }}
          />
        </div>
        <div className="sm:col-span-2">
          <Select
            onValueChange={(value) => {
              setCurrentPage(1);
              setCategory(value || '');
              setArticles(null);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Kategori" />
            </SelectTrigger>
            <SelectContent className="max-h-[160px]">
              <SelectGroup>
                <SelectLabel>Kategori</SelectLabel>
                <SelectItem value="all">
                  Semua
                </SelectItem>
                {artikelKategoriList.map((item) => (
                  <SelectItem
                    value={item.value}
                    key={item.id}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {articles !== null && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
          {articles.map((item) => (
            <CardArtikel data={item} key={item.id} />
          ))}
        </div>
      )}

      {loading && (
        <div className="py-20">
          <ImSpinner6 fontSize={24} className="mx-auto animate-spin text-primary" />
        </div>
      )}

      {articles?.length === 0 && !loading && (
        <div className="py-20 space-y-10">
          <FaFaceSadCry fontSize={70} className="mx-auto text-gray-500" />
          <p className="text-center">Artikel tidak ditemukan!</p>
        </div>
      )}

      {pageInfo && !pageInfo?.isLastData && (
        <div className="text-center">
          <div className="inline-flex mt-10 gap-2">
            <Button onClick={handleLoadMore} className="inline-flex gap-2 items-center">
              Load More
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ArticleSection