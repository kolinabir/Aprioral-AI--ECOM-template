import Link from "next/link";
import { Button } from "../../components/ui/button";
import { products } from "../../lib/products";

export default function ProductsPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl border relative"
          >
            {product.featured && (
              <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">Featured</span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover rounded mb-4 border"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <div className="text-primary font-bold mb-4 text-lg">${product.price}</div>
            <Link href={`/products/${product.id}`}>
              <Button variant="outline">View Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
