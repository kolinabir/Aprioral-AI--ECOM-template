"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-8 py-4 relative z-20">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold text-primary">
          ShopEase
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="/products" className="hover:text-primary">
            All Products
          </Link>
          <Link href="/cart" className="hover:text-primary">
            Cart
          </Link>
          <Link href="/orders" className="hover:text-primary">
            Orders
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
        </div>
        <button
          className="md:hidden ml-2 p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <Button variant="outline" className="ml-4">
        Demo Login
      </Button>
      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden animate-fade-in z-30">
          <Link
            href="/products"
            className="py-2 w-full text-center hover:text-primary"
            onClick={() => setOpen(false)}
          >
            All Products
          </Link>
          <Link
            href="/cart"
            className="py-2 w-full text-center hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Cart
          </Link>
          <Link
            href="/orders"
            className="py-2 w-full text-center hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Orders
          </Link>
          <Link
            href="/about"
            className="py-2 w-full text-center hover:text-primary"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
