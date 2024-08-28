"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const SejarahPertumbuhan = () => {
  const data = [
    {
      tanggalInput: "22 Juli 2024",
      tinggiBadan: "73.0 Cm",
      beratBadan: "9.3 Kg",
      lingkarKepala: "44.5 Cm",
      lingkarLengan: "14.5 Cm",
      usia: "0 Tahun 8 Bulan",
      statusGizi: "Sehat",
    },
    {
      tanggalInput: "28 Juni 2024",
      tinggiBadan: "71.1 Cm",
      beratBadan: "5.7 Kg",
      lingkarKepala: "43.7 Cm",
      lingkarLengan: "14.3 Cm",
      usia: "0 Tahun 7 Bulan",
      statusGizi: "Stunting",
    },
    {
      tanggalInput: "23 Mei 2024",
      tinggiBadan: "68.3 Cm",
      beratBadan: "8.6 Kg",
      lingkarKepala: "42.8 Cm",
      lingkarLengan: "14.1 Cm",
      usia: "0 Tahun 6 Bulan",
      statusGizi: "Obesitas",
    },
    {
      tanggalInput: "29 April 2024",
      tinggiBadan: "65.5 Cm",
      beratBadan: "7.8 Kg",
      lingkarKepala: "41.5 Cm",
      lingkarLengan: "14.0 Cm",
      usia: "0 Tahun 5 Bulan",
      statusGizi: "Sehat",
    },
    {
      tanggalInput: "21 Maret 2024",
      tinggiBadan: "62.7 Cm",
      beratBadan: "7.0 Kg",
      lingkarKepala: "40.2 Cm",
      lingkarLengan: "13.9 Cm",
      usia: "0 Tahun 4 Bulan",
      statusGizi: "Sehat",
    },
    {
      tanggalInput: "28 Februari 2024",
      tinggiBadan: "59.9 Cm",
      beratBadan: "6.2 Kg",
      lingkarKepala: "38.9 Cm",
      lingkarLengan: "13.8 Cm",
      usia: "0 Tahun 3 Bulan",
      statusGizi: "Obesitas",
    },
    {
      tanggalInput: "29 Januari 2024",
      tinggiBadan: "57.1 Cm",
      beratBadan: "5.4 Kg",
      lingkarKepala: "37.6 Cm",
      lingkarLengan: "13.7 Cm",
      usia: "0 Tahun 2 Bulan",
      statusGizi: "Stunting",
    },
    {
      tanggalInput: "26 Desember 2023",
      tinggiBadan: "54.3 Cm",
      beratBadan: "4.6 Kg",
      lingkarKepala: "36.3 Cm",
      lingkarLengan: "13.6 Cm",
      usia: "0 Tahun 1 Bulan",
      statusGizi: "Sehat",
    },
    {
      tanggalInput: "22 November 2023",
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
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tanggal Input</TableHead>
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
              <TableCell>{item.tanggalInput}</TableCell>
              <TableCell>{item.tinggiBadan}</TableCell>
              <TableCell>{item.beratBadan}</TableCell>
              <TableCell>{item.lingkarKepala}</TableCell>
              <TableCell>{item.lingkarLengan}</TableCell>
              <TableCell>{item.usia}</TableCell>
              <TableCell>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs justify-center font-medium ${getStatusClass(item.statusGizi)}`}>
                  {item.statusGizi}
                </span>
              </TableCell>
              <TableCell>
                <Button variant={"secondary"}>
                  ➔
                </Button>
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
                  <Button variant="secondary">
                    Previous
                  </Button>
                  <Button>
                    Next
                  </Button>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

    </div>
  );
};

export default SejarahPertumbuhan;
