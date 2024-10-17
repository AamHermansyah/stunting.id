"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { childSchema } from "@/schemas/anak";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { createChildren } from "@/actions/anak";
import { toast } from "sonner";
import { VscLoading } from "react-icons/vsc";
import { useRouter } from "next/navigation";


function FormAddAnak() {
  const [loading, startCreate] = useTransition();

  const navigate = useRouter()
  
  const form = useForm<z.infer<typeof childSchema>>({
    resolver: zodResolver(childSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      height: "",
      weight: "",
      headCircumference: "",
      armCircumference: "",
      motherHeight: "",
      fatherHeight: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof childSchema>) => {
      startCreate(() => {
        createChildren(data, 'cm2bz7nxq0000saja1z3y8lxf')
          .then((res) => {
          if (res.success){
            toast.success('Berhasil menambahkan anak')
            navigate.push('/dashboard')
          } else {
            toast.error(res.error);
          }
          })
      })
  };

  return (
    <>
      {/* @ts-ignore */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Card className="p-4 sm:p-10 space-y-4">
            <h1 className="font-semibold text-lg text-gray-700 mb-4">
              Profile Anak
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block cursor-pointer w-max rounded-full">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>Profile Anak</AvatarFallback>
                  </Avatar>

                  <input type="file" className="hidden" />
                </label>
              </div>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">Nama Depan</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Masukan nama depan anak" disabled={loading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">
                      Nama Belakang
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukan nama belakang anak"
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">
                      Tanggal Lahir
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="date"
                        placeholder="Masukan nama depan anak"
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Jenis Kelamin</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-2"
                        disabled={loading}
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="laki-laki" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Laki-laki
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="perempuan" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            perempuan
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>

          <Card className="p-4 sm:p-10 space-y-4">
            <h1 className="font-semibold text-lg text-gray-700">
              Data Kelahiran
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">
                      Tinggi Badan Saat Lahir (cm)
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukan tinggi anak anda saat lahir" disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">
                      Berat Badan Saat Lahir (kg)
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Masukan berat anak anda" disabled={loading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="headCircumference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">
                      Lingkar Kepala Saat Lahir (cm)
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukan lingkar kepala anak anda"
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="armCircumference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">
                      Lingkar Lengan Saat Lahir (cm)
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukan Lingkar lengan anak anda"
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>

          <Card className="p-4 sm:p-10 space-y-4">
            <h1 className="font-semibold text-lg text-gray-700">
              Data Kesehatan
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="bloodType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Golongan darah</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={loading}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Golongan Darah" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="A">A</SelectItem>
                          <SelectItem value="B">B</SelectItem>
                          <SelectItem value="AB">AB</SelectItem>
                          <SelectItem value="O">O</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="allergy"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Apakah anak anda memiliki alergi ?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-2"
                        disabled={loading}
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="ya" />
                          </FormControl>
                          <FormLabel className="font-normal">Ya</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="tidak" />
                          </FormControl>
                          <FormLabel className="font-normal">Tidak</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="premature"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Apakah anak anda terlahir prematur ?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-2"
                        disabled={loading}
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="ya" />
                          </FormControl>
                          <FormLabel className="font-normal">Ya</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="tidak" />
                          </FormControl>
                          <FormLabel className="font-normal">Tidak</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>

          <Card className="p-4 sm:p-10 space-y-4">
            <h1 className="font-semibold text-lg text-gray-700">
              Data Tambahan
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="motherHeight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">
                      Tinggi Badan Ibu (cm)
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukan tinggi ibu anak anda"
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fatherHeight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sm:text-right">
                      Tinggi Badan Ayah (cm)
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukan tinggi badan ayah anak anda"
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>

          <div className="w-full flex gap-4 justify-end">
              <Button onClick={() => navigate.back()} className="px-10" variant="outline" disabled={loading}>
                Batal
              </Button>
            <Button type="submit" className="px-10 gap-2" variant="default" disabled={loading}>
              {loading && (
                <VscLoading 
                className="animate-spin"
                />
              )}
              Simpan
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}

export default FormAddAnak;
