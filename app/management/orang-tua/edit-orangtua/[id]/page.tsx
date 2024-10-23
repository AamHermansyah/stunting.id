import { getParentById } from "@/data/user"
import { AuthCookie } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FormAkunOrangtua from "../../tambah-akun-orangtua/_components/form-akun-orangtua";

export default async function EditOrangtuaPage({ params }: { params: { id: string } }) {
  const authCookie = cookies().get('auth');
  if (!authCookie) {
    return redirect('/unauthorized');
  }

  const user = JSON.parse(authCookie.value) as AuthCookie;
  const parent = await getParentById(params.id, user.id);

  if (parent.error) {
    return redirect('/unauthorized');
  }

  return (
    <FormAkunOrangtua id={user.id} data={parent.data} />
  );
}
