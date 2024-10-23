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
import { getAllChildren } from "@/data/child";

interface User {
  id: string;
  role: string;
  address: string | null;
  image: string | null;
  name: string;
  gender: string | null;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: Date | null;
  password: string;
  district: string | null;
  nik: string | null;
}

interface Child {
  id: string;
  name: string;
  gender: string;
  birthDate: Date;
  User: User;
}

const fetchChildren = async (): Promise<Child[]> => {
  const data = await getAllChildren();
  const formattedData = data.map((child) => ({
    ...child,
    id: child.id.toString(),
    User: {
      ...child.User,
      id: child.User.id.toString(),
    },
  }));
  return formattedData;
};

const DataIdentitasAnak = async () => {
  const children = await fetchChildren();

  return (
    <div className="border rounded space-y-4 bg-white">
      <div className="flex flex-col lg:flex-row sm:justify-between mx-4 mt-4 items-center">
        <h1 className="text-base sm:text-lg font-semibold">
          Data Identitas Balita
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              className="w-full sm:w-64 md:w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              placeholder="Cari data balita"
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
          <Button>Import Data Identitas Balita</Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Balita</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Tanggal Lahir</TableHead>
            <TableHead>Nama Orang Tua</TableHead>
            <TableHead>NIK</TableHead>
            <TableHead>Alamat</TableHead>
            <TableHead className="text-center">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {children.map((child) => (
            <TableRow key={child.id}>
              <TableCell>{child.name}</TableCell>
              <TableCell>{child.gender}</TableCell>
              <TableCell>
                {new Date(child.birthDate).toLocaleDateString()}
              </TableCell>
              <TableCell>{child.User.name}</TableCell>
              <TableCell>{child.User.nik}</TableCell>
              <TableCell>{child.User.address}</TableCell>
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
                        href={`/management/identitas-balita/detail-anak/${child.id}`}
                      >
                        <FiEye /> Detail
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        className="w-full flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`/management/identitas-balita/edit-balita/${child.id}`}
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
            <TableCell colSpan={7}>
              <div className="flex justify-between items-center rounded-b-[12px]">
                <div>
                  <p>Page 1 of 10</p>
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
};

export default DataIdentitasAnak;
