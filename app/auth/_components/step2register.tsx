"use client";
import React, { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerPage1Schema, registerPage2Schema } from "@/schemas/register";
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

interface IProps {
  onClickBack: () => void;
}

const Step2Register: React.FC<IProps> = ({ onClickBack }) => {
  const [loading, startCreate] = useTransition();
  const [showNIK, setShowNIK] = useState(false);


  const form = useForm<z.infer<typeof registerPage2Schema>>({
    resolver: zodResolver(registerPage2Schema),
    defaultValues: {
      alamat: "",
      kecamatan: "",
      nik: "",
    },
  });
  
  const onSubmit = async (data: z.infer<typeof registerPage2Schema>) => {
    // startCreate(() => {
    //   createChildren(data)
    //     .then((res) => {
    //     if (res.success){
    //       toast.success('Berhasil menambahkan anak')
    //       console.log('ok')
    //     } else {
    //       toast.error(res.error);
    //     }
    //     })
    // })
  };
  

  return (
    <>
    {/* @ts-ignore */}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-between">
          <h1 className="text-xl">
            Daftar - <span>Informasi Pribadi</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#50b4b7] rounded-xl w-full h-[5px]" />
          <div className="bg-[#50b4b7] rounded-xl w-full h-[5px]" />
        </div>
        <div>
          <div className="grid w-full items-center gap-1.5 space-y-2">
          <FormField
                control={form.control}
                name="alamat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">Alamat</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Masukan alamat anda" disabled={loading} />
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
                    <FormLabel className="sm:text-right">Kecamatan</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Masukan Kecamatan anda" disabled={loading} />
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
                    <FormLabel className="sm:text-right">
                       NIK
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          type={showNIK ? "text" : "password"}
                          placeholder="Masukan NIK anda"
                          disabled={loading}
                        />
                      </FormControl>

                      <button
                        type="button"
                        className="absolute bottom-3 right-0 pr-3 flex items-center"
                        onClick={() =>
                          setShowNIK(!showNIK)
                        }
                      >
                        {showNIK ? (
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
        <Button variant={"default"} className="w-full mt-4">
          Buat Akun
        </Button>
        <Button
          variant={"outline"}
          className="w-full mt-2"
          onClick={onClickBack}
        >
          Kembali
        </Button>
      </form>
    </Form>
    </>
  );
};

export default Step2Register;