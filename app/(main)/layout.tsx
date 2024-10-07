import Footer from "./_layouts/footer";
import Navbar from "./_layouts/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-12 py-8 sm:py-20">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
