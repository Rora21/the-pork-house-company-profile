import Link from "next/link";

export default function Home() {
  return (
    <>
     <section className="min-h-[90vh] bg-gradient-to-br from-[#3E0B0B] via-[#5C1010] to-[#8B1A1A] flex items-center px-[5%] text-white">
  <div className="max-w-2xl">
    
    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
      Premium Pork <span className="text-yellow-400">From Farm to Table</span>
    </h1>

    <p className="text-lg mb-8 text-gray-200">
      Clean, fresh, and trusted pork sourced directly from Redwood Hogs Farm.
      Serving homes, restaurants, and businesses across Kigali.
    </p>

    <div className="flex gap-4">
      <a href="/products" className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold">
        View Products
      </a>
      <a href="/contact" className="border border-white px-6 py-3 rounded-lg">
        Order Now
      </a>
    </div>

  </div>
</section>
    </>
  );
}