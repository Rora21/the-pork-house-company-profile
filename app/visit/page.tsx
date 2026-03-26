import Image from "next/image";

export default function VisitPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="relative h-96">
        <Image
          src="/images/hero-pork.png"
          alt="Redwood Hogs Farm Gate"
          fill
          sizes="100vw"
          style={{objectFit:"cover"}}
          className="brightness-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center shadow-lg">
            Visit Us at Redwood Hogs Farm
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Location</h2>
            <p className="text-lg text-gray-600 mb-4">
              Come and see how we raise our pigs with the highest standards of care and hygiene. We are located at:
            </p>
            <address className="text-lg text-gray-800 font-semibold not-italic">
              Redwood Hogs Farm<br />
              Kigali, Rwanda
            </address>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Operating Hours</h3>
              <p className="text-lg text-gray-600">
                <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM<br />
                <strong>Saturday:</strong> 10:00 AM - 3:00 PM<br />
                <strong>Sunday:</strong> Closed
              </p>
            </div>
          </div>
          <div className="h-96 bg-gray-300 rounded-lg shadow-lg">
            {/* Placeholder for map */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=-1.948214,30.1223702&z=17&output=embed"
                  width="100%"
                 height="100%"
             style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                     ></iframe>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}