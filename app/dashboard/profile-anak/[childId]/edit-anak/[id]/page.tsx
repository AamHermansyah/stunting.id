import FormAddAnak from "@/components/shared/form-add-anak";
import { getChildById } from "@/data/child";
import { AuthCookie } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function EditAnakPage({ params }: { params: { id: string } }) {
  const authCookie = cookies().get('auth');
  const user = JSON.parse(authCookie!.value) as AuthCookie;

  const child = await getChildById(+params.id, user.id);

  if (child.error) redirect('/unauthorized');

  return (
    <FormAddAnak id={user.id} data={child.data} />
  ); 
}
