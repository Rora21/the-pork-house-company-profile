"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type VariantType = {
  hidden: { opacity: number; y: number };
  visible: {
    opacity: number;
    y: number;
    transition: { duration: number };
  };
};

const fadeIn: VariantType = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const featuredProducts = [
  { name: "Pork Ribs", price: "6,000 RWF", image: "/images/pork rib.png" },
  { name: "Boneless / Iroti", price: "6,000 RWF", image: "/images/Iroti boneless.png" },
  { name: "Fresh Bacon", price: "6,500 RWF", image: "/images/Fresh Bacon.png" },
  { name: "Liver", price: "3,000 RWF", image: "/images/liver.png" },
];

const whyUs = [
  {
    title: "Farm-Fresh Quality",
    desc: "Every cut comes straight from Redwood Hogs Farm — no middlemen, no compromise.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    ),
  },
  {
    title: "Hygiene & Safety",
    desc: "Processed under strict hygiene standards to ensure clean, safe pork every time.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: "Direct from the Farm",
    desc: "We own the supply chain — from Redwood Hogs Farm to your table with full traceability.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
  },
  {
    title: "Reliable Supply",
    desc: "Consistent availability so restaurants, hotels, and households never run short.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
  },
];

const steps = [
  { num: "01", title: "We Source", desc: "Farm-raised pigs from Redwood Hogs Farm, bred for quality and health." },
  { num: "02", title: "We Process", desc: "Cleaned and cut under strict hygiene standards at our facility." },
  { num: "03", title: "We Deliver", desc: "Fresh to your door or ready for pickup — fast and dependable." },
];

export default function Home(): JSX.Element {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-pork.png"
            alt="Premium Pork"
            fill
            priority
            className="object-cover brightness-75 scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight" variants={fadeIn}>
            Fresh. Clean. Premium Pork.
          </motion.h1>
          <motion.p className="mt-4 text-lg md:text-xl text-gray-200" variants={fadeIn}>
            Delivering farm-to-table pork with unmatched quality and hygiene standards in Rwanda.
          </motion.p>
          <motion.div className="mt-8 flex flex-col sm:flex-row justify-center gap-4" variants={fadeIn}>
            <Link href="/products" className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg">
              View Products
            </Link>
            <Link href="/contact" className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold transition duration-300">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-sm font-semibold text-red-600 uppercase tracking-widest mb-2">Why The Pork House</p>
            <h2 className="text-4xl font-bold text-gray-900">Quality You Can Trust</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {whyUs.map((item) => (
              <motion.div key={item.title} variants={fadeIn} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-md transition">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-red-50 rounded-full mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-sm font-semibold text-red-600 uppercase tracking-widest mb-2">From Our Range</p>
            <h2 className="text-4xl font-bold text-gray-900">Featured Products</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.name} variants={fadeIn} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative h-52">
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  <p className="text-red-600 font-semibold mt-1">{product.price}</p>
                  <Link
                    href={`https://wa.me/250782767820?text=Hello, I want to order ${product.name}`}
                    target="_blank"
                    className="mt-4 block w-full bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-2 rounded-lg transition"
                  >
                    Order Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Link href="/products" className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
              See All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-900 py-24 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-2">The Process</p>
            <h2 className="text-4xl font-bold">Farm to Your Table</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {steps.map((step) => (
              <motion.div key={step.num} variants={fadeIn} className="flex flex-col items-center text-center">
                <span className="text-6xl font-black text-red-600 leading-none mb-4">{step.num}</span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-red-700 py-20 px-6 text-white text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 className="text-4xl font-extrabold mb-4" variants={fadeIn}>
            Ready to Order?
          </motion.h2>
          <motion.p className="text-lg text-red-100 mb-8" variants={fadeIn}>
            Contact us on WhatsApp or browse our full product range and place an order today.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={fadeIn}>
            <Link
              href="https://wa.me/250782767820"
              target="_blank"
              className="bg-white text-red-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition shadow-lg"
            >
              WhatsApp Us
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-red-700 px-8 py-3 rounded-lg font-bold transition"
            >
              View Products
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
