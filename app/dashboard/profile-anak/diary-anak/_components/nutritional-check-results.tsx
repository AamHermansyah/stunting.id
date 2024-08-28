import Image from "next/image";
import React from "react";

const NutritionalCheckResult = () => {
  return (
    <div className="w-full col-span-12 xl:col-span-9 order-3 xl:order-2 p-4 border rounded-lg space-y-4">
      <span className="font-medium text-xl">Hasil Pengecekan Nutrisi :</span>
      <div className="flex items-center rounded-lg justify-center order-2 flex-col w-full my-10 space-y-4">
        <div className="relative w-[125px] h-[125px]">
          <Image
            src="/images/Document_empty.svg"
            fill={true}
            alt="user-empty"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="font-semibold text-lg">Formulir Nutrisi Anak Belum Terisi</h2>
        <p className="text-gray-400 text-sm text-center m-auto max-w-[350px]">
          Silahkan isi terlebih dahulu formulir nutrisi anak anda untuk mendapatkan rekomendasi dari kami
        </p>
        <button className="bg-[#108786] text-white px-4 py-2 rounded-lg">
          Tambahkan Profile
        </button>
      </div>
    </div>
  );
};

export default NutritionalCheckResult;
