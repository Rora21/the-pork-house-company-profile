export default function AboutPage() {
  return (
    <section className="px-[5%] py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#5C1010] mb-6">
          About The Pork House Ltd
        </h1>

        <div className="w-20 h-1 bg-yellow-500 mb-10 rounded"></div>

        {/* OVERVIEW */}
        <p className="text-gray-700 leading-relaxed mb-6">
          The Pork House Ltd was born out of Redwood Hogs Farm’s vision to
          deliver its clean-raised pigs directly to the final consumer.
          We bridge the gap between farm and market by ensuring pork is delivered
          with the highest standards of freshness, cleanliness, and quality.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          From supplying family homes to partnering with hotels, restaurants,
          and supermarkets, we are committed to building trust through reliable
          sourcing, transparent operations, and consistent service.
        </p>

        {/* VISION & MISSION */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-[#5C1010] mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To become Africa’s leading pork processing company, delivering
              world-class pork products that set the standard for quality,
              safety, and reliability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-[#5C1010] mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To deliver the cleanest, freshest, and most consistent pork
              products while ensuring reliable sourcing, excellent service,
              and lasting value.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div>
          <h2 className="text-2xl font-bold text-[#5C1010] mb-6">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Cleanliness & Safety",
              "Quality & Consistency",
              "Value",
              "Trust & Integrity",
              "Community Impact",
            ].map((value) => (
              <div
                key={value}
                className="bg-[#FFF8E7] p-5 rounded-lg border-l-4 border-yellow-500"
              >
                <p className="font-semibold text-[#5C1010]">{value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}