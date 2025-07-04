'use client';

import {
  FaTruckMoving,
  FaTools,
  FaClock,
  FaCogs
} from 'react-icons/fa';
import Image from 'next/image';

export default function TransportSection() {
  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">

        {/* Top Image */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen mb-10">
          <Image
            src="/images/transportation.jpg"
            alt="TransNepal Transportation"
            width={1200}
            height={500}
            className="w-full h-70 rectangle-lg shadow-lg object-cover"
          />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          TransNepal Transportation Services
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-lg mb-12 text-justify max-w-4xl mx-auto leading-relaxed">
          At TransNepal, we are dedicated to delivering cargo safely, on time, and efficiently. Our comprehensive transportation network covers local, regional, and international routes. Whether it's moving goods across city borders or across the nation, we combine reliable fleets, smart logistics, and skilled personnel to make every delivery smooth and secure.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
          <FeatureCard
            icon={<FaTruckMoving />}
            title="Multi-Mode Transport"
            description="We operate through road, air, and cross-border transport, providing flexible and scalable logistics to suit cargo of all sizes and destinations."
          />
          <FeatureCard
            icon={<FaTools />}
            title="Modern Fleet & Equipment"
            description="Equipped with state-of-the-art vehicles and handling tools, our transport fleet meets global safety and performance standards."
          />
          <FeatureCard
            icon={<FaClock />}
            title="On-Time Performance"
            description="Time is critical. Our logistics system is optimized for punctual delivery, backed by experienced teams and real-time tracking."
          />
          <FeatureCard
            icon={<FaCogs />}
            title="Tailored Solutions"
            description="We adapt to your logistics needs with customizable transport plans—whether for one-time shipments or long-term logistics partnerships."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-left">
      <div className="text-blue-600 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-justify leading-relaxed">
        {description}
      </p>
    </div>
  );
}
