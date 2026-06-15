import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AppHeader from "@/components/layout/header";
import { AppFooter } from "@/components/layout/footer";
import { DriverFormProvider } from "@/contexts/become-a-rider-form";
import { VendorFormProvider } from "@/contexts/become-a-vendor-form";
const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Cylia Website",
  description: "Cylia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppHeader />
         <DriverFormProvider> <VendorFormProvider>{children}</VendorFormProvider></DriverFormProvider>
        <AppFooter/>
      </body>
    </html>
  );
}
