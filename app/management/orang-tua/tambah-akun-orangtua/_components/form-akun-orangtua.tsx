"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerPage1Schema, registerParrentsAccount } from "@/schemas/register";
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
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue } from "@/components/ui/select";
import { VscLoading } from "react-icons/vsc";
import { createAccount } from "@/actions/register1";
import { toast } from "sonner";
import { kecamatanList } from "@/constants";
import { handleParrentAccount } from "@/actions/register-parents";
import { useRouter } from "next/navigation";

function FormAkunOrangtua() {
    const [loading, startCreate] = useTransition();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();

  const form = useForm<z.infer<typeof registerParrentsAccount>>({
    resolver: zodResolver(registerParrentsAccount),
    defaultValues: {
      nama: "",
      email: "",
      password: "",
      confirmPassword: "",
      alamat: "",
      kecamatan: "",
      nik: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerParrentsAccount>) => {
    startCreate(() => {
      handleParrentAccount(data)
        .then((res) => {
          if (res.success) {
            toast.success('Berhasil menambahkan akun orang tua')
            router.push("/managements/orang-tua/profile");
          } else {
            toast.error(res.error);
          }
        });
    });
  };
  return (
    <>
      {/* @ts-ignore */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Card className="p-4 sm:p-10 space-y-4">
            <h1 className="font-semibold text-lg text-gray-700 mb-4">
              Form Pendaftaran Orang Tua Balita
            </h1>
            <div className="grid grid-cols-1 gap-4">
              <label className="block cursor-pointer w-max rounded-full">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>Profile Kader</AvatarFallback>
                </Avatar>

                <input type="file" className="hidden" />
              </label>

              <FormField
                control={form.control}
                name="nama"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">Nama Orang Tua</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukan nama orang tua"
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
                    <FormLabel className="sm:text-right">NIK (Nomor Induk Kependudukan)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukan NIK orang tua"
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
                    <FormLabel className="sm:text-right">E-mail</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukan e-mail orang tua"
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
                      <FormLabel className="sm:text-right">Alamat</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Masukan alamat orang tua" disabled={loading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="kecamatan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kecamatan</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={loading}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih kecamatan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Kecamatan</SelectLabel>
                            {kecamatanList.map((item) => (
                              <SelectItem
                                value={item.value}
                                key={item.id}
                              >
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
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
                          placeholder="Masukan password orang tua"
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
                    <FormLabel className="sm:text-right">
                      Konfirmasi Password
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Masukan kembali password orang tua"
                          disabled={loading}
                        />
                      </FormControl>

                      <button
                        type="button"
                        className="absolute bottom-3 right-0 pr-3 flex items-center"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <FaEyeSlash className=" text-gray-500" />
                        ) : (
                          <FaEye className=" text-gray-500" />
                        )}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
          </Card>

          <div className="w-full flex gap-4 justify-end">
          <Button
            type="submit"
            variant="default"
            className="w-full mt-4 gap-2"
            disabled={loading}
          >
            {loading && (
              <VscLoading
                className="animate-spin"
              />
            )}
            Tambah Data Orang Tua
          </Button>
          </div>
        </form>
      </Form>
    </>
  );
}

export default FormAkunOrangtua;
