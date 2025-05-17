import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { products, getProductById } from "../../../lib/products";

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id.toString() }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(Number(params.id));
  if (!product)
    return <div className="py-12 text-center">Product not found.</div>;
  return (
    <div className="py-12 max-w-3xl mx-auto">
      <Link
        href="/products"
        className="text-primary hover:underline mb-4 inline-block"
      >
        &larr; Back to Products
      </Link>
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-56 h-56 object-cover rounded-xl border mb-4 shadow"
          />
          {product.featured && (
            <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <div className="text-primary font-bold text-2xl mb-4">
            ${product.price}
          </div>
          <p className="text-gray-600 mb-8 text-lg">{product.description}</p>
          <Button size="lg" className="w-full md:w-auto">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
