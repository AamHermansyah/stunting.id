import PleaseFillOut from "@/components/shared/please-fill-out";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FiUploadCloud, FiDownload } from "react-icons/fi";

const UploadData = () => {
  return (
    <div className="p-4 w-full min-h-[400px] bg-white border shadow-sm rounded-sm">
      <h1 className="text-base sm:text-lg font-semibold mb-4">
        Import Data Pengukuran Balita
      </h1>
      <div className="flex text-center items-center rounded-lg justify-center flex-col w-full space-y-4 lg:py-14 py-4 px-2 text-centers bg-muted">
        <div className="relative w-[100px] h-[100px]">
          <Image
            src="/images/XSL.svg"
            fill={true}
            alt="user-empty"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="font-semibold text-lg text-center">
          Silahkan unggah file untuk melakukan import data
        </h2>
        <p className="text-gray-400 text-sm text-center m-auto max-w-[750px]">
          Silakan gunakan file Excel (.xlsx) untuk mengunggah data pengukuran
          balita. Untuk mempermudah, unduh template yang telah kami sediakan.
          Template ini akan membantu mengisi data dengan format yang benar. Klik
          tombol <span className="font-bold">'Unduh Template'</span> di bawah
          ini untuk memulai.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant={"outline"} className="text-sm lg:text-base gap-2">
            <FiDownload fontSize={25} /> Unduh File Template
          </Button>
          <Button className="text-sm lg:text-base gap-2">
            <FiUploadCloud fontSize={25} />
            Import Data
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadData;
