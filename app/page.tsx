import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[90vh] bg-gradient-to-br from-primary via-[#2F8F75] to-[#1A5C4A] flex items-center px-[5%]">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Clean, Fresh Pork —{" "}
            <span className="text-gold">From Farm to Your Table</span>
          </h1>

          <p className="text-lg opacity-90 mb-8">
            We supply high-quality pork directly from farm to homes,
            restaurants, and supermarkets across Kigali.
          </p>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-gold text-white px-6 py-3 rounded-lg font-semibold"
            >
              Order Now
            </Link>

            <Link
              href="/products"
              className="border border-white px-6 py-3 rounded-lg font-semibold"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}