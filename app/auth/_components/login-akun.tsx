'use client'

import Link from "next/link";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginAkun = () => {
  const [showPassword, setShowPassword] = useState(false); // State untuk mengatur visibilitas password

  return (
    <div className="flex justify-center flex-col space-y-4 sm:px-12 px-4">
      <div className="flex justify-between">
        <h1 className="text-xl">Masuk</h1>
        <Link href="/auth/register">
          <span className="text-blue-400">Daftar</span>
        </Link>
      </div>
      <div>
        <div className="grid w-full items-center gap-1.5 space-y-2">
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
                <span className="flex text-xs text-gray-400 mt-2 justify-end">
                  Lupa Password?
                </span>
              </div>
        </div>
      </div>
      <Link href="/dashboard">
        <Button variant={"default"} className="w-full mt-4">
          Masuk
        </Button>
      </Link>
    </div>
  );
};

export default LoginAkun;
