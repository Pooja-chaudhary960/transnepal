'use client'
import { useState, ChangeEvent, FormEvent } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="bg-gray-50 ">
      <div className="mb-10">
        <img
          src="/images/contact.avif"
          alt="contact image"
          className="w-full h-60 md:h-90 object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto space-y-8">

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 mb-6 md:space-y-0">

        <div className="bg-white shadow-lg rounded-lg p-8 flex-1 text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full max-w-md bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            {status && (
              <p
                className={`mt-2 text-center font-semibold ${status.includes("Thank") ? "text-green-600" : "text-red-600"
                  }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Right: Map */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-2 flex-1 h-[500px]">
          <iframe
            title="TransNepal Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7143.557738814881!2d87.273946!3d26.462856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef74147f7fa62d%3A0x631d4e7be0d690c2!2sTrans%20Nepal%20Freight%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1713781415691!5m2!1sen!2snp"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </div >
  );
}
