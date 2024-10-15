import React from "react";
import TabsButton from "../tabs-button";
import ReminderCalendar from "./_components/reminder-calendar";
import Nutrition from "./_components/nutrition";
import NutritionalCheckResult from "./_components/nutritional-check-results";

interface IProps{
  edit:string
  profile:string
  diary:string
  history:string
}
function ChildDiarySection({edit, profile, diary, history}:IProps) {
  return (
    <>
      <TabsButton buku={profile} diary={diary} riwayat={history} />
      <div className="space-y-4">
        <div>
          <ReminderCalendar />
        </div >
        <div className="grid grid-cols-12 w-full items-start gap-4">
        <Nutrition edit={edit} />
        <NutritionalCheckResult/>
        </div>
      </div>
    </>
  );
};

export default ChildDiarySection;
