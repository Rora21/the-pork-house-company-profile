import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#5C1010] text-white px-[5%] py-4 flex justify-between items-center shadow-md">
      
      {/* LOGO */}
      <h1 className="text-xl font-bold text-yellow-500">
        The Pork House
      </h1>

      {/* LINKS */}
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-yellow-400">Home</Link>
        <Link href="/about" className="hover:text-yellow-400">About</Link>
        <Link href="/products" className="hover:text-yellow-400">Products</Link>
        <Link href="/visit" className="hover:text-yellow-400">Visit</Link>
        <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
    </nav>
  );
}