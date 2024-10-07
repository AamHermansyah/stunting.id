'use client'

import { RichtextEditor } from '@/components/shared/richtext-editor'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { kecamatanList } from '@/constants'
import { useState } from 'react'
import { VscLoading } from 'react-icons/vsc'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import Image from 'next/image'
import { puskesmasSchema } from '@/schemas/puskemas'

function ArticleAddPage() {
  const [adding, setAdding] = useState(false);
  const form = useForm<z.infer<typeof puskesmasSchema>>({
    resolver: zodResolver(puskesmasSchema)
  });

  const onSubmit = (data: z.infer<typeof puskesmasSchema>) => {
    console.log(data);
  };

  return (
    <div className="py-4">
      {/* @ts-ignore */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold">Tambahkan Puskesmas Baru</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Nama Puskesmas</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan nama puskesmas" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
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

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="font-semibold">Foto Profile</FormLabel>
                  <FormControl>
                    <div className="relative flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full rounded-md">
                      {!field.value ? (
                        // eslint-disable-next-line jsx-a11y/label-has-associated-control
                        <label className="w-full">
                          <div className="flex flex-col items-center justify-center h-full">
                            <div className="h-[200px] flex flex-col justify-center items-center">
                              <p className="font-bold text-2xl">
                                <AiOutlineCloudUpload />
                              </p>
                              <p className="text-base">Click to upload</p>
                            </div>

                            <p className="absolute bottom-4 inset-x-0 text-center w-full text-gray-400 text-xs">
                              Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB
                            </p>
                          </div>
                          <input
                            accept="image/*"
                            type="file"
                            className="w-0 h-0"
                            name="image"
                            onChange={(event) => {
                              if (event.target.files) {
                                field.onChange(event.target.files[0]);
                              }
                            }}
                          />
                        </label>
                      ) : (
                        <div className="relative w-full h-full">
                          <div className="relative w-full h-[200px]">
                            <Image
                              src={URL.createObjectURL(field.value)}
                              alt="uploaded-pic"
                              fill={true}
                              className="object-contain"
                            />
                          </div>
                          <button
                            type="button"
                            className="absolute bottom-3 right-3 p-3 rounded-full border bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                            onClick={() => field.onChange(undefined)}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="font-semibold">Foto Background</FormLabel>
                  <FormControl>
                    <div className="relative flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full rounded-md">
                      {!field.value ? (
                        // eslint-disable-next-line jsx-a11y/label-has-associated-control
                        <label className="w-full">
                          <div className="flex flex-col items-center justify-center h-full">
                            <div className="h-[200px] flex flex-col justify-center items-center">
                              <p className="font-bold text-2xl">
                                <AiOutlineCloudUpload />
                              </p>
                              <p className="text-base">Click to upload</p>
                            </div>

                            <p className="absolute bottom-4 inset-x-0 text-center w-full text-gray-400 text-xs">
                              Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB
                            </p>
                          </div>
                          <input
                            accept="image/*"
                            type="file"
                            className="w-0 h-0"
                            name="image"
                            onChange={(event) => {
                              if (event.target.files) {
                                field.onChange(event.target.files[0]);
                              }
                            }}
                          />
                        </label>
                      ) : (
                        <div className="relative w-full h-full">
                          <div className="relative w-full h-[200px]">
                            <Image
                              src={URL.createObjectURL(field.value)}
                              alt="uploaded-pic"
                              fill={true}
                              className="object-contain"
                            />
                          </div>
                          <button
                            type="button"
                            className="absolute bottom-3 right-3 p-3 rounded-full border bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                            onClick={() => field.onChange(undefined)}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Alamat Puskesmas</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan alamat" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Kontak</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan kontak" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Jumlah Tenaga Kerja</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan jumlah tenaga kerja" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Url Google Maps</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan url alamat" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="font-semibold">Deskripsi</FormLabel>
                  <FormControl>
                    <RichtextEditor
                      value={field.value}
                      onChange={(output) => field.onChange(output)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <Button type="submit" className="mt-4" disabled={adding}>
              {!adding ? 'Submit' : (
                <VscLoading fontSize={24} className="animate-spin" />
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ArticleAddPage