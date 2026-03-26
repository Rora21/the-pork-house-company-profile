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

export default function Home(): JSX.Element {
  return (
    <>
     <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/hero-pork.png"
      alt="Premium Pork"
      fill
      priority
      className="object-cover brightness-75 scale-105"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <motion.div
    className="relative z-10 text-center px-6 max-w-4xl"
    initial="hidden"
    animate="visible"
    variants={stagger}
  >
    <motion.h1
      className="text-4xl md:text-6xl font-bold leading-tight"
      variants={fadeIn}
    >
      Fresh. Clean. Premium Pork.
    </motion.h1>

    <motion.p
      className="mt-4 text-lg md:text-xl text-gray-200"
      variants={fadeIn}
    >
      Delivering farm-to-table pork with unmatched quality and hygiene standards in Rwanda.
    </motion.p>

    <motion.div
      className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
      variants={fadeIn}
    >
      {/* Primary Button */}
      <Link
        href="/products"
        className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
      >
        View Products
      </Link>

      {/* Secondary Button */}
      <Link
        href="/contact"
        className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold transition duration-300"
      >
        Contact Us
      </Link>
    </motion.div>
  </motion.div>

</section>
    </>
  );
}