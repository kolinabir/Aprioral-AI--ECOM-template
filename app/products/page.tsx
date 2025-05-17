import { getProducts } from "../../lib/api";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default async function ProductsPage() {
  const { products, total } = await getProducts({ limit: 20 });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center mb-6">
        <Link href="/" className="text-gray-500 hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        <span className="text-gray-800 font-medium">Products</span>
      </div>

      <h1 className="text-4xl font-bold mb-8">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow group">
              <div className="relative">
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
                <div className="absolute top-2 right-2 bg-gray-800/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                  {product.category}
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
    </div>
  );
}
