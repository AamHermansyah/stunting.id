import ChildDiarySection from "@/components/shared/sections/child-diary-section";
import { AuthCookie } from "@/types";
import { cookies } from "next/headers";

function DiaryAnakPage({ params }: { params: { childId: string } }) {
  const { childId } = params;

  const cookieAuth = cookies().get('auth');
  const user = JSON.parse(cookieAuth!.value) as AuthCookie;

  return (
    <>
      <ChildDiarySection
        edit={`/dashboard/profile-anak/${childId}/diary-anak/log-nutrisi`}
        profile={`/dashboard/profile-anak/${childId}`}
        diary={`/dashboard/profile-anak/${childId}/diary-anak`}
        history={`/dashboard/profile-anak/${childId}/riwayat-pertumbuhan`}
        childId={childId}
        user={user}
      />
    </>
  );
};

export default DiaryAnakPage;