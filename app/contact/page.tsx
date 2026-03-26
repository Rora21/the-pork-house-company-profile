"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "success" : "error");
    if (res.ok) form.reset();
  }

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <section className="py-24 text-center bg-white">
        <h1 className="text-5xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-600">We&apos;d love to hear from you. Here&apos;s how you can reach us.</p>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>

            {status === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                Message sent! We&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-900 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-900 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-900 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
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
