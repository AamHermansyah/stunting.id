"use client";
import React, { useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerPage2Schema } from "@/schemas/register";
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
import { updateUserInformation } from "@/actions/register2";
import { toast } from "sonner";
import { useRouter } from "next/navigation"; // Correct Import
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { kecamatanList } from "@/constants";
import { VscLoading } from "react-icons/vsc";

interface IProps {
  onClickBack: () => void;
  userEmail: string;
}

const Step2Register: React.FC<IProps> = ({ onClickBack, userEmail }) => {
  const [loading, startCreate] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof registerPage2Schema>>({
    resolver: zodResolver(registerPage2Schema),
    defaultValues: {
      alamat: "",
      kecamatan: "",
      nik: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerPage2Schema>) => {
    startCreate(() => {
      updateUserInformation(data, userEmail)
        .then((res) => {
          if (res.success) {
            router.push("/auth/login");
          } else {
            toast.error(res.error);
          }
        });
    });
  };

  return (
    <>
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
                name="nik"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">NIK</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukan NIK anda"
                        disabled={loading}
                      />
                    </FormControl>
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
            Buat Akun
          </Button>
          <Button
            type="button"
            variant={"outline"}
            className="w-full mt-2"
            onClick={onClickBack}
            disabled={loading}
          >
            Kembali
          </Button>
        </form>
      </Form>
    </>
  );
};

export default Step2Register;
