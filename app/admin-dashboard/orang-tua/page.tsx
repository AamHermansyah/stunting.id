import Image from "next/image";
import React from "react";

const OrangTua = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-red-300 my-10 space-y-4">
        <div className="relative w-[125px] h-[125px]">
          <Image
            src="/images/User_empty.svg"
            fill={true}
            alt="user-empty"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="font-semibold text-lg">Profil Anak Anda Belum Terisi</h2>
        <p className="text-gray-400 text-sm text-center m-auto max-w-[400px]">
          Silahkan isi terlebih dahulu profile anak anda untuk melakukan
          pemeriksaan berkala
        </p>
      </div>
      <div className="flex justify-center bg-red-200">
        <button className="bg-[#108786] text-white px-4 py-2 rounded-lg">
          Tambahkan Profile
        </button>
      </div>
    </>
  );
};

export default OrangTua;
