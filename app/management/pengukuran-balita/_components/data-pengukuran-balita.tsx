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
  import Image from "next/image";
  import { CiSearch } from "react-icons/ci";
  import Link from "next/link";
  import { FiEye } from "react-icons/fi";
  import { FaEllipsis } from "react-icons/fa6";
  import { FaEdit } from "react-icons/fa";
  import { AiTwotoneDelete } from "react-icons/ai";

  const DataPengukuranBalita = () => {

    const data = [
      {
        namaOrangTua: "Budi Santoso",
        tinggiBadan: "73.0 Cm",
        beratBadan: "9.3 Kg",
        lingkarKepala: "44.5 Cm",
        lingkarLengan: "14.5 Cm",
        usia: "0 Tahun 8 Bulan",
        statusGizi: "Sehat",
      },
      {
        namaOrangTua: "Siti Nurhaliza",
        tinggiBadan: "71.1 Cm",
        beratBadan: "5.7 Kg",
        lingkarKepala: "43.7 Cm",
        lingkarLengan: "14.3 Cm",
        usia: "0 Tahun 7 Bulan",
        statusGizi: "Stunting",
      },
      {
        namaOrangTua: "Ahmad Zaki",
        tinggiBadan: "68.3 Cm",
        beratBadan: "8.6 Kg",
        lingkarKepala: "42.8 Cm",
        lingkarLengan: "14.1 Cm",
        usia: "0 Tahun 6 Bulan",
        statusGizi: "Obesitas",
      },
      {
        namaOrangTua: "Maria Ulfa",
        tinggiBadan: "65.5 Cm",
        beratBadan: "7.8 Kg",
        lingkarKepala: "41.5 Cm",
        lingkarLengan: "14.0 Cm",
        usia: "0 Tahun 5 Bulan",
        statusGizi: "Sehat",
      },
      {
        namaOrangTua: "Andi Firmansyah",
        tinggiBadan: "62.7 Cm",
        beratBadan: "7.0 Kg",
        lingkarKepala: "40.2 Cm",
        lingkarLengan: "13.9 Cm",
        usia: "0 Tahun 4 Bulan",
        statusGizi: "Sehat",
      },
      {
        namaOrangTua: "Dewi Sartika",
        tinggiBadan: "59.9 Cm",
        beratBadan: "6.2 Kg",
        lingkarKepala: "38.9 Cm",
        lingkarLengan: "13.8 Cm",
        usia: "0 Tahun 3 Bulan",
        statusGizi: "Obesitas",
      },
      {
        namaOrangTua: "Rudi Hartono",
        tinggiBadan: "57.1 Cm",
        beratBadan: "5.4 Kg",
        lingkarKepala: "37.6 Cm",
        lingkarLengan: "13.7 Cm",
        usia: "0 Tahun 2 Bulan",
        statusGizi: "Stunting",
      },
      {
        namaOrangTua: "Kartika Putri",
        tinggiBadan: "54.3 Cm",
        beratBadan: "4.6 Kg",
        lingkarKepala: "36.3 Cm",
        lingkarLengan: "13.6 Cm",
        usia: "0 Tahun 1 Bulan",
        statusGizi: "Sehat",
      },
      {
        namaOrangTua: "Wawan Setiawan",
        tinggiBadan: "51.5 Cm",
        beratBadan: "3.8 Kg",
        lingkarKepala: "35.0 Cm",
        lingkarLengan: "13.5 Cm",
        usia: "0 Tahun 0 Bulan",
        statusGizi: "Sehat",
      },
    ];

    const getStatusClass = (statusGizi: string) => {
      if (statusGizi === "Sehat") {
        return "bg-green-100 text-green-800 w-[80px] text-center";
      } else if (statusGizi === "Obesitas" || statusGizi === "Stunting") {
        return "bg-red-100 text-red-800 w-[80px] text-center";
      }
      return "w-[80px] text-center";
    };

    return (
      <>
        <div className="border rounded space-y-4 bg-white">

          <div className="flex flex-col lg:flex-row sm:justify-between mx-4 mt-4 items-center">
            <h1 className="text-base sm:text-lg font-semibold">
              Data Pengukuran Balita
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              {/* Search Bar */}
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
              <Button>Import Data Balita</Button>
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
                          href={"/management/pengukuran-balita/detail-anak"}
                        >
                          <FiEye /> Detail
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          className="w-full flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={"/management/pengukuran-balita/edit-balita"}
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
                <TableCell colSpan={8}>
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
    )
  }

  export default DataPengukuranBalita
