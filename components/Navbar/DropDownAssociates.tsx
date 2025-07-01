'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';

export default function DropDownAssociates() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  const handleHover = (item: string) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setHoveredItem(item);
    }
  };

  const isActive = pathname.startsWith('/associates');
  const isHovered = hoveredItem === 'associates';

  return (
    <div
      className="relative group inline-block"
      onMouseEnter={() => handleHover('associates')}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <button
        className={`flex items-center gap-1 px-4 py-2 rounded-md font-semibold transition ${
          isActive || isHovered ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
        }`}
      >
        Associates <FaChevronDown className="ml-1 text-xs" />
      </button>

      {/* Dropdown content */}
      <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <ul className="py-2 text-sm">
          <li>
            <Link href="/associates/transilk" className="block px-4 py-2 hover:bg-gray-100">
              Transilk Terminals Pvt. Ltd.
            </Link>
          </li>
          <li>
            <Link href="/associates/transnepal" className="block px-4 py-2 hover:bg-gray-100">
              TransNepal TRS
            </Link>
          </li>
          <li>
            <Link href="/associates/logipark" className="block px-4 py-2 hover:bg-gray-100">
              Logipark Pvt. Ltd.
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
