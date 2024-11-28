import React, { Suspense } from "react";
import TabsButton from "../tabs-button";
import ReminderCalendar from "./_components/reminder-calendar";
import Nutrition from "./_components/nutrition";
import NutritionalCheckResult from "./_components/nutritional-check-results";
import { getAllNutritionByChildId } from "@/data/nutrition";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AuthCookie } from "@/types";

interface IProps {
  edit: string;
  profile: string;
  diary: string;
  history: string;
  childId: string;
}

async function ChildDiarySection({ edit, profile, diary, history, childId }: IProps) {
  const res = await getAllNutritionByChildId(+childId);

  if (res.error) redirect('/error');

  const data = res.data!;
  const dateLabels = res.dateLabels!;
  const todayData = res.todayData || null;

  const cookieAuth = cookies().get('auth');
  const user = JSON.parse(cookieAuth!.value) as AuthCookie;

  return (
    <>
      <TabsButton buku={profile} diary={diary} riwayat={history} />
      <div className="space-y-4">
        <ReminderCalendar data={dateLabels} childId={childId} userJoined={user.createdAt} />
        <div className="grid grid-cols-12 w-full items-start gap-4">
          <Suspense>
            <Nutrition edit={edit} todayData={todayData} data={data} />
          </Suspense>
          <NutritionalCheckResult />
        </div>
      </div>
    </>
  );
};

export default ChildDiarySection;
