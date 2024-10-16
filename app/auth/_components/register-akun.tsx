"use client";
import React, { useState } from "react";
import BackNav from "./back-nav";
import Link from "next/link";
import Step1Register from "./step1register";
import Step2Register from "./step2register";

const RegisterAkun = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex justify-center flex-col space-y-4 max-w-lg mx-auto">
      <BackNav />
     
          {step === 1 && (
            <Step1Register
              onClickNext={() => {
                setStep(2);
              }}
            />
          )}

          {step === 2 && (
            <Step2Register
              onClickBack={() => {
                setStep(1);
              }}
            />
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
