export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center py-6 mt-12 border-t">
      <div className="text-gray-500">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
