import Link from "next/link";
import { Button } from "../../components/ui/button";

const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    quantity: 1,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    quantity: 2,
  },
];

const total = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

export default function CartPage() {
  return (
    <div className="py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white rounded-lg shadow p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
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
          <div className="flex justify-between items-center mt-8">
            <div className="text-xl font-bold">Total: ${total}</div>
            <Link href="/orders">
              <Button size="lg">Proceed to Order</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
