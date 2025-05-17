import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { products, getProductById } from "../../../lib/products";

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id.toString() }));
}

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return (
    <span className="text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={i}
          className="inline w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="inline w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"
            fill="url(#half)"
          />
        </svg>
      )}
      <span className="ml-2 text-gray-500 text-sm align-middle">
        {rating.toFixed(1)}
      </span>
    </span>
  );
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
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 border">
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
        <div className="flex-1 w-full">
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-primary font-bold text-2xl">
              ${product.price}
            </span>
            <span className="text-gray-500 text-sm">
              In stock: {product.stock}
            </span>
          </div>
          <div className="mb-2">
            <RatingStars rating={product.rating} />
          </div>
          <div className="mb-2 text-gray-600">
            Category:{" "}
            <span className="font-medium text-gray-800">
              {product.category}
            </span>
          </div>
          <div className="mb-4 text-gray-600">
            Brand:{" "}
            <span className="font-medium text-gray-800">{product.brand}</span>
          </div>
          <p className="text-gray-700 mb-8 text-lg">{product.description}</p>
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Specifications</h2>
            <table className="w-full text-sm border rounded overflow-hidden">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key} className="border-b last:border-b-0">
                    <td className="py-2 px-3 font-medium text-gray-600 bg-gray-50 w-1/3">
                      {key}
                    </td>
                    <td className="py-2 px-3 text-gray-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button size="lg" className="w-full md:w-auto">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
