export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
    featured: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description:
      "Track your fitness, receive notifications, and stay connected on the go.",
    featured: true,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description:
      "Portable Bluetooth speaker with deep bass and 12-hour playtime.",
    featured: true,
  },
  {
    id: 4,
    name: "VR Headset",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    description:
      "Experience immersive virtual reality with this comfortable VR headset.",
  },
  {
    id: 5,
    name: "Fitness Tracker",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description:
      "Monitor your health and activity with this sleek fitness tracker.",
  },
  {
    id: 6,
    name: "Portable Charger",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1512446733611-9099a758e082?auto=format&fit=crop&w=400&q=80",
    description:
      "Charge your devices on the go with this high-capacity portable charger.",
  },
];

export function getProductById(id: number) {
  return products.find((p) => p.id === id);
}
