import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative w-full flex items-center justify-center ">
        <Navbar />
      </div>
      {children}
    </>
  );
}
