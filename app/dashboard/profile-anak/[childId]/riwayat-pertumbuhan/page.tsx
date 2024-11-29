import React from "react";
import GrowHistorySection from "@/components/shared/sections/grow-history-section";
import { cookies } from "next/headers";
import { AuthCookie } from "@/types";

function RiwayatPertumbuhanPage({ params }: { params: { childId: string } }) {
  const { childId } = params;

  const cookieAuth = cookies().get('auth');
  const user = JSON.parse(cookieAuth!.value) as AuthCookie;

  return (
    <>
      <GrowHistorySection
        profile={`/dashboard/profile-anak/${childId}`}
        diary={`/dashboard/profile-anak/${childId}/diary-anak`}
        history={`/dashboard/profile-anak/${childId}/riwayat-pertumbuhan`}
        userId={user.id}
        childId={childId}
      />
    </>
  );
}

export default RiwayatPertumbuhanPage;
