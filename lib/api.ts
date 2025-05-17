/**
 * API client for the demo store API
 */

export type ProductImage = {
  url: string;
  alt: string;
  isPrimary: boolean;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  category: string;
  images: ProductImage[];
  rating: number;
};

export type ProductsResponse = {
  products: Product[];
  count: number;
  total: number;
};

/**
 * Fetch products from the API
 */
export async function getProducts({
  limit = 10,
  category,
}: {
  limit?: number;
  category?: string;
} = {}): Promise<ProductsResponse> {
  const params = new URLSearchParams();

  if (limit) {
    params.append("limit", limit.toString());
  }

  if (category) {
    params.append("category", category);
  }

  const queryString = params.toString() ? `?${params}` : "";
  const response = await fetch(
    `https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/products${queryString}`
  );

  if (!response.ok) {
    throw new Error(`Error fetching products: ${response.status}`);
  }

  return response.json();
}

/**
 * Get a single product by ID
 */
export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(
    `https://nodejs-server-mongodb-xx12x3-toystore.vercel.app/v2/product/${id}`
  );

  if (!response.ok) {
    throw new Error(`Error fetching product: ${response.status}`);
  }

  return response.json();
}
