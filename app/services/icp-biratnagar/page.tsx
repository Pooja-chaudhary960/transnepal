'use client';

import Image from 'next/image';

export default function IcpBiratnagar() {
  return (
    <section className="bg-white">
      <div >

        <div className="w-full mb-10">
          <Image
            src="/images/icp.jpg" 
            alt="ICP Biratnagar"
            width={1200}
            height={600}
            className="block w-full h-64 md:h-[360px] object-cover"
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">ICP Biratnagar Infrastructure</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
            Integrated Check Post (ICP) Biratnagar is equipped with modern infrastructure to facilitate smooth and secure trade and movement. The facilities include administrative buildings, warehouses, security blocks, and utility services designed for efficiency and safety.
          </p>
        </div>
        <div className="overflow-x-auto border rounded-lg shadow-sm mb-4 ml-6 mr-4">
          <table className="min-w-full table-auto text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 text-sm font-semibold">
              <tr>
                <th className="px-4 py-3 border">SN</th>
                <th className="px-4 py-3 border">Particular</th>
                <th className="px-4 py-3 border">Unit</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              <tr className="bg-gray-50 font-medium">
                <td className="px-4 py-2 border">1</td>
                <td className="px-4 py-2 border">Building</td>
                <td className="px-4 py-2 border"></td>
              </tr>
              {[
                ['(a) Administrative Building, Double Storey', '1320 sqm.'],
                ['(b) Dispensary Building, Single Storey', '161 sqm.'],
                ['(c) Customs service Building, Double Storey', '658 sqm.'],
                ['(d) Dormitory Building, Single Storey', '647 sqm.'],
                ['(e) Security Barrack Building, Double Storey', '837 sqm.'],
                ['(f) Quarantine Building, Single Storey', '250 sqm.'],
                ['(g) Electrical Sub Station Building, Single Storey', '290 sqm'],
                ['(h) Entrance Gate, Double Storey', '133 sqm'],
                ['(i) Toilet Block - Type 1 (Import & Export)', '35 sqm'],
                ['(j) Toilet Block - Type 2 (Import & Export)', '47 sqm'],
                ['(k) Watch Tower, 4 Nos, Four Storey', '63 sqm'],
              ].map(([name, unit], index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border"></td>
                  <td className="px-4 py-2 border">{name}</td>
                  <td className="px-4 py-2 border">{unit}</td>
                </tr>
              ))}

              <tr className="bg-gray-50 font-medium">
                <td className="px-4 py-2 border">2</td>
                <td className="px-4 py-2 border">Pre-engineered Sheds/Godowns</td>
                <td className="px-4 py-2 border"></td>
              </tr>
              {[
                ['(a) Warehouse Arrival with refrigeration facilities (Import Side)', '1520 sqm'],
                ['(b) Warehouse Departure (Export Side)', '740 sqm'],
                ['(c) Admin Block (Export Side)', '190 sqm'],
              ].map(([name, unit], index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border"></td>
                  <td className="px-4 py-2 border">{name}</td>
                  <td className="px-4 py-2 border">{unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
