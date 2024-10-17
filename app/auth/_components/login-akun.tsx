'use client';

import Link from "next/link";
import React, { startTransition, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import BackNav from "./back-nav";
import { loginUser } from "@/actions/loginUser";
import { useRouter, useSearchParams } from "next/navigation";
import { loginSchema } from "@/schemas/login";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VscLoading } from "react-icons/vsc";
import { toast } from "sonner";

const LoginAkun = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, startLogin] = useTransition();
  const navigate = useRouter();

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    startLogin(() => {
      loginUser(data)
        .then((res) => {
          if (res.success) {
            toast.success('Berhasil masuk ke akun anda!');
            const { role } = res.data;
            const redirectUrl = callbackUrl ? decodeURIComponent(callbackUrl) : role === 'USER' ? '/dashboard' : '/management';
            navigate.push(redirectUrl);
          } else {
            toast.error(res.error);
          }
        })
    })
  };

  return (
    <div className="flex justify-center flex-col space-y-4 max-w-lg mx-auto">
      <BackNav />
      <h1 className="text-xl">Masuk</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sm:text-right">E-mail</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Masukan e-mail anda"
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sm:text-right">Password</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Masukan password anda"
                      disabled={loading}
                    />
                  </FormControl>

                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="default"
            className="w-full my-4 gap-2"
            disabled={loading}
          >
            {loading && (
              <VscLoading
                className="animate-spin"
              />
            )}
            Masuk
          </Button>
          <span className="text-sm flex items-center gap-1">
            Belum memiliki akun?
            <Link href="/auth/register" className="text-primary hover:underline">
              Daftar
            </Link>
          </span>
        </form>
      </Form>
    </div>
  );
};

export default LoginAkun;
