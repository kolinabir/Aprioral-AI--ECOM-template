import { getProduct, getProducts } from "../../../lib/api";
import { Button } from "../../../components/ui/button";
import { ChevronRight, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { products } = await getProducts({ limit: 20 });

  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const product = await getProduct(params.id);

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-6">
          <Link href="/" className="text-gray-500 hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <Link href="/products" className="text-gray-500 hover:text-primary">
            Products
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          <span className="text-gray-800 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square bg-white rounded-xl overflow-hidden border border-gray-200">
            <img
              src={
                product.images?.[0]?.url ||
                "https://random-image-pepebigotes.vercel.app/api/random-image"
              }
              alt={product.images?.[0]?.alt || product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-current" : ""
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} rating
              </span>
            </div>

            <div className="text-2xl font-bold text-primary mb-6">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <div className="text-sm font-medium text-gray-500 mb-2">
                Quantity
              </div>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4 font-medium">1</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Buy Now
              </Button>
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Category:</span>
                <span className="font-medium">{product.category}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">In Stock:</span>
                <span className="font-medium">{product.stock} units</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}
