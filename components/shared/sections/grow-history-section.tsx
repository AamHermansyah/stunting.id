import React from "react";
import TabsButton from "../tabs-button";
import SejarahPertumbuhan from "./_components/sejarah-pertumbuhan";

interface IProps {
  profile: string;
  diary: string;
  history: string;
  userId: string; // Tambahkan userId ke tipe properti
  childId: string; // Tambahkan childId untuk kebutuhan SejarahPertumbuhan
}

function GrowHistorySection({ profile, diary, history, userId, childId }: IProps) {
  return (
    <div className="space-y-4">
      <TabsButton buku={profile} diary={diary} riwayat={history} />
      <SejarahPertumbuhan userId={userId} childId={childId} />
    </div>
  );
}

export default GrowHistorySection;
