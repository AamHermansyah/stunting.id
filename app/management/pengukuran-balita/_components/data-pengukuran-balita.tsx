"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { FaEllipsis } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import Link from "next/link";
import { getMeasurements } from "@/actions/measurement";
import Image from "next/image";

const DataPengukuranBalita = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const measurements = await getMeasurements();
      setData(measurements);
    };
    fetchData();
  }, []);

  const getStatusClass = (statusGizi: string) => {
    if (statusGizi === "Sehat") {
      return "bg-green-100 text-green-800 w-[80px] text-center";
    } else if (statusGizi === "Obesitas" || statusGizi === "Stunting") {
      return "bg-red-100 text-red-800 w-[80px] text-center";
    }
    return "w-[80px] text-center";
  };

  return (
    <div className="border rounded space-y-4 bg-white">
      <div className="flex flex-col lg:flex-row sm:justify-between mx-4 mt-4 items-center">
        <h1 className="text-base sm:text-lg font-semibold">Data Pengukuran Balita</h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              className="w-full sm:w-64 md:w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              placeholder="Cari Data Pengukuran Balita"
            />
            <div className="absolute inset-y-0 right-3 flex items-center text-black">
              <CiSearch fontSize={25} />
            </div>
          </div>
          <Button variant={"outline"} className="gap-2 font-semibold">
              Filter
              <div className="relative h-5 w-5 aspect-square">
                <Image src="/images/filter.svg" fill={true} alt="filter" />
              </div>
            </Button>

            <Link href="/management/pengukuran-balita/import-data">
              <Button>Import data Excel</Button>
            </Link>
            <Link href="/management/pengukuran-balita/tambah-data-pengukuran">
              <Button>Import data Manual</Button>
            </Link>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Balita</TableHead>
            <TableHead>Tinggi Badan (Cm)</TableHead>
            <TableHead>Berat Badan (Kg)</TableHead>
            <TableHead>Lingkar Kepala (Cm)</TableHead>
            <TableHead>Lingkar Lengan (Cm)</TableHead>
            <TableHead>Usia (Tahun)</TableHead>
            <TableHead>Status Gizi</TableHead>
            <TableHead>Detail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.namaOrangTua}</TableCell>
              <TableCell>{item.tinggiBadan}</TableCell>
              <TableCell>{item.beratBadan}</TableCell>
              <TableCell>{item.lingkarKepala}</TableCell>
              <TableCell>{item.lingkarLengan}</TableCell>
              <TableCell>{item.usia}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs justify-center font-medium ${getStatusClass(
                    item.statusGizi
                  )}`}
                >
                  {item.statusGizi}
                </span>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="data-[state=open]:bg-muted text-xs"
                    >
                      <FaEllipsis />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px] space-y-1">
                    <DropdownMenuItem>
                      <Link
                        className="w-full flex items-center gap-2"
                        href={`/management/pengukuran-balita/detail-anak/${item.id}`}
                      >
                        <FiEye /> Detail
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={8}>
              <div className="flex justify-between items-center rounded-b-[12px]">
                <p>Page 1 of 1</p>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default DataPengukuranBalita;
