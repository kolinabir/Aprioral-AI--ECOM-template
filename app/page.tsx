import { Button } from "../components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Star,
  TrendingUp,
  Heart,
  ShoppingBag,
  CircleDollarSign,
} from "lucide-react";
import { getProducts } from "../lib/api";

const categories = [
  { name: "Audio", icon: "🎧", count: 12 },
  { name: "Wearables", icon: "⌚", count: 8 },
  { name: "Accessories", icon: "🔌", count: 15 },
  { name: "VR", icon: "🥽", count: 4 },
];

export default async function Home() {
  // Fetch featured products from the API
  const { products } = await getProducts({ limit: 8 });

  // For featured products, we'll take the first 4 items
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-20 bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-primary/10 px-4 py-1 rounded-full text-primary text-sm font-medium mb-6 animate-pulse">
                🔥 Summer Sale | Up to 40% Off
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-[1.1]">
                Next-Gen Tech <br className="hidden md:block" />
                <span className="text-primary">For Everyone</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Discover premium gadgets with cutting-edge technology that
                transform your everyday experience.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="text-base font-medium shadow-lg rounded-full px-8"
                  >
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/deals">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base font-medium rounded-full px-8 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                  >
                    View Deals
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start mt-12 space-x-8">
                <div className="flex items-center">
                  <ShoppingBag className="h-5 w-5 text-primary mr-2" />
                  <span className="text-white text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center">
                  <CircleDollarSign className="h-5 w-5 text-primary mr-2" />
                  <span className="text-white text-sm">Money Back</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-primary mr-2" />
                  <span className="text-white text-sm">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?auto=format&fit=crop&w=800&q=80"
                    alt="Premium Electronics"
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold">
                  40% OFF
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 absolute -bottom-2 -left-2 w-64">
                  <h3 className="text-white font-medium">New Arrival</h3>
                  <p className="text-gray-300 text-sm">
                    Ultra HD Premium Headphones
                  </p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-primary font-bold">$149.99</span>
                    <s className="text-gray-400 text-sm">$249.99</s>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <Link
            href="/categories"
            className="text-primary hover:underline flex items-center"
          >
            All Categories <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              href={`/category/${category.name.toLowerCase()}`}
              key={category.name}
            >
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                <div className="bg-gray-50 p-6 text-center">
                  <span className="text-5xl mb-3 inline-block">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.count} products
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link
            href="/products"
            className="text-primary hover:underline flex items-center"
          >
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow group">
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-md">
                    Featured
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={
                        product.images?.[0]?.url ||
                        "https://random-image-pepebigotes.vercel.app/api/random-image"
                      }
                      alt={product.images?.[0]?.alt || product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center mb-1">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(product.rating) ? "fill-current" : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      {product.rating}
                    </span>
                  </div>

                  <h3 className="font-medium text-gray-800 group-hover:text-primary transition-colors mb-1">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>

                    <Button variant="outline" size="sm" className="rounded-lg">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits/USP Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Shop With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Selection</h3>
              <p className="text-gray-600">
                Carefully curated products from top brands ensuring quality and
                performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CircleDollarSign className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing with regular deals and discounts on our
                entire catalog.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Dedicated support team and hassle-free returns for a seamless
                shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest product announcements
              and exclusive offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-full flex-1"
              />
              <Button className="rounded-full">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Input component used for the newsletter
const Input = ({ className, ...props }) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      {...props}
    />
  );
};
