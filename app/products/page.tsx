const products = [
  { name: "Pork Ribs", price: "6000 RWF" },
  { name: "Pork Chops", price: "7000 RWF" },
  { name: "Pork Tenderloin", price: "7500 RWF" },
  { name: "Boneless / Iroti", price: "6000 RWF" },
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
      
      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-[#5C1010]">
          Our Premium Pork Products
        </h1>
        <p className="text-gray-600 mt-3">
          Clean, fresh, and sourced directly from Redwood Hogs Farm
        </p>
        <div className="w-20 h-1 bg-[#E6B800] mx-auto mt-4 rounded"></div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {products.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden border"
          >
            
            {/* IMAGE / TOP SECTION */}
            <div className="h-44 bg-gradient-to-br from-[#3E0B0B] to-[#5C1010] flex items-center justify-center text-white text-5xl relative">
              🥩

              {/* GOLD BADGE */}
              <span className="absolute top-3 left-3 bg-[#E6B800] text-white text-xs px-3 py-1 rounded-full shadow">
                Fresh
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              
              <h3 className="font-bold text-lg text-[#5C1010] mb-1">
                {item.name}
              </h3>

              <p className="text-[#E6B800] font-extrabold text-lg mb-4">
                {item.price}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-2">
                
                {/* WhatsApp Order */}
                <a
                  href={`https://wa.me/250782767820?text=Hello, I want to order ${item.name}`}
                  target="_blank"
                  className="flex-1 text-center bg-[#E6B800] text-white py-2 rounded-lg font-semibold hover:bg-[#c99f00] transition"
                >
                  Order
                </a>

                {/* View (optional future page) */}
                <button className="flex-1 border border-[#5C1010] text-[#5C1010] py-2 rounded-lg hover:bg-[#5C1010] hover:text-white transition">
                  View
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}