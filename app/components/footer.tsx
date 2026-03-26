"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold mb-4">The Pork House</h3>
            <p className="text-gray-400 leading-relaxed">
              Fresh, clean, and high-quality pork delivered from farm to table across Rwanda.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-red-500 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-500 transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-red-500 transition">Products</Link></li>
              <li><Link href="/visit" className="hover:text-red-500 transition">Visit Us</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

            <div className="flex items-center gap-4">

              {/* FACEBOOK */}
              <a
                href="https://web.facebook.com/p/The-Pork-House-61579315975916/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/the_pork_house_kigali/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              {/* WHATSAPP (optional but powerful for business) */}
              <a
                href="https://wa.me/2507XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

            <p className="text-gray-400 mt-6 text-sm">
              Kigali, Rwanda <br />
              0782767820<br />
              0788523529
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} The Pork House Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}