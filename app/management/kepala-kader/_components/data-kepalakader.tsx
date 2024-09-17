"use client";

import React from "react";
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
import Image from "next/image";
import Link from "next/link";
import { FiEye } from "react-icons/fi";
import { FaEllipsis } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

const DataKepalaKader = () => {
  const data = [
    {
      namaAnggota: "Mursid",
      nik: "1234567890",
      email: "mursid@example.com",
      alamat: "Jl. Mangga No. 5, Jakarta",
    },
    {
      namaAnggota: "Syaiful",
      nik: "0987654321",
      email: "syaiful@example.com",
      alamat: "Jl. Kenari No. 12, Bandung",
    },
    {
      namaAnggota: "Abdullah Mubarak",
      nik: "1122334455",
      email: "abdullah@example.com",
      alamat: "Jl. Mawar No. 8, Surabaya",
    },
    {
      namaAnggota: "Mashud",
      nik: "2233445566",
      email: "mashud@example.com",
      alamat: "Jl. Melati No. 3, Yogyakarta",
    },
    {
      namaAnggota: "Marsinah",
      nik: "3344556677",
      email: "marsinah@example.com",
      alamat: "Jl. Anggrek No. 7, Makassar",
    },
    {
      namaAnggota: "Amar Hak",
      nik: "4455667788",
      email: "amarhak@example.com",
      alamat: "Jl. Kamboja No. 9, Semarang",
    },
  ];

  return (
    <>
      <div className="border rounded space-y-4 bg-white">
        <div className="flex flex-col lg:flex-row sm:justify-between mx-4 mt-4 items-center">
          <h1 className="text-base sm:text-lg font-semibold">
            Data Kepala Kader
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            {/* Search Bar */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                className="w-full sm:w-64 md:w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                placeholder="Cari kepala kader"
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
            {/* <Link href="/management/kepala-kader/tambah-kepala-kader">
              <Button>Tambah Kepala Kader</Button>
            </Link> */}
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Anggota</TableHead>
              <TableHead>NIK</TableHead>
              <TableHead>E-Mail</TableHead>
              <TableHead>Alamat</TableHead>
              <TableHead className="text-center">AKSI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.namaAnggota}</TableCell>
                <TableCell>{item.nik}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.alamat}</TableCell>
                <TableCell className="text-center">
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
                    <DropdownMenuContent
                      align="end"
                      className="w-[200px] space-y-1"
                    >
                      <DropdownMenuItem>
                        <Link
                          className="w-full flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={"#"}
                        >
                          <FiEye /> Detail
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          className="w-full flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={"#"}
                        >
                          <FaEdit /> Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          className="w-full flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={"#"}
                        >
                          <AiTwotoneDelete /> Hapus
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
              <TableCell colSpan={5}>
                <div className="flex justify-between items-center rounded-b-[12px]">
                  <div>
                    <p>Page 1 of 1</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary">Previous</Button>
                    <Button>Next</Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
};

export default DataKepalaKader;
