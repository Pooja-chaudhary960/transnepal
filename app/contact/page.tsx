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
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Form and Contact Info in a row */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

          {/* Contact Form Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex-1 text-center">
            <h2 className="text-3xl font-bold mb-6 text-indigo-700">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full max-w-md bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
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

          {/* Contact Info Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex-1 text-left">
            <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Contact Information</h3>
            <div className="space-y-4 text-gray-700 text-base">

              <div>
                <h4 className="text-xl font-semibold text-indigo-700 mb-2">Our Address</h4>
                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-indigo-600" />
                  TransNepal Tower, Piyush Marg, Biratnagar-05, Nepal
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-indigo-700 mb-2 mt-4">Contact</h4>
                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-indigo-600" />
                  Telephone: +977 21 501441
                </p>
                <p className="flex items-center gap-3">
                  <FaFax className="text-indigo-600" />
                  Fax: +977 21 501470
                </p>
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-indigo-600" />
                  transnepal_brt@transnepaldryport.com
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-indigo-700 mb-2 mt-4">Working Hours</h4>
                <p className="flex items-center gap-3">
                  <FaClock className="text-indigo-600" />
                  Weekdays: 10:00 AM - 6:00 PM
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Map Full Width */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-64 md:h-96 overflow-hidden shadow-lg -mb-10">
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
  );
}
