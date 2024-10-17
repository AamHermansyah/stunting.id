'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async () => {
  'use server'

  cookies().delete('auth');
  redirect('/auth/login');
}