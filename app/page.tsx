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
{/* import Image from "next/image"; */}

{/* ABOUT */}
<section className="px-[5%] py-24 bg-gradient-to-br from-[#2B0C0C] via-[#4E1414] to-[#1A0707] text-white relative overflow-hidden">

  {/* Soft glow accents */}
  <div className="absolute -top-20 left-0 w-[300px] h-[300px] bg-[#D4A373]/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#D4A373]/10 rounded-full blur-2xl" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

    {/* IMAGE SIDE */}
    <div className="relative h-80 rounded-2xl overflow-hidden group shadow-xl">
      {/* <Image
        src="/images/pork-about.jpg"
        alt="Fresh pork from The Pork House"
        fill
        className="object-cover group-hover:scale-105 transition duration-500"
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Label */}
      <div className="absolute bottom-4 left-4 bg-[#D4A373] text-white text-xs px-4 py-1 rounded-full">
        100% Farm Fresh
      </div>
    </div>

    {/* TEXT SIDE */}
    <div>

      <h2 className="text-4xl font-bold mb-3">
        About{" "}
        <span className="text-[#D4A373]">
          The Pork House
        </span>
      </h2>

      <div className="w-16 h-1 bg-[#D4A373] mb-6 rounded" />

      <p className="text-white/80 leading-relaxed mb-5">
        The Pork House Ltd was created to bring clean, high-quality pork
        directly from trusted farms to your table. We eliminate the gap
        between farm and consumer by ensuring freshness, hygiene, and
        consistency in every product.
      </p>

      <p className="text-white/80 leading-relaxed mb-8">
        Whether supplying homes, restaurants, or supermarkets, we are
        committed to delivering pork you can trust — every single time.
      </p>

      {/* STATS */}
      <div className="flex gap-4 flex-wrap">
        {[
          { value: "100%", label: "Farm Sourced" },
          { value: "11+", label: "Products" },
          { value: "🌍", label: "Growing Vision" },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="bg-[#3A1010] border border-[#D4A373]/20 px-6 py-4 rounded-xl text-center flex-1 min-w-[120px]"
          >
            <div className="text-2xl font-extrabold text-[#D4A373]">
              {value}
            </div>
            <div className="text-xs text-white/70">{label}</div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
    </>
  );
}