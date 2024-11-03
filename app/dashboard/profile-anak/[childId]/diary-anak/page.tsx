import ChildDiarySection from "@/components/shared/pages/child-diary-section";
import React from "react";


function DiaryAnakPage({ params }: { params: { childId: string } }) {
  const { childId } = params;

  return (
    <>
      <ChildDiarySection
        edit={`/dashboard/profile-anak/${childId}/diary-anak/log-nutrisi`}
        profile={`/dashboard/profile-anak/${childId}`}
        diary={`/dashboard/profile-anak/${childId}/diary-anak`}
        history={`/dashboard/profile-anak/${childId}/riwayat-pertumbuhan`}
      />
    </>
  );
};

export default DiaryAnakPage;