'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import React, { useState, useTransition } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { kaderSchema } from "@/schemas/kader";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { VscLoading } from "react-icons/vsc";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { handleKaderAccount } from "@/actions/register-kader";

function FormAddAnggotaKader() {
  const [loading, startCreate] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof kaderSchema>>({
    resolver: zodResolver(kaderSchema),
    defaultValues: {
      nama: "",
      email: "",
      password: "",
      confirmPassword: "",
      alamat: "",
      nik: "",
      role: "KADER", // Default role
    },
  });

  const onSubmit = async (values: z.infer<typeof kaderSchema>) => {
    startCreate(async () => {
      const result = await handleKaderAccount(values);
      if (result.success) {
        toast.success("Data kader berhasil ditambahkan.");
        form.reset();
        router.push("/management/anggota-kader");
      } else {
        toast.error(result.error || "Terjadi kesalahan saat menambahkan kader.");
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Card className="p-4 sm:p-10 space-y-4">
          <h1 className="font-semibold text-lg text-gray-700 mb-4">
            Form Pendaftaran Kader Puskesmas
          </h1>
          <div className="grid grid-cols-1 gap-4">
            <label className="block cursor-pointer w-max rounded-full">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="Profile Kader" />
                <AvatarFallback>Profile Kader</AvatarFallback>
              </Avatar>
              <input type="file" className="hidden" />
            </label>

            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Kader</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Masukan nama kader"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nik"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NIK (Nomor Induk Kependudukan)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Masukan NIK kader"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Masukan e-mail kader"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alamat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Masukan alamat kader"
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
                  <FormLabel>Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Masukan password"
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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konfirmasi Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Konfirmasi password"
                        disabled={loading}
                      />
                    </FormControl>
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
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
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <VscLoading className="animate-spin" /> : "Submit"}
          </Button>
        </Card>
      </form>
    </Form>
  );
}

export default FormAddAnggotaKader;