import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopEase - Premium Tech E-commerce",
  description:
    "Shop the latest tech gadgets and accessories at ShopEase. Fast delivery and premium customer service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <Navbar />
        <main className="flex-1 w-full mx-auto pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
