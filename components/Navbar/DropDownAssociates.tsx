import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

export default function DropDownAssociates() {
  return (
    <div className="relative group inline-block">
      <button className="flex items-center text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer">
        Associates <FaChevronDown className="ml-1 text-xs" />
      </button>

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
