import type { Metadata } from "next";
import { DashboardBreadcrumb } from "@/components/shared/dashboard-breadcrumb";
import TabsNavigations from "./_components/tabs-navigation";

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
    <div className="py-10 mt-6 space-y-4">
      <DashboardBreadcrumb />
      <div className="space-y-2">
        <TabsNavigations />
        {children}
      </div>
    </div>
  );
}