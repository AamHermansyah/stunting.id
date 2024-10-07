import React from "react";
import ReminderCalendar from "./_components/reminder-calendar";
import NutritionalCheckResult from "./_components/nutritional-check-results";
import Nutrition from "./_components/nutrition";
import TabsButton from "@/app/dashboard/_components/tabs-button";


const page = () => {
  return (
    <>
    <TabsButton buku='/management/identitas-balita/detail-anak' diary='/management/identitas-balita/detail-anak/diary-anak' riwayat='/management/identitas-balita/detail-anak/riwayat-pertumbuhan' />
      <div className="space-y-4">
        <div>
          <ReminderCalendar />
        </div >
        <div className="grid grid-cols-12 w-full items-start gap-4">
        <Nutrition/>
        <NutritionalCheckResult/>
        </div>
      </div>
    </>
  );
};

export default page;
