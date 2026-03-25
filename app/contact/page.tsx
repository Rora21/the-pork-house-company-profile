export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-24 text-center bg-white">
        <h1 className="text-5xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-600">We'd love to hear from you. Here's how you can reach us.</p>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border rounded-lg" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Address:</strong> KK 17 Ave, Kigali, Rwanda
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Phone:</strong> 0782767820 / 0788523529
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Email:</strong> sales@theporkhouse.rw
            </p>
            <div className="mt-8 h-64 bg-gray-300 rounded-lg">
              {/* Placeholder for map */}
              <div className="flex items-center justify-center h-full text-gray-500">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}