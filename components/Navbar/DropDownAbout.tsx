'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function DropDownAbout() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); 

 const handleHover = (item: string) => {
  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
    setHoveredItem(item); 
  }
};

  const isHovered = hoveredItem === 'aboutus';

  return (
    <div 
      className="relative group inline-block"
      onMouseEnter={() => handleHover('aboutus')} 
    >
      <button
        className={`flex items-center gap-1 px-4 py-2 rounded-md font-semibold transition ${isHovered ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}
      >
        About Us <FaChevronDown className="ml-1 text-xs" />
      </button>

      {/* Dropdown content */}
      {isHovered && (
        <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <ul className="py-2 text-sm">
            <li>
              <Link href="/about-us/board-of-director" className="block px-4 py-2 hover:bg-gray-100">
                Board Of Director
              </Link>
            </li>
            <li>
              <Link href="/about-us/management-team" className="block px-4 py-2 hover:bg-gray-100">
                Management Team
              </Link>
            </li>
            <li>
              <Link href="/about-us/vision-mission" className="block px-4 py-2 hover:bg-gray-100">
                Vision & Mission
              </Link>
            </li>
            <li>
              <Link href="/about-us/salient-features" className="block px-4 py-2 hover:bg-gray-100">
                Salient Features
              </Link>
            </li>
            <li>
              <Link href="/about-us/history-memories" className="block px-4 py-2 hover:bg-gray-100">
                History & Memories
              </Link>
            </li>
            <li>
              <Link href="/about-us/qac-coc" className="block px-4 py-2 hover:bg-gray-100">
                QAC & COC
              </Link>
            </li>
            <li>
              <Link href="/about-us/holidays" className="block px-4 py-2 hover:bg-gray-100">
                Holidays
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
