'use client';

import { FaTruck, FaWarehouse, FaCalendarAlt, FaTools, FaHeadset, FaUserTie } from 'react-icons/fa';
import Image from 'next/image';

export default function RentalSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">

        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen mb-10">
          <Image
            src="/images/rental.jpg" 
            alt="Rental Services"
            width={1200}
            height={500}
            className="w-full h-75 rounded-xl shadow-xl object-cover"
          />
        </div>

        {/* Heading & Intro */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible & Affordable Rental Services</h2>
        <p className="text-gray-700 text-lg mb-12 text-justify max-w-3xl mx-auto leading-relaxed">
          TransNepal provides dependable rental solutions for all your logistics and project needs. From trucks and vans to specialized equipment, we offer a range of well-maintained assets available on a flexible rental basis — daily, weekly, or long-term.
        </p>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
          <RentalCard icon={<FaTruck />} title="Truck & Van Rental" desc="Hire fully maintained trucks and vans for local or long-distance transport, available with or without driver." />
          <RentalCard icon={<FaTools />} title="Equipment Rental" desc="Rent lifting tools, pallet jacks, and loading equipment for warehouse or field operations." />
          <RentalCard icon={<FaCalendarAlt />} title="Flexible Packages" desc="Choose from daily, weekly, or monthly rental options to suit your project duration." />
          <RentalCard icon={<FaUserTie />} title="With Driver Option" desc="Need a driver? Our trained professionals are available with the rental package." />
          <RentalCard icon={<FaWarehouse />} title="Storage & Space Rental" desc="Temporary warehouse space and storage container rentals also available on flexible terms." />
          <RentalCard icon={<FaHeadset />} title="24/7 Support" desc="We offer full-time support and roadside assistance to ensure your rental experience is seamless." />
        </div>
      </div>
    </section>
  );
}

function RentalCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-left">
      <div className="text-blue-600 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-justify leading-relaxed">{desc}</p>
    </div>
  );
}
