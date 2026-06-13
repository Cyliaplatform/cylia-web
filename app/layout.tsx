import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AppHeader from "@/components/layout/header";
import AppFooter from "@/components/layout/footer";

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
        {children}
      </body>
    </html>
  );
}
