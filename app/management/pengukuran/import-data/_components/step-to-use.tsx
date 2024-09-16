import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionStep from "./accordion-step";

const StepToUse = () => {
  return (
    <div className="p-4 w-full min-h-[400px] bg-white border shadow-sm rounded-sm">
      <h1 className="text-base sm:text-lg font-semibold">
        Bingung dengan cara menggunakan template ?
      </h1>
      <h2 className="text-xs sm:text-sm font-semibold text-gray-400">
        Berikut adalah tatacara untuk menggunakan template yang sudah diunduh
      </h2>
      <div className="flex  justify-center flex-col w-full space-y-2">
        <Accordion type="single" collapsible className="border shadow-sm rounded-lg my-2 px-4">
          <AccordionStep
            value="1"
            label="Cara pengisian kolom 1"
            des="Kolom satu berisikan daftar Nama Balita yang menjadi peserta pengukuran berkala, Jika nama balita menggunakan sepasi, maka gunakan tanda garis bawah ( _ ) sebagai pengganti spasi, contohnya seperti ini (Muhammad_Mujahid)."
            images="/images/PengukuranBalita-1.svg"
          />
        </Accordion>
        <Accordion  type="single" collapsible className="border shadow-sm rounded-lg my-2 px-4">
          <AccordionStep
            value="2"
            label="Cara pengisian kolom 2"
            des="Kolom kedua berisi Tanggal Input atau tanggal dilakukannya pengukuran berkala. Silahkan isi tanggal input dengan format DD-MM-YY atau Hari-Bulan-Tahun"
            images="/images/PengukuranBalita-2.svg"
          />
        </Accordion>
      </div>
    </div>
  );
};

export default StepToUse;
