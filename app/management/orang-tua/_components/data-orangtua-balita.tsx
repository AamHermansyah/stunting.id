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
import { getAllUsers } from "@/data/user"; 

export default async function DataOrangtuaBalita({ searchParams }: { searchParams: { query: string } }) {
  const searchQuery = searchParams.query || null;
  const users = await getAllUsers(searchQuery);

  return (
    <div className="border rounded space-y-4 bg-white">
      <div className="flex flex-col lg:flex-row sm:justify-between mx-4 mt-4 items-center">
        <h1 className="text-base sm:text-lg font-semibold">Data Orang Tua Balita</h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <form method="GET" className="relative w-full sm:w-auto">
            <input
              type="text"
              name="query"
              className="w-full sm:w-64 md:w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              placeholder="Cari orang tua balita"
              defaultValue={searchQuery || ""}
            />
            <button type="submit" className="absolute inset-y-0 right-3 flex items-center text-black">
              <CiSearch fontSize={25} />
            </button>
          </form>

          <Button variant={"outline"} className="gap-2 font-semibold">
            Filter
            <div className="relative h-5 w-5 aspect-square">
              <Image src="/images/filter.svg" fill={true} alt="filter" />
            </div>
          </Button>
          <Link href="/management/orang-tua/tambah-akun-orangtua">
            <Button>Tambah Akun Orang Tua</Button>
          </Link>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Orang Tua</TableHead>
            <TableHead>NIK</TableHead>
            <TableHead>Alamat</TableHead>
            <TableHead>Jumlah Anak</TableHead>
            <TableHead className="text-center">AKSI</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.nik}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user._count.Child}</TableCell>
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
                      <DropdownMenuItem>
                        <Link
                          className="w-full flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`/management/orang-tua/profile/${user.id}`}
                        >
                          <FiEye /> Detail
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          className="w-full flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`/management/orang-tua/edit-orangtua/${user.id}`}
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
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                Tidak ada data yang cocok
              </TableCell>
            </TableRow>
          )}
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
  );
}
