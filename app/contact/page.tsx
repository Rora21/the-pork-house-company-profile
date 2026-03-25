export default function ContactPage() {
  return (
    <section className="px-[5%] py-20 bg-[#FAF7F2]">
      
      <h1 className="text-4xl font-bold text-center text-[#5C1010] mb-12">
        Get In Touch
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="bg-gradient-to-br from-[#3E0B0B] to-[#5C1010] text-white p-8 rounded-2xl shadow-lg">
          
          <h2 className="text-2xl font-bold mb-4 text-[#E6B800]">
            Contact Information
          </h2>

          <p className="mb-3">📍 KK 17 Ave, Kigali</p>
          <p className="mb-3">📞 0782767820 / 0788523529</p>
          <p className="mb-6">✉️ sales@theporkhouse.rw</p>

          <a
            href="https://wa.me/250782767820"
            target="_blank"
            className="bg-[#E6B800] px-5 py-3 rounded-lg font-semibold inline-block"
          >
            Chat on WhatsApp
          </a>

        </div>

        {/* RIGHT */}
        <div className="bg-white text-black p-8 rounded-2xl shadow-md space-y-4">
          <input className="w-full border p-3 rounded-lg" placeholder="Your Name" />
          <input className="w-full border text-black p-3 rounded-lg" placeholder="Email" />
          <textarea className="w-full border text-black p-3 rounded-lg" placeholder="Message"></textarea>

          <button className="w-full bg-[#5C1010] text-white py-3 rounded-lg font-semibold hover:bg-[#3E0B0B]">
            Send Message
          </button>
        </div>

      </div>
    </section>
  );
}