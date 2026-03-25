export default function VisitPage() {
  return (
    <section className="px-[5%] py-20 bg-[#FAF7F2] text-center">
      <h1 className="text-4xl font-bold text-[#5C1010] mb-6">
        Visit Our Farm
      </h1>

      <p className="max-w-xl mx-auto text-gray-700 mb-10">
        Experience Redwood Hogs Farm firsthand. Learn how we raise our pigs
        with care and hygiene.
      </p>

      <div className="bg-gradient-to-br from-[#5C1010] to-[#8B1A1A] text-white rounded-2xl p-10 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Book a Farm Visit
        </h2>

        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
          Book Now
        </button>
      </div>
    </section>
  );
}