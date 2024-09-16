import type { Metadata } from "next";
import Sidebar from "./_layouts/sidebar";

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
    <Sidebar>
      {children}
    </Sidebar>
  );
}
