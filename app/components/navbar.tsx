"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-white hover:text-red-500 transition"
        >
          The Pork House
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-red-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-500 transition">
            About Us
          </Link>
          <Link href="/products" className="hover:text-red-500 transition">
            Products
          </Link>
          <Link href="/visit" className="hover:text-red-500 transition">
            Visit Us
          </Link>
          <Link href="/contact" className="hover:text-red-500 transition">
            Contact
          </Link>
        </div>

        {/* CTA BUTTON */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition shadow-md"
        >
          Order Now
        </Link>
      </div>
    </nav>
  );
}