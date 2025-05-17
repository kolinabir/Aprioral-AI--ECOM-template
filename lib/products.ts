export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
  category: string;
  rating: number;
  stock: number;
  brand: string;
  specs: Record<string, string>;
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
    category: "Audio",
    rating: 4.7,
    stock: 12,
    brand: "SoundMax",
    specs: {
      "Battery Life": "30 hours",
      Bluetooth: "5.2",
      Weight: "250g",
      Color: "Black",
    },
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
    category: "Wearables",
    rating: 4.5,
    stock: 8,
    brand: "TimeTech",
    specs: {
      Display: "1.5'' AMOLED",
      "Water Resistant": "Yes",
      Battery: "7 days",
      Color: "Silver",
    },
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
    category: "Audio",
    rating: 4.3,
    stock: 20,
    brand: "BassBoom",
    specs: {
      "Battery Life": "12 hours",
      Waterproof: "IPX7",
      Weight: "500g",
      Color: "Blue",
    },
  },
  {
    id: 4,
    name: "VR Headset",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    description:
      "Experience immersive virtual reality with this comfortable VR headset.",
    category: "VR",
    rating: 4.6,
    stock: 5,
    brand: "VisionX",
    specs: {
      Resolution: "2160x1200",
      "Field of View": "110°",
      Weight: "600g",
      Color: "White",
    },
  },
  {
    id: 5,
    name: "Fitness Tracker",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description:
      "Monitor your health and activity with this sleek fitness tracker.",
    category: "Wearables",
    rating: 4.2,
    stock: 15,
    brand: "FitPulse",
    specs: {
      Battery: "10 days",
      "Water Resistant": "Yes",
      Weight: "30g",
      Color: "Black",
    },
  },
  {
    id: 6,
    name: "Portable Charger",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1512446733611-9099a758e082?auto=format&fit=crop&w=400&q=80",
    description:
      "Charge your devices on the go with this high-capacity portable charger.",
    category: "Accessories",
    rating: 4.4,
    stock: 30,
    brand: "PowerGo",
    specs: {
      Capacity: "10000mAh",
      Output: "18W",
      Weight: "180g",
      Color: "White",
    },
  },
];

export function getProductById(id: number) {
  return products.find((p) => p.id === id);
}
