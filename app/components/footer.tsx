import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Pork House</h3>
            <p className="text-gray-400">Fresh, high-quality pork from our farm to your table.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-red-500 transition-colors">Products</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media links here */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Pork House Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}