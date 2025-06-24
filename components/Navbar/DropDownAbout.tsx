import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

export default function DropDownAbout() {
  return (
    <div className="relative group inline-block">
      <button className="flex items-center text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer">
        About Us <FaChevronDown className="ml-1 text-xs" />
      </button>

 
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
    </div>
  );
}
