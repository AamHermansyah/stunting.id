'use client';

import React, { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { deleteChild } from '@/actions/anak'; // Mengimpor fungsi deleteChild
import { toast } from 'sonner';
import ConfirmationModal from '@/components/shared/ConfirmationModal';

interface DeleteChildButtonProps {
  childId: number;
  userId: string;
}

const DeleteChildButton: React.FC<DeleteChildButtonProps> = ({ childId, userId }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDelete = async () => {
    console.log("Deleting child with ID:", childId, "and user ID:", userId);
    const result = await deleteChild(childId, userId);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Anak berhasil dihapus!");
      window.location.reload();
    }
  };

  return (
    <>
      <button
        className="flex items-center gap-2 text-red-500"
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(true);
        }}
      >
        <AiTwotoneDelete /> Hapus
      </button>

      <ConfirmationModal
        isOpen={isModalOpen}
        title="Konfirmasi Hapus"
        description="Apakah Anda yakin ingin menghapus anak ini? Tindakan ini tidak dapat dibatalkan."
        onConfirm={() => {
          handleDelete();
          setIsModalOpen(false);
        }}
        onCancel={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default DeleteChildButton;