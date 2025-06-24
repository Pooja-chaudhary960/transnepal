import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

export default function DropDownServices() {
  return (
    <div className="relative group inline-block">
      <button className="flex items-center text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer">
        Services <FaChevronDown className="ml-1 text-xs" />
      </button>
      
      <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md text-black opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
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
    </div>
  );
}
