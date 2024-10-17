'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/shared/date-picker";
import { calculateMonthsDifference, formatDateToYYYYMMDD } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { kecamatanList } from "@/constants";
import { VscLoading } from "react-icons/vsc";
import { RowCSVStuntingCheck } from "@/types";
import useStuntingCheck from "../_stores/use-stunting-check";
import { stuntingCheckSchema } from "@/schemas/check-stunting";
import { toast } from "sonner";

const StuntingCheckForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();

  const { results, baby, setResults, setBaby } = useStuntingCheck();

  const form = useForm<z.infer<typeof stuntingCheckSchema>>({
    resolver: zodResolver(stuntingCheckSchema)
  });

  const handleBBU = (row: RowCSVStuntingCheck, weight: number) => {
    const { SDsNeg, SDsPos } = row;

    if (weight < SDsNeg[0]) {
      return {
        status: 'danger',
        message: 'Berat badan sangat kurang (severely underweight)'
      };
    } else if (weight >= SDsNeg[0] && weight < SDsNeg[1]) {
      return {
        status: 'semi-danger',
        message: 'Berat badan kurang (underweight)'
      };
    } else if (weight >= SDsNeg[1] && weight <= SDsPos[0]) {
      return {
        status: 'normal',
        message: 'Berat badan normal'
      };
    } else {
      return {
        status: 'danger',
        message: 'Risiko berat badan lebih'
      };
    }
  };

  const onSubmit = (data: z.infer<typeof stuntingCheckSchema>) => {
    const age = calculateMonthsDifference(data.DOB);

    if (age > 60) {
      return toast.error('Umur bayi melebihi batas!', {
        description: 'Sistem kami hanya dapat melakukan pengecekan sampai umur 5 tahun.',
      });
    }

    setLoading(true);

    fetch(`/api/zscore/BBU?gender=${data.gender}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          const selectedRow = res.data[age];

          if (selectedRow.month === age) {
            const result = handleBBU(selectedRow, +data.weight);

            setResults({
              BBU: {
                ...selectedRow,
                weight: data.weight,
                result: result.message,
                status: result.status
              }
            });

            setBaby(data);

            setModalOpen(true);
            return;
          }

          toast('Terjadi kesalahan data.', {
            description: 'Terdapat ketidaksesuaian data. Hubungi admin.',
          });
          return;
        }

        toast('Error: ' + res.status, {
          description: res.message,
        });
      })
      .catch((error) => {
        toast('Error', {
          description: (error as Error).message,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="timeline" className="mt-10">
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-3xl">
              {results && results.BBU.status === 'normal' ? 'Selamat!' : 'Oh tidakk!'}
            </DialogTitle>
          </DialogHeader>
          <h1 className="text-7xl text-center py-4">
            {results && results.BBU.status === 'normal' ? '😊' : '😱'}
          </h1>
          <DialogDescription className="text-center text-gray-700">
            Sistem kami menyatakan bahwa anak anda terindikasi <b>{results && results.BBU.result}</b>.
          </DialogDescription>
          <Button
            onClick={() => navigate.push('/cek-stunting/hasil')}
          >
            Selanjutnya
          </Button>
          <span className="text-xs text-gray-500 italic">
            <b>Note: </b> Klik tombol selanjutnya untuk melihat grafik dari pertumbuhan berat badan balita di seluruh Indonesia
          </span>
        </DialogContent>
      </Dialog>

      <div className="w-full md:grid grid-cols-12 gap-10 sm:px-0 md:py-10">
        <div className="col-span-6 lg:col-span-5 flex flex-col justify-center mb-10 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold">Cek Status Stunting</h2>
          <p className="font-light mt-4 mb-6 text-justify">
            Mari bersama-sama mencegah stunting dan memastikan pertumbuhan anak-anak kita yang sehat dan optimal. Cegah stunting dengan memberikan pola makan yang seimbang dan bergizi tinggi, yang terdiri dari makanan yang kaya akan vitamin dan mineral. Pastikan juga anak-anak kita mendapatkan ASI eksklusif selama enam bulan pertama kehidupan mereka.
          </p>
        </div>
        <div className="md:max-w-[600px] col-span-6 lg:col-span-7 min-h-[450px] overflow-y-auto custom-scrollbar">
          {/* @ts-ignore */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Nama" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="district"
                  render={({ field }) => {
                    const inputField = { onBlur: field.onBlur, value: field.value, name: field.name }
                    return (
                      <FormItem>
                        <FormLabel>Kecamatan</FormLabel>
                        <FormControl>
                          <Select
                            {...inputField}
                            onValueChange={(value) => {
                              form.setValue('district', value);
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Kecamatan" />
                            </SelectTrigger>
                            <SelectContent className="max-h-[160px]">
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
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => {
                    const inputField = { onBlur: field.onBlur, value: field.value, name: field.name }
                    return (
                      <FormItem>
                        <FormLabel>Jenis Kelamin</FormLabel>
                        <FormControl>
                          <Select
                            {...inputField}
                            onValueChange={(value: 'boy' | 'girl') => {
                              form.setValue('gender', value);
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Gender</SelectLabel>
                                <SelectItem value="boy">Laki laki</SelectItem>
                                <SelectItem value="girl">Perempuan</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Berat Badan (kg)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0 kg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tinggi Badan (cm)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0 cm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <FormField
                  control={form.control}
                  name="DOB"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tanggal Lahir</FormLabel>
                      <FormControl>
                        <DatePicker
                          disableFutureDate={true}
                          onChange={(date) => {
                            form.setValue('DOB', formatDateToYYYYMMDD(date));
                            form.trigger('DOB');
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <FormField
                  control={form.control}
                  name="headCircumference"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lingkar Kepala (cm)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0 cm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Button type="submit" className="mt-4">
                  {!loading ? 'Cek Sekarang' : (
                    <VscLoading fontSize={24} className="animate-spin" />
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default StuntingCheckForm