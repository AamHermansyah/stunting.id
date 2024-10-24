"use client";

import ChildDiarySection from "@/components/shared/pages/child-diary-section";
import { useParams } from "next/navigation";
import React from "react";


const ChildDiary = () => {
  const {id} = useParams();
  return (
    <>
      <ChildDiarySection 
      edit={`/dashboard/profile-anak/${id}/diary-anak/log-nutrisi`}
      profile={`/dashboard/profile-anak/${id}`}
      diary={`/dashboard/profile-anak/${id}/diary-anak`}
      history={`/dashboard/profile-anak/${id}/riwayat-pertumbuhan`} 
    />
    </>
  );
};

export default ChildDiary;