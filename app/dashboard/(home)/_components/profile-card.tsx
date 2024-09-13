import Image from "next/image";
import React from "react";

interface IProps {
  profile: string;
  nama: string;
  umur: string;
  tinggi: string;
  berat: string;
  kepala: string;
  lengan: string;
}

function ProfileCard({ profile, nama, umur, tinggi, berat, kepala, lengan }: IProps) {
  return (
    <div className="flex-shrink-0 rounded-lg border-2 px-4 py-4 my-4 space-y-4">
      <div className="flex flex-col items-center">
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
        <button className="text-[#108786] bg-[#e1f1f3] font-medium px-4 py-2 w-full rounded-lg text-sm lg:text-base">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
