"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, User, Search, X, ShoppingBag } from "lucide-react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Simulating cart count from a data source
  useEffect(() => {
    // In a real app, this would come from your cart state/context
    setCartCount(3);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80",
    },
  ];

  return (
    <>
      <nav
        className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md py-3" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary mr-8">
                ShopEase
              </Link>
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Products
                </Link>
                <Link
                  href="/categories"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Categories
                </Link>
                <Link
                  href="/deals"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  Deals
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  About
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {cartCount}
                  </Badge>
                )}
              </button>

              <Link href="/account">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  aria-label="Account"
                >
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              <Button variant="outline" className="hidden md:flex">
                Sign In
              </Button>

              <button
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white shadow-lg border-t">
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
              <div className="mb-4 mt-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300"
                  />
                </div>
              </div>

              <Link
                href="/products"
                className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                Products
              </Link>

              <Link
                href="/categories"
                className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                Categories
              </Link>

              <Link
                href="/deals"
                className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                Deals
              </Link>

              <Link
                href="/about"
                className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                About
              </Link>

              <div className="pt-4 pb-2">
                <Button className="w-full">Sign In</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl transition-transform duration-300 overflow-auto ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
            <h2 className="text-lg font-bold flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" /> Your Cart ({cartCount})
            </h2>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setIsCartOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-4">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Button onClick={() => setIsCartOpen(false)}>
                  Start Shopping
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 border-b pb-4"
                    >
                      <div className="h-20 w-20 bg-gray-100 rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-sm">
                          Qty: {item.quantity}
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-primary font-bold">
                            ${item.price.toFixed(2)}
                          </span>
                          <button className="text-sm text-gray-500 hover:text-red-500">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">$529.97</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t mt-2">
                    <span className="text-gray-800 font-medium">Total</span>
                    <span className="font-bold text-lg">$529.97</span>
                  </div>
                </div>

                <div className="mt-6 grid gap-2">
                  <Link href="/checkout">
                    <Button className="w-full">Checkout</Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
