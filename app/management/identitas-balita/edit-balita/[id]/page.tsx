import FormAddAnak from "@/components/shared/form-add-anak";
import { AuthCookie } from "@/types";
import { cookies } from "next/headers";
import { getChildById } from "@/data/child";
import { redirect } from "next/navigation";

async function EditBalitaPage({ params }: { params: { id: string } }) {
  const authCookie = cookies().get('auth');
  const user = JSON.parse(authCookie!.value) as AuthCookie;

  const child = await getChildById(+params.id, user.id);

  if (child.error) redirect('/unauthorized');

  return (
    <FormAddAnak id={user.id} data={child.data} />
  );
}

export default EditBalitaPage;
