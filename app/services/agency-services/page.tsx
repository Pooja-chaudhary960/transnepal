'use client';

import Image from 'next/image';

export default function AgencyServices() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Agency Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by global shipping leaders, TransNepal Freight Services Pvt. Ltd. provides reliable and efficient agency operations at the Indo-Nepal border.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Representing ONE Shipping & Allcargo Logistics
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              TransNepal Freight Services Pvt. Ltd. is proud to be the official representative of <strong>ONE (Ocean Network Express)</strong>, the world’s 6th largest shipping line, through our joint venture with <strong>Allcargo Logistics Limited</strong>.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Since <strong>September 2019</strong>, we have been managing the agency operations for Nepal, ensuring seamless coordination of import containers from Kolkata to key destinations across Nepal. Our team facilitates timely clearance, documentation, and container movement with utmost efficiency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a strong network and a commitment to service excellence, we bridge the gap between global trade routes and Nepal’s logistics needs.
            </p>
          </div>

          <div className="w-130 h-[300] rounded-2xl shadow-xl overflow-hidden ml-6">
            <Image
              src="/images/transportation.jpg" 
              alt="Agency operations"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
