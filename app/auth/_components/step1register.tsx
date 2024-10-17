'use client'
import React, { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerPage1Schema } from "@/schemas/register";
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
import { createAccount } from "@/actions/register1";
import { toast } from "sonner";

interface IProps {
  onClickNext: (email: string) => void;
}

const Step1Register: React.FC<IProps> = ({ onClickNext }) => {
  const [loading, startCreate] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof registerPage1Schema>>({
    resolver: zodResolver(registerPage1Schema),
    defaultValues: {
      nama: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerPage1Schema>) => {
    startCreate(() => {
      createAccount(data)
        .then((res) => {
          if (res.success) {
            toast.success('Berhasil')
            onClickNext(data.email);
          } else {
            toast.error(res.error);
          }
        })
        .catch(() => {
          // Error handling jika terjadi kesalahan lainnya
          toast.error("Terjadi kesalahan. Coba lagi nanti.");
        });
    });
  };

  return (
    <>
      {/* @ts-ignore */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex justify-between">
            <h1 className="text-xl">
              Daftar - <span>Buat Akun</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#50b4b7] rounded-xl w-full h-[5px]" />
            <div className="bg-gray-400 rounded-xl w-full h-[5px]" />
          </div>
          <div>
            <div className="grid w-full items-center gap-1.5 space-y-2">
              <FormField
                control={form.control}
                name="nama"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">Nama</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukan nama anda"
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
                          placeholder="Masukan kembali password anda"
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
          </div>
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
            Selanjutnya
          </Button>
        </form>
      </Form>
    </>
  );
}

export default Step1Register;
