"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center text-white text-center overflow-hidden">
        <motion.div
          className="z-10"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 className="text-6xl font-bold mb-4" variants={fadeIn}>
            The Pork House Company
          </motion.h1>
          <motion.p className="text-xl mb-8" variants={fadeIn}>
            Fresh, high-quality pork from our farm to your table.
          </motion.p>
          <motion.div className="flex justify-center gap-4" variants={fadeIn}>
            <Link href="/products" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              View Our Products
            </Link>
            <Link href="/contact" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
        <Image
          src="/images/pork-showcase.jpg" // Placeholder image
          alt="Pork Showcase"
          fill
          style={{objectFit:"cover"}}
          className="absolute inset-0 z-0 opacity-30"
        />
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mt-2">We are committed to providing the best pork products in Kigali.</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div className="bg-white p-8 rounded-lg shadow-lg text-center" variants={fadeIn}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Freshness Guaranteed</h3>
              <p className="text-gray-600">Our pork is sourced directly from Redwood Hogs Farm, ensuring maximum freshness and quality.</p>
            </motion.div>
            <motion.div className="bg-white p-8 rounded-lg shadow-lg text-center" variants={fadeIn}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Wide Variety</h3>
              <p className="text-gray-600">From bacon to ribs, we offer a wide range of pork products to suit your needs.</p>
            </motion.div>
            <motion.div className="bg-white p-8 rounded-lg shadow-lg text-center" variants={fadeIn}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Trusted Supplier</h3>
              <p className="text-gray-600">We are a trusted supplier for homes, restaurants, and businesses across Kigali.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}