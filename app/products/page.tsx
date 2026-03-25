const products = [
  { name: "Pork Ribs", price: "6000 RWF" },
  { name: "Pork Chops", price: "7000 RWF" },
  { name: "Pork Tenderloin", price: "7500 RWF" },
  { name: "Bornless / Iroti", price: "6000 RWF" },
  { name: "Imvange", price: "5500 RWF" },
  { name: "Fresh Bacon", price: "6500 RWF" },
  { name: "Liver", price: "3000 RWF" },
  { name: "Heart", price: "3000 RWF" },
  { name: "Lungs", price: "3000 RWF" },
  { name: "Intestine", price: "2000 RWF" },
  { name: "Skin", price: "2000 RWF" },
];

export default function ProductsPage() {
  return (
    <section className="px-[5%] py-20 bg-[#FAF7F2]">
      
      <h1 className="text-4xl font-bold text-center text-[#5C1010] mb-12">
        Our Products
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {products.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            
            {/* IMAGE AREA */}
            <div className="h-40 bg-gradient-to-br from-[#5C1010] to-[#8B1A1A] flex items-center justify-center text-white text-4xl">
              🥩
            </div>

            {/* CONTENT */}
            <div className="p-5">
              
              <h3 className="font-bold text-lg text-[#5C1010] mb-2">
                {item.name}
              </h3>

              <p className="text-yellow-600 font-semibold mb-4">
                {item.price}
              </p>

              <button className="w-full bg-[#5C1010] text-white py-2 rounded-lg hover:bg-[#3E0B0B] transition">
                Order Now
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}