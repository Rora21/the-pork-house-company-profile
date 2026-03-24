import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-[5%] py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-primary">Pork House</h1>

      <div className="flex gap-6 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/visit">Visit</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}