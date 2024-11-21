'use client';

import React, { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { deleteUser } from '../../../../actions/delete';
import { toast } from "sonner";
import ConfirmationModal from "@/components/shared/ConfirmationModal";

interface DeleteButtonProps {
  userId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDelete = async () => {
    console.log("Deleting user with ID:", userId);
    const result = await deleteUser(userId);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Data berhasil dihapus!");
      window.location.reload();
    }
  };

  return (
    <>
      <button
        className="w-full flex items-center gap-2"
        onClick={(e) => {
          e.stopPropagation();
          console.log("Opening modal");
          setIsModalOpen(true);
        }}
      >
        <AiTwotoneDelete /> Hapus
      </button>

      <ConfirmationModal
        isOpen={isModalOpen}
        title="Konfirmasi Hapus"
        description="Apakah Anda yakin ingin menghapus orang tua ini?"
        onConfirm={() => {
          handleDelete();
          setIsModalOpen(false);
        }}
        onCancel={() => {
          console.log("Closing modal");
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default DeleteButton;