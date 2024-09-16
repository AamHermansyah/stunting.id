import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import ProfileCard from "./profile-card";
import { FiPlus } from "react-icons/fi";
import NotFilled from "@/components/shared/not-filled";

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
      {/* <div className="flex overflow-x-auto flex-row gap-4">
        <ProfileCard profile='/images/AvatarProfile-example1.png' nama="Syafira" umur="0 tahun 4 bulan" tinggi="63" berat="6.5" kepala="41" lengan="13.5"/>
        <ProfileCard profile='/images/AvatarProfile-example2.png' nama="Ahmad" umur="0 tahun 8 bulan" tinggi="63" berat="6.5" kepala="41" lengan="13.5"/>
        <ProfileCard profile='/images/AvatarProfile-example3.png' nama="Mujahid" umur="2 tahun 4 bulan" tinggi="63" berat="6.5" kepala="41" lengan="13"/>
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
      </div> */}
      <NotFilled image='/images/User_empty.svg' label="Profil Anak Anda Belum Terisi" des="Silahkan isi terlebih dahulu profile anak anda untuk melakukan pemeriksaan berkala" />
        <div className="flex justify-center -mt-5 mb-10">
        <button className="bg-[#108786] text-white px-4 py-2 rounded-lg">
          Tambahkan Profile
        </button>
        </div>
    </div>
  );
};

export default ChildrenProfile;
