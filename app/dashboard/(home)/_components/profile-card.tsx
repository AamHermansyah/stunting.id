'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaEllipsis } from "react-icons/fa6";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteChild } from "@/actions/anak"; // Mengimpor fungsi deleteChild
import { toast } from "sonner";

interface IProps {
  profile: string;
  nama: string;
  umur: string;
  tinggi: string;
  berat: string;
  kepala: string;
  lengan: string;
  detail: string;
  childId: number;
  userId: string;
  edit: string;
}

function ProfileCard({
  profile,
  nama,
  umur,
  tinggi,
  berat,
  kepala,
  lengan,
  detail,
  childId,
  userId,
  edit
}: IProps) {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);

    // Panggil fungsi deleteChild dengan childId dan userId
    const result = await deleteChild(childId, userId);

    if (result.error) {
      setError(result.error);
    } else {
      window.location.reload();
      toast.success("Berhasil menghapus profil anak");
    }

    setIsDeleting(false);
    setIsOpenDelete(false);
  };

  return (
    <>
      <AlertDialog open={isOpenDelete} onOpenChange={setIsOpenDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Apa anda ingin menghapus profile anak anda?{" "}
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. Profile anak akan dihapus
              secara permanen dan menghapus data dari server kami
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              {isDeleting ? "Menghapus..." : "Ya"}
            </AlertDialogAction>
          </AlertDialogFooter>
          {error && <p className="text-red-500">{error}</p>}
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex-shrink-0 rounded-lg border-2 px-4 py-4 my-4 space-y-4">
        <div className="flex flex-col items-center ">
          <div className="flex justify-end w-full">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <FaEllipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={edit} className="w-full">
                    Edit
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive" onClick={() => setIsOpenDelete(true)}>
                  Hapus
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="relative w-[55px] h-[55px] lg:w-[100px] lg:h-[100px] bg-gray-200 border-white border-4 shadow-md rounded-full">
            <Image
              src={profile}
              fill={true}
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
            <div className="absolute w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] border-2 border-white rounded-full bg-red-500 right-0 bottom-0 text-center lg:text-sm text-xs text-white">
              12
            </div>
          </div>
          <h2 className="font-semibold mt-2 lg:text-base text-sm">{nama}</h2>
          <p className="lg:text-base text-sm">{umur}</p>
        </div>
        <div className="flex flex-col space-y-2 lg:text-base text-xs">
          <div className="flex justify-between space-x-4">
            <p className="">Tinggi Badan</p>
            <p className="">{tinggi} Cm</p>
          </div>
          <div className="flex justify-between space-x-4">
            <p className="">Berat Badan</p>
            <p className="">{berat} Kg</p>
          </div>
          <div className="flex justify-between space-x-4">
            <p className="">Lingkar Kepala</p>
            <p className="">{kepala} Cm</p>
          </div>
          <div className="flex justify-between space-x-4">
            <p className="">Lingkar Lengan</p>
            <p className="">{lengan} Cm</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href={detail}>
            <Button
              variant={"secondary"}
              className="text-sm lg:text-base w-full"
            >
              Lihat Detail
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
