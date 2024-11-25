import React from 'react'
import Case2 from './_components/case-2'
import TabsButton from '../tabs-button'
import Case3 from './_components/case-3'
import Case1 from './_components/case-1'
import { getChildById } from '@/data/child'
import { calculateMonthsDifference } from '@/lib/utils'

interface IProps {
  profile: string;
  diary: string;
  history: string;
  cancel: string;
  childId: string;
  userId: string;
}

async function LogNutritionSection({ profile, diary, history, cancel, childId, userId }: IProps) {
  const child = await getChildById(+childId, userId);
  if (child.error) throw new Error('Error when get child data');

  // const totalMonths = calculateMonthsDifference(child.data!.birthDate);
  const totalMonths = 1;

  return (
    <>
      <TabsButton buku={profile} diary={diary} riwayat={history} />
      <div className="mt-6 space-y-4">
        {totalMonths <= 6 && <Case1 childId={child.data!.id} batal={cancel} />}
        {totalMonths > 6 && totalMonths <= 24 && <Case2 batal={cancel} />}
        {totalMonths > 24 && totalMonths <= 60 && <Case3 batal={cancel} />}
        {totalMonths > 60 && <p>Anak anda sudah 5 tahun lebih dan tidak perlu dipantau lagi.</p>}
      </div>
    </>
  )
}

export default LogNutritionSection
