import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-50 text-white p-4 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          The Pork House
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-500 transition-colors">
            About Us
          </Link>
          <Link href="/products" className="hover:text-red-500 transition-colors">
            Products
          </Link>
          <Link href="/visit" className="hover:text-red-500 transition-colors">
            Visit Us
          </Link>
          <Link href="/contact" className="hover:text-red-500 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}