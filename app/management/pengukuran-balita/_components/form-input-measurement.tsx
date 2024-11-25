"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandItem } from "@/components/ui/command";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { getChildren, createMeasurement } from "@/actions/measurement";
import { toast } from "sonner";
import { measurementSchema, MeasurementFormType } from "@/schemas/measurement";

const InputMeasurementForm = ({ userId, role }: { userId: string; role: string }) => {
  const [children, setChildren] = useState<{ id: number; name: string }[]>([]);
  const [filteredChildren, setFilteredChildren] = useState(children);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
  const router = useRouter();

  const form = useForm<MeasurementFormType>({
    resolver: zodResolver(measurementSchema),
    defaultValues: {
      childId: "",
      height: "",
      weight: "",
      headCircumference: "",
      armCircumference: "",
      date: "",
      nutritionalStatus: "",
    },
  });

  useEffect(() => {
    const fetchChildren = async () => {
      const data = await getChildren(userId, role);
      setChildren(data);
      setFilteredChildren(data);
    };
    fetchChildren();
  }, [userId, role]);

  useEffect(() => {
    const filtered = children.filter((child) =>
      child.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredChildren(filtered);
  }, [searchTerm, children]);

  const onSubmit = async (values: MeasurementFormType) => {
    try {
      const payload = {
        ...values,
        height: parseFloat(values.height),
        weight: parseFloat(values.weight),
        headCircumference: parseFloat(values.headCircumference),
        armCircumference: parseFloat(values.armCircumference),
      };

      const success = await createMeasurement(payload);
      if (success) {
        toast.success("Pengukuran berhasil ditambahkan!");
        router.push("/management/pengukuran-balita");
      } else {
        toast.error("Gagal menambahkan pengukuran.");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan dalam pengolahan data.");
    }
  };

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Layout Pilih Anak dan Tanggal */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
            {/* Dropdown Anak */}
            <FormField
              control={form.control}
              name="childId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Anak</FormLabel>
                  <div className="w-full">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full">
                          {selectedChild || "Pilih Anak"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full mt-2 max-h-80 overflow-y-auto rounded-md border bg-white shadow-lg">
                        <Command>
                          <CommandInput
                            placeholder="Cari nama anak..."
                            value={searchTerm}
                            onValueChange={setSearchTerm}
                            className="my-2"
                          />
                          <CommandList>
                            {filteredChildren.slice(0,7).map((child) => (
                              <CommandItem
                                key={child.id}
                                onSelect={() => {
                                  setSelectedChild(child.name);
                                  field.onChange(child.id.toString());
                                }}
                              >
                                {child.name}
                              </CommandItem>
                            ))}
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input Tanggal */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Pengukuran</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} placeholder="Pilih tanggal" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Input Fields (Tinggi, Berat, Lingkar) */}
          <div className="space-y-4">
            {[{ name: "height", label: "Tinggi Badan (cm)" }, 
              { name: "weight", label: "Berat Badan (kg)" }, 
              { name: "headCircumference", label: "Lingkar Kepala (cm)" }, 
              { name: "armCircumference", label: "Lingkar Lengan (cm)" }]
              .map(({ name, label }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name as keyof MeasurementFormType}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} placeholder={label} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            ))}
          </div>

          {/* Dropdown Status Gizi */}
          <FormField
            control={form.control}
            name="nutritionalStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status Gizi</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih status gizi" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Sehat">Sehat</SelectItem>
                    <SelectItem value="Stunting">Stunting</SelectItem>
                    <SelectItem value="Obesitas">Obesitas</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default InputMeasurementForm;
