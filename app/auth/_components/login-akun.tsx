'use client';

import Link from "next/link";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import BackNav from "./back-nav";
import { loginUser } from "@/actions/loginUser";
import { toast } from "sonner";
import { useRouter } from "next/navigation"; 

const LoginAkun = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); 

  const handleLogin = async () => {
    const result = await loginUser({ email, password });

    if (result.error) {
      toast.error(result.error); 
    } else {
      toast.success("Login berhasil!"); 
      router.push("/dashboard"); 
    }
  };

  return (
    <div className="flex justify-center flex-col space-y-4 max-w-lg mx-auto">
      <BackNav />
      <h1 className="text-xl">Masuk</h1>
      <div>
        <div className="grid w-full items-center gap-1.5 space-y-2">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Masukkan email anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <Label htmlFor="password">Password</Label>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Masukkan password anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>
      <Button onClick={handleLogin} variant={"default"} className="w-full mt-4">
        Masuk
      </Button>
      <span className="text-sm flex items-center gap-1">
        Belum memiliki akun?
        <Link href="/auth/register" className="text-primary hover:underline">
          Daftar
        </Link>
      </span>
    </div>
  );
};

export default LoginAkun;
