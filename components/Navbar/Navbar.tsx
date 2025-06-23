import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import DropDownAbout from './DropDownAbout';
import DropDownServices from './DropDownServices';
import DropDownAssociates from './DropDownAssociates';

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition duration-300">Home</Link>
            </li>
            <li><DropDownAbout /></li>
            <li><DropDownServices /></li>
            <li>
              <Link href="/tariff" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition duration-300">Tariff</Link>
            </li>
            <li><DropDownAssociates /></li>
            <li>
              <Link href="/gallery" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition duration-300">Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition duration-300">Contact</Link>
            </li>
            <li>
              <Link href="/news-events" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition duration-300">News & Events</Link>
            </li>
            <li>
              <Link href="/csr" className="text-white font-semibold px-3 py-1 rounded-md hover:bg-white hover:text-black transition duration-300">CSR</Link>
            </li>
          </ul>

       
          <div className="flex gap-4 text-white text-2xl">
            <div className="relative group">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
              </Link>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-sm border border-black rounded shadow-sm opacity-0 group-hover:opacity-100 transition duration-200">
                Facebook
              </span>
            </div>

            <div className="relative group">
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
              </Link>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-sm border border-black rounded shadow-sm opacity-0 group-hover:opacity-100 transition duration-200">
                LinkedIn
              </span>
            </div>

            <div className="relative group">
              <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-gray-300 cursor-pointer" />
              </Link>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-sm border border-black rounded shadow-sm opacity-0 group-hover:opacity-100 transition duration-200">
                YouTube
              </span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
