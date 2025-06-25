"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import DropDownAbout from "./DropDownAbout";
import DropDownServices from "./DropDownServices";
import DropDownAssociates from "./DropDownAssociates";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* Main menu */}
          <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-8 items-start md:items-center absolute md:static bg-gray-800 left-0 w-full md:w-auto px-4 md:px-0 py-4 md:py-0 z-50 transition-all duration-300 ${isOpen ? "top-16" : "-top-[1000px]"}`}>
            <li>
              <Link href="/" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition">Home</Link>
            </li>
            <li><DropDownAbout /></li>
            <li><DropDownServices /></li>
            <li>
              <Link href="/tariff" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition">Tarrif</Link>
            </li>
            <li><DropDownAssociates /></li>
            <li>
              <Link href="/gallery" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition">Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition">Contact</Link>
            </li>
            <li>
              <Link href="/newsevents" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition">News & Events</Link>
            </li>
            <li>
              <Link href="/csr" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition">CSR</Link>
            </li>
          </ul>

          {/* Social icons */}
          <div className="hidden md:flex gap-4 text-white text-2xl">
            {[
              { href: "https://www.facebook.com", icon: <FaFacebookF />, label: "Facebook" },
              { href: "https://www.linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
              { href: "https://www.youtube.com", icon: <FaYoutube />, label: "YouTube" },
            ].map(({ href, icon, label }) => (
              <div className="relative group" key={label}>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  {icon}
                </Link>
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-sm border border-black rounded shadow-sm opacity-0 group-hover:opacity-100 transition duration-200">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}