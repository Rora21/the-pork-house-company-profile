export default function ContactPage() {
  return (
    <section className="px-[5%] py-20 bg-white text-center">
      <h1 className="text-4xl font-bold text-[#5C1010] mb-6">
        Contact Us
      </h1>

      <p className="text-gray-700 mb-10">
        Reach out to order or partner with us.
      </p>

      <div className="max-w-md mx-auto space-y-4 text-left">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded-lg"
        ></textarea>

        <button className="w-full bg-[#5C1010] text-white py-3 rounded-lg font-semibold">
          Send Message
        </button>
      </div>
    </section>
  );
}