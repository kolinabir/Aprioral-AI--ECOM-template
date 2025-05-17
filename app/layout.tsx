import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopEase - E-commerce Demo",
  description:
    "A static e-commerce demo built with Next.js, Shadcn UI, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen flex flex-col"}>
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
