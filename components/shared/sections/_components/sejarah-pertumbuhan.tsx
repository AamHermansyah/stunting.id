"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { getMeasurementsByUserId } from "@/actions/measurement";

interface MeasurementData {
  id: number;
  namaOrangTua: string;
  tinggiBadan: string;
  beratBadan: string;
  lingkarKepala: string;
  lingkarLengan: string;
  usia: string;
  statusGizi: string;
  tanggalInput: string;
}

const SejarahPertumbuhan = ({ userId, childId }: { userId: string; childId: string }) => {
  const [data, setData] = useState<MeasurementData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const measurements = await getMeasurementsByUserId(userId, childId); // Tambahkan childId
      setData(measurements);
    };
    fetchData();
  }, [userId, childId]);

  const getStatusClass = (statusGizi: string) => {
    if (statusGizi === "Sehat") {
      return "bg-green-100 text-green-800 w-[80px] text-center";
    } else if (statusGizi === "Obesitas" || statusGizi === "Stunting") {
      return "bg-red-100 text-red-800 w-[80px] text-center";
    }
    return "w-[80px] text-center";
  };

  return (
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
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs justify-center font-medium ${getStatusClass(
                  item.statusGizi
                )}`}
              >
                {item.statusGizi}
              </span>
            </TableCell>
            <TableCell>
              <Button variant={"secondary"}>➔</Button>
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
  );
};

export default SejarahPertumbuhan;
