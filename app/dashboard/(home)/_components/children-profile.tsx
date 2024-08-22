import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import ProfileCard from "./profile-card";
import { FiPlus } from "react-icons/fi";

const ChildrenProfile = () => {
  return (
    <div className="flex flex-col  rounded-lg px-4 py-4 shadow-sm border">
      <Link href="#">
        <div className="flex justify-between">
          <span className="font-medium text-xl">Profil anak</span>
          <BsArrowRight fontSize={24} className="my-auto" />
        </div>
      </Link>
      {/* PROFILE CARD */}
      <div className="flex sm:flex-wrap overflow-x-auto flex-row gap-4">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <div className="flex flex-col justify-center min-h-[300px]">
          <Link
            href="#"
            className="flex flex-col space-y-2 justify-center items-center mx-8 h-full"
          >
            <div className="bg-[#e1f1f3] text-[#119494] h-[40px] w-[40px] rounded-full flex items-center justify-center">
              <FiPlus fontSize={30} />
            </div>
            <span className="text-[#119494] font-medium text-center lg:text-base text-sm">
              Tambah profil
            </span>
          </Link>
        </div>
      </div>

      {/* <div className="flex items-center justify-center flex-col  my-10 space-y-4">
        <div className="relative w-[125px] h-[125px]">
          <Image
            src="/images/User_empty.svg"
            fill={true}
            alt="user-empty"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="font-semibold text-lg">
          Profil Anak Anda Belum Terisi
        </h2>
        <p className="text-gray-400 text-sm text-center m-auto max-w-[400px]">
          Silahkan isi terlebih dahulu profile anak anda untuk melakukan pemeriksaan berkala
        </p>
        <button className="bg-[#108786] text-white px-4 py-2 rounded-lg">
          Tambahkan Profile
        </button>
      </div> */}
    </div>
  );
};

export default ChildrenProfile;
