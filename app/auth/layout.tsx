import type { Metadata } from "next";
import GreetingCard from "./_components/greeting-card";

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
      <div className="h-screen w-full max-w-[1500px] mx-auto px-4 sm:px-10">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
          <div className="w-full space-y-4">
            {children}
          </div>
          <div className="h-full hidden md:block">
            <GreetingCard />
          </div>
        </div>
        <span className="text-sm text-gray-400 items-end pb-10">
          © 2024 Stunting. All Rights Reserved
        </span>
      </div>
    </>
  );
}
