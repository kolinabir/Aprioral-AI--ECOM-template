import Link from "next/link";
import { Button } from "../../components/ui/button";
import { products } from "../../lib/products";

const cartItems = [
  { id: 1, quantity: 1 },
  { id: 3, quantity: 2 },
];

const cartDetails = cartItems.map((item) => {
  const product = products.find((p) => p.id === item.id)!;
  return { ...product, quantity: item.quantity };
});

const total = cartDetails.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

export default function CartPage() {
  return (
    <div className="py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      {cartDetails.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="space-y-6">
          {cartDetails.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white rounded-xl shadow p-4 border"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded border"
              />
              <div className="flex-1">
                <div className="font-medium text-lg">{item.name}</div>
                <div className="text-gray-500">Qty: {item.quantity}</div>
              </div>
              <div className="font-bold text-primary text-lg">
                ${item.price * item.quantity}
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-8 bg-gray-50 rounded-xl p-4 border">
            <div className="text-xl font-bold">Total:</div>
            <div className="text-2xl font-extrabold text-primary">${total}</div>
            <Link href="/orders">
              <Button size="lg">Proceed to Order</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
