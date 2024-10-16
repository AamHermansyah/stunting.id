// app/management/anggota-kader/_components/data-anggotakader.tsx
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
import axios from "axios";
import { toast } from "@/components/ui/use-toast";  // Import ShadCN toast

interface Kader {
  id: string;
  name: string;
  nik: string;
  email: string;
  address: string;
  district: string;
  gender: "LAKI_LAKI" | "PEREMPUAN";
  dateOfBirth: string;
  role: "KADER";
}

const DataAnggotaKader = () => {
  const [data, setData] = useState<Kader[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<Kader[]>("/api/kader");
        setData(response.data);
      } catch (err: any) {
        setError("Gagal mengambil data Kader.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Optional: Implement search filter
  const filteredData = data.filter((kader) =>
    kader.name.toLowerCase().includes(search.toLowerCase()) ||
    kader.nik.includes(search) ||
    kader.email.toLowerCase().includes(search.toLowerCase()) ||
    kader.address.toLowerCase().includes(search.toLowerCase()) ||
    kader.district.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus kader ini?")) {
      try {
        await axios.delete(`/api/kader/${id}`);
        // Refresh data setelah hapus
        const response = await axios.get<Kader[]>("/api/kader");
        setData(response.data);
        toast({
          title: "Berhasil",
          description: "Data kader berhasil dihapus.",
          variant: "default",
        });
      } catch (err: any) {
        toast({
          title: "Error",
          description: err.response?.data?.message || "Terjadi kesalahan saat menghapus kader.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <>
      <div className="border rounded space-y-4 bg-white">
        <div className="flex flex-col lg:flex-row sm:justify-between mx-4 mt-4 items-center">
          <h1 className="text-base sm:text-lg font-semibold">
            Data Anggota Kader
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            {/* Search Bar */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64 md:w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                placeholder="Cari anggota kader"
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
            <Link href="/management/anggota-kader/tambah-anggota-kader">
              <Button>Tambah Anggota Kader</Button>
            </Link>
          </div>
        </div>

        {/* Tampilkan Loading atau Error */}
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-10">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
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
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.nik}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.address}, {item.district}</TableCell>
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
                              href={`/management/anggota-kader/detail/${item.id}`}
                            >
                              <FiEye /> Detail
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link
                              className="w-full flex items-center gap-2"
                              href={`/management/anggota-kader/edit/${item.id}`}
                            >
                              <FaEdit /> Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Button
                              variant="ghost"
                              className="w-full flex items-center gap-2"
                              onClick={() => handleDelete(item.id)}
                            >
                              <AiTwotoneDelete /> Hapus
                            </Button>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">
                    Tidak ada data anggota kader.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5}>
                  <div className="flex justify-between items-center rounded-b-[12px]">
                    <div>
                      <p>
                        {filteredData?.length} dari {data?.length} anggota kader
                      </p>
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
        )}
      </div>
    </>
  );
};

export default DataAnggotaKader;
