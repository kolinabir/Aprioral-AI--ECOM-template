import { Button } from "../../components/ui/button";

const orderItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99,
    quantity: 1,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 59,
    quantity: 2,
  },
];

const total = orderItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

export default function OrdersPage() {
  return (
    <div className="py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Order Summary</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        {orderItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span className="font-bold">${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between mt-4 border-t pt-4">
          <span className="font-bold">Total</span>
          <span className="font-bold text-primary">${total}</span>
        </div>
      </div>
      <form className="bg-white rounded-lg shadow p-6 space-y-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="City"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border rounded px-3 py-2"
          required
        />
      </form>
      <Button className="w-full" size="lg">
        Place Order (Cash on Delivery)
      </Button>
    </div>
  );
}
