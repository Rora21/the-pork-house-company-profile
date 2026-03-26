import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "Pork Ribs", price: "6000 RWF", image: "/images/pork rib.png" },
  { name: "Pork Chops", price: "7000 RWF", image: "/images/hero-pork.png" },
  { name: "Pork Tenderloin", price: "7500 RWF", image: "/images/hero-pork.png" },
  { name: "Boneless / Iroti", price: "6000 RWF", image: "/images/Iroti boneless.png" },
  { name: "Imvange", price: "5500 RWF", image: "/images/Invanjye.png" },
  { name: "Fresh Bacon", price: "6500 RWF", image: "/images/Fresh Bacon.png" },
  { name: "Liver", price: "3000 RWF", image: "/images/liver.png" },
  { name: "Heart", price: "3000 RWF", image: "/images/heart.png" },
  { name: "Lungs", price: "3000 RWF", image: "/images/lungs.png" },
  { name: "Intestine", price: "2000 RWF", image: "/images/intestine.png" },
  { name: "Skin", price: "2000 RWF", image: "/images/skin.png" },
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-24 text-center bg-white">
        <h1 className="text-5xl font-extrabold text-gray-900">Our Premium Pork Products</h1>
        <p className="mt-4 text-xl text-gray-600">Freshness and quality, delivered.</p>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{objectFit:"cover"}}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="mt-2 text-lg font-semibold text-red-600">{product.price}</p>
                <Link href={`https://wa.me/250782767820?text=Hello, I want to order ${product.name}`}
                  target="_blank"
                  className="mt-4 block w-full bg-red-600 text-white text-center font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}