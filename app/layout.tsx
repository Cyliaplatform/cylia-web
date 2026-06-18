import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AppHeader from "@/components/layout/header";
import { AppFooter } from "@/components/layout/footer";
import { DriverFormProvider } from "@/contexts/become-a-rider-form";
import { VendorFormProvider } from "@/contexts/become-a-vendor-form";
import { QueryProvider } from "@/components/provider/QueryProvider";
import { Toaster } from "react-hot-toast";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cylia Website",
  description: "Cylia",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <AppHeader />
        <DriverFormProvider>
          <VendorFormProvider>
            <QueryProvider>{children}</QueryProvider>
            <Toaster />
          </VendorFormProvider>
        </DriverFormProvider>
        <AppFooter />
      </body>
    </html>
  );
}
