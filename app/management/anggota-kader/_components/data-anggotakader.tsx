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
import { VscLoading } from "react-icons/vsc"; // Import icon loading
import Image from "next/image";
import Link from "next/link";
import { FaEllipsis } from "react-icons/fa6";
import { AiTwotoneDelete } from "react-icons/ai";
import axios from "axios";
import ConfirmationModal from "../../../../components/shared/ConfirmationModal";
import { toast } from "sonner";

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
  const [filteredData, setFilteredData] = useState<Kader[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Set initial loading to true
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [selectedKaderId, setSelectedKaderId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<Kader[]>("/api/kader");
        
        const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setData(sortedData);
        setFilteredData(sortedData); 
      } catch (err: any) {
        setError("Gagal mengambil data Kader.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  useEffect(() => {
    const lowercasedSearch = search.toLowerCase();
    const filtered = data.filter(
      (kader) =>
        kader.name.toLowerCase().includes(lowercasedSearch) ||
        kader.nik.includes(search) ||
        kader.email.toLowerCase().includes(lowercasedSearch)
    );
    setFilteredData(filtered);
  }, [search, data]);

  const openDeleteModal = (id: string) => {
    setSelectedKaderId(id);
    setDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (selectedKaderId) {
      try {
        await axios.delete(`/api/kader/${selectedKaderId}`);
        setData((prevData) =>
          prevData.filter((kader) => kader.id !== selectedKaderId)
        );
        toast.error('Data kader berhasil dihapus.');
      } catch (err: any) {
        toast.error(err.response?.data?.message || 'Terjadi kesalahan saat menghapus kader.');
      } finally {
        setDeleteModalOpen(false);
        setSelectedKaderId(null);
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
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64 md:w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                placeholder="Cari anggota kader"
              />
              <CiSearch className="absolute inset-y-0 right-3 flex items-center text-black" fontSize={25} />
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
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  <div className="flex justify-center items-center">
                    <VscLoading className="animate-spin text-2xl mr-2" />
                    <p className="animate-pulse">Sedang memuat data...</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  <p className="text-red-500">{error}</p>
                </TableCell>
              </TableRow>
            ) : filteredData.length > 0 ? (
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
                      <DropdownMenuContent align="end" className="w-[200px] space-y-1">
                        <DropdownMenuItem asChild>
                          <Button
                            variant="ghost"
                            className="w-full flex items-center gap-2"
                            onClick={() => openDeleteModal(item.id)}
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
                      {filteredData.length} dari {data.length} anggota kader
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
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={deleteModalOpen}
        title="Konfirmasi Penghapusan"
        description="Apakah Anda yakin ingin menghapus data kader ini?"
        onConfirm={handleDelete}
        onCancel={() => setDeleteModalOpen(false)}
      />
    </>
  );
};

export default DataAnggotaKader;