'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { kaderSchema } from "@/schemas/kader";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useState, useTransition } from "react";
import Link from "next/link";
import { toast } from "sonner";
import axios from "axios";
import { VscLoading } from "react-icons/vsc";
import { useRouter } from "next/navigation";

type KaderFormData = z.infer<typeof kaderSchema>;

function FormAddAnggotaKader() {
  // Gunakan useTransition untuk handle loading state
  const [isPending, startTransition] = useTransition();
  const navigate = useRouter()
  
  const form = useForm<KaderFormData>({
    resolver: zodResolver(kaderSchema),
    defaultValues: {
      // Tidak perlu default value untuk role
    },
  });

  const onSubmit = (data: KaderFormData) => {
    startTransition(async () => {
      try {
        // Tetapkan role secara langsung ke 'KADER' di backend
        const response = await axios.post("/api/kader", data);
        toast.success("Data kader berhasil ditambahkan.");
        form.reset();
        navigate.back()
      } catch (error: any) {
        const message = error.response?.data?.message || "Terjadi kesalahan saat menambahkan kader.";
        toast.error(message);
      }
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Card className="p-4 sm:p-10 space-y-4">
        <h1 className="font-semibold text-lg text-gray-700 mb-4">
          Form Pendaftaran Kader Puskesmas
        </h1>
        
        {/* Avatar Upload */}
        <label className="block cursor-pointer w-max rounded-full">
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile Kader" />
            <AvatarFallback>Profile Kader</AvatarFallback>
          </Avatar>
          <input type="file" className="hidden" />
        </label>

        {/* NIK */}
        <div className="w-full">
          <Label htmlFor="nik">
            NIK (Nomor Induk Kependudukan) <span className="text-red-500">*</span>
          </Label>
          <Input id="nik" placeholder="Masukkan NIK" {...form.register("nik")} />
          {form.formState.errors.nik && (
            <p className="text-red-500 text-sm">{form.formState.errors.nik.message}</p>
          )}
        </div>

        {/* Nama */}
        <div className="w-full">
          <Label htmlFor="name">
            Nama Kader <span className="text-red-500">*</span>
          </Label>
          <Input id="name" placeholder="Masukkan Nama" {...form.register("name")} />
          {form.formState.errors.name && (
            <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
          )}
        </div>

        {/* E-mail */}
        <div className="w-full">
          <Label htmlFor="email">
            E-mail Kader <span className="text-red-500">*</span>
          </Label>
          <Input id="email" type="email" placeholder="Masukkan Email" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
          )}
        </div>

        {/* Jenis Kelamin */}
        <div className="w-full space-y-3">
          <Label>
            Jenis Kelamin <span className="text-red-500">*</span>
          </Label>
          <RadioGroup {...form.register("gender")}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="LAKI_LAKI" id="LAKI_LAKI" />
              <Label htmlFor="LAKI_LAKI">Laki-Laki</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="PEREMPUAN" id="PEREMPUAN" />
              <Label htmlFor="PEREMPUAN">Perempuan</Label>
            </div>
          </RadioGroup>
          {form.formState.errors.gender && (
            <p className="text-red-500 text-sm">{form.formState.errors.gender.message}</p>
          )}
        </div>

        {/* Alamat */}
        <div className="w-full">
          <Label htmlFor="address">
            Alamat <span className="text-red-500">*</span>
          </Label>
          <Textarea id="address" placeholder="Masukkan Alamat" {...form.register("address")} />
          {form.formState.errors.address && (
            <p className="text-red-500 text-sm">{form.formState.errors.address.message}</p>
          )}
        </div>
      </Card>

      <div className="w-full flex gap-4 justify-end">
        <Link href="/management/anggota-kader">
          <Button onClick={() => navigate.back()} className="px-10" variant="outline" disabled={isPending}>
            Batal
          </Button>
        </Link>
        <Button type="submit" className="px-10 gap-2" disabled={isPending}>
          {isPending ? (
            <>
              <VscLoading className="animate-spin" />
              Menyimpan...
            </>
          ) : (
            "Simpan"
          )}
        </Button>
      </div>
    </form>
  );
}

export default FormAddAnggotaKader;
