'use client';
import { FaClock, FaPhoneAlt, FaFax, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
   const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#2c2c2c] text-white text-sm mt-10">
  
      <div className="grid md:grid-cols-3 gap-8 px-6 py-10 bg-[#f4f4f4] text-black">
      
        <div>
          <h3 className="font-semibold mb-4">◇ WORKING HOURS</h3>
          <div className="flex items-start gap-2">
            <FaClock className="text-[#00adef] mt-1" />
            <p><strong>Weekdays:</strong> 10:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">◇ ADDRESS INFORMATION</h3>
          <div className="flex items-start gap-2 mb-1">
            <FaEnvelope className="text-[#00adef] mt-1" />
            <p><strong>Email:</strong> transnepal_brt@transnepaldryport.com</p>
          </div>

          <div className="flex items-start gap-2 mt-4"> {/* <-- added mt-4 */}
             <FaMapMarkerAlt className="text-[#00adef] mt-1" />
             <p>TransNepal Tower Piyush Marg, Biratnagar- 05 Nepal</p>
          </div>

        </div>

        <div>
          <h3 className="font-semibold mb-4">◇ CONTACT INFORMATION</h3>
          <div className="flex items-start gap-2 mb-1">
            <FaPhoneAlt className="text-[#00adef] mt-1" />
            <p><strong>Telephone:</strong> +977 21 501441</p>
          </div>
          <div className="flex items-start gap-2 mt-4">
            <FaFax className="text-[#00adef] mt-1" />
            <p><strong>Fax:</strong> +977 21 501470</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-10 grid md:grid-cols-4 gap-12">
        <div >
          <h4 className="font-semibold mb-3">◇ ABOUT US</h4>
         <p className="text-white-300 text-justify leading-relaxed">
            TransNepal Freight Services Pvt. Ltd., was incorporated in the year 2002 under the Nepalese Company Act,
            and started operation from 17th April, 2002 by taking over operation and management of the two ICDs at Biratnagar
            and Bhairahawa on lease for a period of ten years from Nepal Intermodal Transport Development Board a body
            constituted by the Government of Nepal.
          </p>
        </div>

        
        <div className='ml-30'>
          <h4 className="font-semibold mb-3">◇ USEFUL LINKS</h4>
          <ul className="text-white-300 space-y-1">
            <li>• Department Of Customs</li>
            <li>• NITDB Board</li>
            <li>• FNCCI</li>
            <li>• Indian Embassy Nepal</li>
            <li>• Check Email</li>
          </ul>
        </div>

      
        <div className='ml-20'>
          <h4 className="font-semibold mb-3">◇ QUICK LINKS</h4>
          <ul className="text-White-300 space-y-1">
            <li>• Management Team</li>
            <li>• Biratnagar ICP</li>
            <li>• Kakarbhitta ICD</li>
            <li>• Tarrif</li>
            <li>• News & Events</li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3">◇ JOINT VENTURE WITH</h4>
          <img src="/images/allcargo.png" alt="All Cargo" className="w-60 mt-6" />
        </div>
      </div>

      <div className="relative flex items-center justify-center mt-4 mb-6">
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

      <div className="px-6 py-4 flex justify-between items-center flex-wrap text-white-400 text-xs">
        <p className='text-base mb-20 '>All rights Reserved | Copyright © 2024 Trans Nepal Freight Services Pvt. Ltd.</p>
        <p className='text-base mb-20'>Technology Partner | Pracas Infosys</p>
      </div>
    </footer>
  );
}
