'use client'

import BackButton from '@/components/shared/back-button'
import Article from './_components/article'
import Chart from './_components/chart'
import Description from './_components/description'
import NearestPuskesmas from './_components/nearest-puskesmas'
import ResultCheck from './_components/result-check'
import useStuntingCheck from '../_stores/use-stunting-check'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { VscLoading } from 'react-icons/vsc'

function HasilPage() {
  const { baby, results } = useStuntingCheck();
  const navigate = useRouter();

  useEffect(() => {
    if (!baby || !results) navigate.push('/cek-stunting');
  }, []);

  if (!baby || !results) return (
    <div className="w-full min-h-[400px] p-10 flex justify-center items-center">
      <VscLoading fontSize={24} className="animate-spin" />
    </div>
  )

  return (
    <div>
      <BackButton />
      <div className="grid lg:grid-cols-12 gap-10 sm:mt-4">
        <div className="lg:col-span-5">
          <ResultCheck
            data={baby}
            result={results.BBU.result}
            status={results.BBU.status}
          />
        </div>
        <div className="lg:col-span-7">
          <Chart />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div className="md:col-span-2">
          <Description
            status={results.BBU.status}
            result={results.BBU.result}
          />
        </div>
        <div>
          <Article />
        </div>
      </div>
      <div className="mt-10">
        <NearestPuskesmas />
      </div>
    </div>
  )
}

export default HasilPage