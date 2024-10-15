'use client'
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import BackNav from "./back-nav";
import Link from "next/link";

const RegisterAkun = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false); // State untuk mengatur visibilitas password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State untuk visibilitas konfirmasi password
  const [showNIK, setShowNIK] = useState(false); // State untuk visibilitas konfirmasi password

  const handleNextStep = () => {
    setStep(2);
  };

  const handleBackStep = () => {
    setStep(1);
  };

  return (
    <div className="flex justify-center flex-col space-y-4 max-w-lg mx-auto">
      <BackNav />
      {step === 1 && (
        <>
          {/* Halaman 1: Buat Akun */}
          <div className="flex justify-between">
            <h1 className="text-xl">
              Daftar - <span>Buat Akun</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#50b4b7] rounded-xl w-full h-[5px]" />
            <div className="bg-gray-400 rounded-xl w-full h-[5px]" />
          </div>
          <div>
            <div className="grid w-full items-center gap-1.5 space-y-2">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Masukkan e-mail anda"
                />
              </div>
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="username"
                  id="username"
                  placeholder="Masukkan username anda"
                />
              </div>
              <div className="relative">
                <Label htmlFor="password">Password</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Masukkan password anda"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className=" text-gray-500" />
                  ) : (
                    <FaEye className=" text-gray-500" />
                  )}
                </button>
                <span className="flex text-sm text-gray-400 mt-2">
                  Password harus memiliki minimal 1 huruf kapital dan 1 simbol
                </span>
              </div>
              <div className="relative">
                <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Masukkan kembali password anda"
                />
                <button
                  type="button"
                  className="absolute bottom-3 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className=" text-gray-500" />
                  ) : (
                    <FaEye className=" text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <Button variant={"default"} className="w-full mt-4" onClick={handleNextStep}>
            Selanjutnya
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          {/* Halaman 2: Informasi Pribadi */}
          <div className="flex justify-between">
            <h1 className="text-xl">
              Daftar - <span>Informasi Pribadi</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#50b4b7] rounded-xl w-full h-[5px]" />
            <div className="bg-[#50b4b7] rounded-xl w-full h-[5px]" />
          </div>
          <div>
            <div className="grid w-full items-center gap-1.5 space-y-2">
              <div>
                <Label htmlFor="nama">Nama</Label>
                <Input
                  type="text"
                  id="nama"
                  placeholder="Masukkan nama anda"
                />
              </div>
              <div>
                <Label htmlFor="alamat">Alamat</Label>
                <Input
                  type="text"
                  id="alamat"
                  placeholder="Masukkan alamat rumah anda"
                />
              </div>
              <div className="relative">
                <Label htmlFor="NIK">NIK</Label>
                <Input
                  type={showNIK ? "text" : "password"}
                  id="NIK"
                  placeholder="Masukkan NIK anda"
                />
                <button
                  type="button"
                  className="absolute bottom-3 right-0 pr-3 flex items-center"
                  onClick={() => setShowNIK(!showNIK)}
                >
                  {showNIK ? (
                    <FaEyeSlash className=" text-gray-500" />
                  ) : (
                    <FaEye className=" text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <Button variant={"default"} className="w-full mt-4">
            Buat Akun
          </Button>
          <Button variant={"outline"} className="w-full mt-2" onClick={handleBackStep}>
            Kembali
          </Button>
        </>
      )}
       <span className="text-sm flex items-center gap-1">
        Sudah memiliki akun?
        <Link href="/auth/login" className="text-primary hover:underline">
          Masuk
        </Link>
      </span>
    </div>
  );
};

export default RegisterAkun;
