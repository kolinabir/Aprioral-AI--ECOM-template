import { Button } from "../components/ui/button";
import Link from "next/link";
import { products } from "../lib/products";

const featuredProducts = products.filter((p) => p.featured);

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-br from-primary/20 to-white rounded-2xl shadow-lg relative overflow-hidden flex flex-col items-center justify-center min-h-[350px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10" />
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to ShopEase
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto drop-shadow">
          Your one-stop shop for the latest tech gadgets and accessories.
        </p>
        <Link href="/products">
          <Button size="lg" className="shadow-lg">
            Shop All Products
          </Button>
        </Link>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border transition-transform hover:scale-105 hover:shadow-2xl relative"
            >
              <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                Featured
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded mb-4 border"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <div className="text-primary font-bold mb-4 text-lg">
                ${product.price}
              </div>
              <Link href={`/products/${product.id}`}>
                <Button variant="outline">View Details</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">About ShopEase</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ShopEase is a demo e-commerce platform built with Next.js, Shadcn UI,
          and Tailwind CSS. Browse our curated selection of tech gadgets, add
          items to your cart, and place orders with ease. This is a static demo
          and does not process real payments.
        </p>
      </section>
    </div>
  );
}
