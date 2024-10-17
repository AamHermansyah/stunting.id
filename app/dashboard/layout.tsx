import type { Metadata } from "next";
import { DashboardBreadcrumb } from "@/components/shared/dashboard-breadcrumb";
import Header from "@/components/layout/header/header";

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
      <Header />
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-10">
        <div className="py-10 mt-6 space-y-4 pt-16">
          <DashboardBreadcrumb />
          <div className="space-y-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
