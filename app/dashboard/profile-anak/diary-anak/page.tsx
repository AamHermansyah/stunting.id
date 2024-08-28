import React from "react";
import ReminderCalendar from "./_components/reminder-calendar";
import CardNutritionDetail from "./_components/card-nutrition-detail";
import NutritionalCheckResult from "./_components/nutritional-check-results";
import TabsNavigations from "../../_components/tabs-navigation";

const page = () => {
  return (
    <>
      <TabsNavigations />
      <div className="space-y-4">
        <div>
          <ReminderCalendar />
        </div >
        <div className="grid grid-cols-12 w-full items-start gap-4">
        <CardNutritionDetail/>
        <NutritionalCheckResult/>
        </div>
      </div>
    </>
  );
};

export default page;
