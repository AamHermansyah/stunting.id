import React from "react";
import ReminderCalendar from "./_components/reminder-calendar";
import NutritionalCheckResult from "./_components/nutritional-check-results";
import TabsNavigations from "../../_components/tabs-navigation";
import Nutrition from "./_components/nutrition";

const page = () => {
  return (
    <>
      <TabsNavigations />
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
