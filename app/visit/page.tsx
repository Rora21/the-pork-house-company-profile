export default function VisitPage() {
  return (
    <section className="px-[5%] py-20 bg-[#FAF7F2] text-center">
      
      <h1 className="text-4xl font-bold text-[#5C1010] mb-6">
        Visit Redwood Hogs Farm
      </h1>

      <p className="max-w-xl mx-auto text-gray-600 mb-10">
        Experience how our pigs are raised with the highest standards of hygiene and care.
      </p>

      <div className="bg-gradient-to-br from-[#3E0B0B] to-[#5C1010] text-white rounded-2xl p-10 max-w-xl mx-auto shadow-lg">
        
        <h2 className="text-2xl font-semibold mb-4">
          Book a Farm Visit
        </h2>

        <p className="text-gray-200 mb-6">
          Contact us to schedule your visit and learn more about our farm operations.
        </p>

        <a
          href="https://wa.me/250782767820"
          target="_blank"
          className="bg-[#E6B800] px-6 py-3 rounded-lg font-semibold inline-block"
        >
          Book via WhatsApp
        </a>

      </div>
    </section>
  );
}