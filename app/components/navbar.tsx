import Link from "next/link";

export default function navbar() {
  return (
    <nav className="bg-[#2B0C0C] text-white px-[5%] py-4 flex justify-between items-center shadow-md border-b border-[#D4A373]/20">
  <h1 className="text-xl font-bold text-[#D4A373]">Pork House</h1>

  <div className="flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/visit">Visit</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}