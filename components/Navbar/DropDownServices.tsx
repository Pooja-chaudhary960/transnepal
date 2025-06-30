'use client'
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

export default function DropDownServices() {
  const [hoveredItems, setHoveredItems] = useState<string[]>([]);

  const handleHover = (item: string) => {
    if (!hoveredItems.includes(item)) {
      setHoveredItems([...hoveredItems, item]);
    }
  };
  const isHovered = hoveredItems.includes("services");

  return (
    <div className="relative group inline-block"
      onMouseEnter={() => handleHover("services")}
    >
      <button

        className={` flex items-center gap-1 px-4 py-2 rounded-md font-semibold transition ${isHovered ?
          "bg-white text-black"
          : "hover:bg-white hover:text-black"
          }`}
      >
        Services <FaChevronDown className="ml-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
      
      {isHovered && (
      <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <ul className="py-2 px-4 text-sm">
          <li className="py-1">
            <span className="font-semibold text-gray-700 hover:cursor-pointer">Terminal Management</span>
            <ul className="list-disc pl-4 mt-1">
              <li>
                <Link href="/services/icp-biratnagar" className="block py-1 hover:text-blue-600">
                  ICP Biratnagar
                </Link>
              </li>
              <li>
                <Link href="/services/icd-kakarvitta" className="block py-1 hover:text-blue-600">
                  ICD Kakarvitta
                </Link>
              </li>
              <li>
                <Link href="/services/icd-tatopani" className="block py-1 hover:text-blue-600">
                  ICD Tatopani
                </Link>
              </li>
              <li>
                <Link href="/services/icd-chobhar" className="block py-1 hover:text-blue-600">
                  ICD Chobhar
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-2">
            <Link href="/services/agency-services" className="hover:text-blue-600">
              Agency Services
            </Link>
          </li>
          <li className="py-2">
            <Link href="/services/rental-services" className="hover:text-blue-600">
              Rental Services
            </Link>
          </li>
          <li className="py-2">
            <Link href="/services/transportation" className="hover:text-blue-600">
              Transportation
            </Link>
          </li>
        </ul>
      </div>
      )}
    </div >
  );
}
