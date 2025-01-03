import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Selamat datang di stunting.id",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
