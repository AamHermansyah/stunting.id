"use client";

import React from "react";
import GrowHistorySection from "@/components/shared/pages/grow-history-section";

function RiwayatPertumbuhanPage({ params }: { params: { childId: string; userId: string } }) {
  const { childId, userId } = params;

  return (
    <>
      <GrowHistorySection
        profile={`/dashboard/profile-anak/${childId}`}
        diary={`/dashboard/profile-anak/${childId}/diary-anak`}
        history={`/dashboard/profile-anak/${childId}/riwayat-pertumbuhan`}
        userId={userId}
        childId={childId}
      />
    </>
  );
}

export default RiwayatPertumbuhanPage;
