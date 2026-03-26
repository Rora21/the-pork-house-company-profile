import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      <section className="relative h-96">
        <Image
          src="/images/hero-pork.png"
          alt="Redwood Hogs Farm"
          fill
          sizes="100vw"
          style={{objectFit:"cover"}}
          className="brightness-45 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white text-center shadow-lg">
            About The Pork House
          </h1>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">
              From Farm to Your Table
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              A Tradition of Quality
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The Pork House Ltd was born from a vision to deliver clean, farm-raised pigs directly to you. We bridge the gap between Redwood Hogs Farm and your table, ensuring unparalleled freshness and quality.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg mb-6">
                  To deliver the cleanest, freshest, and most consistent pork products, backed by reliable sourcing and exceptional service.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  To become Africa’s leading pork processing company, setting the standard for quality, safety, and reliability in the industry.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{width: 600, height: 400}}>
                <Image
                  src="/images/hero-pork.png"
                  alt="Our Butcher Shop"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{objectFit:"cover"}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {[
              "Cleanliness & Safety",
              "Quality & Consistency",
              "Value",
              "Trust & Integrity",
              "Community Impact",
            ].map((value) => (
              <div key={value} className="flex flex-col items-center">
                <div className="bg-white text-red-600 rounded-full p-4 mb-3 shadow-lg">
                  {/* Placeholder for icons */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}