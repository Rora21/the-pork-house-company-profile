import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[90vh] bg-gradient-to-br from-[#4E1414] via-[#7A1E1E] to-[#2B0C0C] flex items-center px-[5%] relative overflow-hidden">

  {/* Soft glow */}
  <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#D4A373]/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4A373]/10 rounded-full blur-2xl" />

  <div className="max-w-2xl text-white relative z-10">

    <h1 className="text-5xl font-extrabold leading-tight mb-6">
      Fresh Premium Pork —{" "}
      <span className="text-[#D4A373]">
        Clean. Trusted. Delivered.
      </span>
    </h1>

    <p className="text-lg text-white/80 mb-8 max-w-lg">
      Experience high-quality pork sourced directly from trusted farms,
      handled with care, and delivered fresh across Kigali.
    </p>

    <div className="flex gap-4">
      <button className="bg-[#D4A373] text-white px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition">
        Order Now
      </button>

      <button className="border border-white/70 px-7 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
        View Products
      </button>
    </div>

  </div>
</section>
    </>
  );
}