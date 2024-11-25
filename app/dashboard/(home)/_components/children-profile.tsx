/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import ProfileCard from "./profile-card";
import NotFilled from "@/components/shared/please-fill-out";
import { getChildren } from "@/actions/showAnak";

interface IProps {
  detail: string;
  add: string;
  id: string;
  edit: string;
  role: string; // Tambahkan role pada props
}

interface WrapperProps {
  title: string;
  children: React.ReactNode;
}
 
const Wrapper: React.FC<WrapperProps> = ({ title, children, }) => (
  <div className="flex flex-col rounded-lg px-4 py-4 shadow-sm border bg-white">
    <div className="flex justify-between">
      <span className="font-medium text-xl">{title}</span>
      <BsArrowRight fontSize={24} className="my-auto" />
    </div>
    {children}
  </div>
);

const LoadingPlaceholder = () => (
  <div className="flex flex-col items-center mt-4 mb-10 animate-pulse">
    <NotFilled
      image='/images/User_empty.svg'
      label="Sedang memuat profil anak"
      des="Loading..."
    />
  </div>
);

const calculateAge = (birthDate: Date) => {
  const birth = new Date(birthDate);
  const now = new Date();
  let ageInMonths = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());

  if (now.getDate() < birth.getDate()) {
    ageInMonths--;
  }

  const years = Math.floor(ageInMonths / 12);
  const months = ageInMonths % 12;

  return years > 0 ? `${years} tahun ${months} bulan` : `${months} bulan`;
};

function ChildrenProfile({ detail, add, id, edit, role }: IProps) {
  const [children, setChildren] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const userId = id; 

  useEffect(() => {
    const fetchChildren = async () => {
      const res = await getChildren(userId, role); // Tambahkan argumen role
      if (res.success) {
        setChildren(res.data);
      } else {
        console.error(res.error);
      }
      setLoading(false);
    };
    fetchChildren();
  }, [userId, role]);

  if (loading) {
    return (
      <Wrapper title="Profil anak">
        <LoadingPlaceholder />
      </Wrapper>
    );
  }

  if (children.length === 0) {
    return (
      <Wrapper title="Profil anak">
        <NotFilled
          image='/images/User_empty.svg'
          label="Profil Anak Anda Belum Terisi"
          des="Silahkan isi terlebih dahulu profile anak anda untuk melakukan pemeriksaan berkala"
        />
        <div className="flex justify-center mt-4 mb-10">
          <Link href={add}>
            <button className="bg-[#108786] text-white px-4 py-2 rounded-lg">
              Tambahkan Profile
            </button>
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper title="Profil anak">
      <div className="flex overflow-x-auto flex-row gap-4">
        {children.map((child) => (
          <ProfileCard
            key={child.id}
            profile='/images/AvatarProfile-example1.png'
            nama={child.name}
            umur={calculateAge(child.birthDate)}
            tinggi={child.height.toString()}
            berat={child.weight.toString()}
            kepala={child.headCircumference.toString()}
            lengan={child.armCircumference.toString()}
            detail={`${detail}/${child.id}`}
            childId={child.id}
            userId={userId}
            edit={`${edit}/${child.id}`}
          />
        ))}
        <div className="flex flex-col justify-center min-h-[300px]">
          <Link
            href={add}
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
    </Wrapper>
  );
}

export default ChildrenProfile;
