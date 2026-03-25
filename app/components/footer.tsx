export default function Footer() {
  return (
    <footer className="bg-[#3E0B0B] text-white py-10 px-[5%] mt-20">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-yellow-500 font-bold text-lg">
            The Pork House
          </h2>
          <p className="text-sm mt-2 text-gray-300">
            Clean, Fresh Pork — From Farm to Your Table.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Products</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Kigali, Rwanda</p>
          <p>0782767820</p>
        </div>

      </div>

      <p className="text-center text-sm mt-10 text-gray-400">
        © 2026 The Pork House Ltd. All rights reserved.
      </p>
    </footer>
  );
}