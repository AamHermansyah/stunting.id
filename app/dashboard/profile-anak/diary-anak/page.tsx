import ChildDiarySection from "@/components/shared/pages/child-diary-section";
import React from "react";


const ChildDiary = () => {
  return (
    <>
      <ChildDiarySection 
      edit="/dashboard/profile-anak/diary-anak/log-nutrisi" 
      profile='/dashboard/profile-anak' 
      diary='/dashboard/profile-anak/diary-anak' 
      history='/dashboard/profile-anak/riwayat-pertumbuhan'/>
    </>
  );
};

export default ChildDiary;