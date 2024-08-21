import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex-shrink-0 rounded-lg border-2 px-4 py-4 my-4 space-y-4">
      <div className="flex flex-col items-center">
        <div className="relative w-[55px] h-[55px] lg:w-[85px] lg:h-[85px] bg-gray-200 border-white border-4 shadow-md rounded-full">
          <div className="absolute w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] border-2 border-white rounded-full bg-red-500 right-0 bottom-0 text-center lg:text-sm text-xs text-white">
            12
          </div>
        </div>
        <h2 className="font-semibold mt-2 lg:text-base text-sm">Syafira</h2>
        <p className="lg:text-base text-sm">0 Tahun 4 bulan</p>
      </div>
      <div className="flex flex-col space-y-2 lg:text-base text-xs">
        <div className="flex justify-between space-x-4">
          <p className="">Tinggi Badan</p>
          <p className="">63 Cm</p>
        </div>
        <div className="flex justify-between space-x-4">
          <p className="">Berat Badan</p>
          <p className="">6,5 Kg</p>
        </div>
        <div className="flex justify-between space-x-4">
          <p className="">Lingkar Kepala</p>
          <p className="">41 Cm</p>
        </div>
        <div className="flex justify-between space-x-4">
          <p className="">Lingkar Lengan</p>
          <p className="">13.5 Cm</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-[#108786] bg-[#e1f1f3] font-medium px-4 py-2 w-full rounded-lg text-sm lg:text-base">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
