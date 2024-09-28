import type { Metadata } from "next";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import GreetingCard from "./_components/greeting-card";
import BackNav from "./_components/back-nav";
import LoginAkun from "./_components/login-akun";

export const metadata: Metadata = {
  title: "Dashboard | Stunting.id",
  description: "Untuk mengelola dan mengatur perkembangan balita anda.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-10">
        <div className="py-10 mt-6 space-y-4 pt-5">
          <div className="grid grid-cols-2">
            <div className="justify-between flex flex-col col-span-2 lg:col-span-1">
              <BackNav />
              <div className="h-[600px] justify-center flex w-full">
                <div className="w-full my-auto">{children}</div>
              </div>
              <span className="text-sm text-gray-400 items-end pb-10">
                © 2024 Stunting. All Rights Reserved
              </span>
            </div>
            <div className="lg:h-[750px] xl:h-[990px] hidden lg:flex">
              <GreetingCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
