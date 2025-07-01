'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';

export default function DropDownServices() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  const handleHover = (item: string) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setHoveredItem(item);
    }
  };

  const isActive = pathname.startsWith('/services');
  const isHovered = hoveredItem === 'services';

  return (
    <div
      className="relative group inline-block"
      onMouseEnter={() => handleHover('services')}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <button
        className={`flex items-center gap-1 px-4 py-2 rounded-md font-semibold transition ${
          isActive || isHovered ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
        }`}
      >
        Services <FaChevronDown className="ml-1 text-xs" />
      </button>

      {/* Dropdown content */}
      <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <ul className="py-2 text-sm">
          <li className="px-4 py-1 font-semibold text-gray-700">Terminal Management</li>
          <li>
            <Link href="/services/icp-biratnagar" className="block px-8 py-1 hover:bg-gray-100">
              ICP Biratnagar
            </Link>
          </li>
          <li>
            <Link href="/services/icd-kakarvitta" className="block px-8 py-1 hover:bg-gray-100">
              ICD Kakarvitta
            </Link>
          </li>
          <li>
            <Link href="/services/icd-tatopani" className="block px-8 py-1 hover:bg-gray-100">
              ICD Tatopani
            </Link>
          </li>
          <li>
            <Link href="/services/icd-chobhar" className="block px-8 py-1 hover:bg-gray-100">
              ICD Chobhar
            </Link>
          </li>
          <li>
            <Link href="/services/agency-services" className="block px-4 py-2 hover:bg-gray-100">
              Agency Services
            </Link>
          </li>
          <li>
            <Link href="/services/rental-services" className="block px-4 py-2 hover:bg-gray-100">
              Rental Services
            </Link>
          </li>
          <li>
            <Link href="/services/transportation" className="block px-4 py-2 hover:bg-gray-100">
              Transportation
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
