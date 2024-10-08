import React from "react";
import ReminderCalendar from "./_components/reminder-calendar";
import NutritionalCheckResult from "./_components/nutritional-check-results";
import TabsNavigations from "../../_components/tabs-navigation";
import Nutrition from "./_components/nutrition";
import TabsButton from "../../_components/tabs-button";

const page = () => {
  return (
    <>
      <TabsButton buku='/dashboard/profile-anak' diary='/dashboard/profile-anak/diary-anak' riwayat='/dashboard/profile-anak/riwayat-pertumbuhan' />
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
