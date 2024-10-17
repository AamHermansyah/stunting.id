import FormAddAnak from "@/components/shared/form-add-anak";
import { AuthCookie } from "@/types";
import { cookies } from "next/headers";
import React from "react"

export default function TambahAnakPage() {
  const authCookie = cookies().get('auth')
  const user = JSON.parse(authCookie!.value) as AuthCookie
  return (
    <FormAddAnak id={user.id}/>
  );
}