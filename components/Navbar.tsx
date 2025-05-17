import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-8 py-4">
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
      </div>
      <Button variant="outline" className="ml-4">
        Demo Login
      </Button>
    </nav>
  );
}
