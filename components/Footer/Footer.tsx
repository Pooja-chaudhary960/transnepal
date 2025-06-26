'use client';
import { FaClock, FaPhoneAlt, FaFax, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2c2c2c] text-white text-sm mt-10">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 md:px-10 py-10 bg-[#f4f4f4] text-black">
        <div>
          <h3 className="text-base text-gray-700 mb-6">WORKING HOURS</h3>
          <div className="flex items-center gap-2">
            <FaClock className="text-[#00adef] text-xl" />
            <p className="text-base">
              <strong>Weekdays:</strong> 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-base text-gray-700 mb-6">ADDRESS INFORMATION</h3>
          <div className="flex items-start gap-2 mb-6">
            <FaEnvelope className="text-[#00adef] text-xl" />
            <p className="text-base">
              <strong>Email:</strong> transnepal_brt@transnepaldryport.com
            </p>
          </div>
          <div className="flex items-start gap-2 mt-4">
            <FaMapMarkerAlt className="text-[#00adef] text-xl" />
            <p>TransNepal Tower, Piyush Marg, Biratnagar-05, Nepal</p>
          </div>
        </div>

        <div>
          <h3 className="text-base text-gray-700 mb-6">CONTACT INFORMATION</h3>
          <div className="flex items-start gap-2 mb-6">
            <FaPhoneAlt className="text-[#00adef] text-xl" />
            <p className="text-base">
              <strong>Telephone:</strong> +977 21 501441
            </p>
          </div>
          <div className="flex items-start gap-2">
            <FaFax className="text-[#00adef] text-xl" />
            <p className="text-base">
              <strong>Fax:</strong> +977 21 501470
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-12">
        
        {/* About Text: spans 2 columns */}
        <div className="md:col-span-2 md:pl-8">
          <h4 className="text-base text-white mb-6">ABOUT US</h4>
          <p className="text-white text-base text-justify text-[16px] leading-relaxed">
            TransNepal Freight Services Pvt. Ltd., was incorporated in the year 2002 under the Nepalese Company Act, and started operation from 17th April, 2002 by taking over operation and management of the two ICDs’ at Biratnagar and Bhairahawa on lease for a period of ten years from Nepal Intermodal Transport Development Board a body constituted by the Government of Nepal.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-base text-white mb-6">USEFUL LINKS</h4>
          <ul className="text-white text-base space-y-1">
            <li>• Department Of Customs</li>
            <li>• NITDB Board</li>
            <li>• FNCCI</li>
            <li>• Indian Embassy Nepal</li>
            <li>• Check Email</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base text-white mb-6">QUICK LINKS</h4>
          <ul className="text-white text-base space-y-1">
            <li>• Management Team</li>
            <li>• Biratnagar ICP</li>
            <li>• Kakarbhitta ICD</li>
            <li>• Tariff</li>
            <li>• News & Events</li>
          </ul>
        </div>

        {/* Logo */}
        <div className="md:col-span-1">
          <h4 className="text-base text-white mb-6">JOINT VENTURE WITH</h4>
          <img src="/images/image.png" alt="All Cargo" className="w-40 h-auto mt" />
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="relative flex items-center justify-center mt-4 mb-4">
        <div className="h-px bg-white w-full" />
        <div
          onClick={handleClick}
          role="button"
          tabIndex={0}
          className="absolute bg-[#2c2c2c] px-3 py-1 rounded-md border border-white cursor-pointer"
        >
          <span className="text-white text-lg">▲</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-20 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-white text-xs">
        <p className="text-base text-center">All rights Reserved | Copyright © 2024 Trans Nepal Freight Services Pvt. Ltd.</p>
        <p className="text-base text-center md:text-right">Technology Partner | Pracas Infosys</p>
      </div>
    </footer>
  );
}
