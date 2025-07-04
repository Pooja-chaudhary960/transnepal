'use client'
import React from 'react';

export default function IcdChobhar() {
  const data = [
    { sn: 1, particular: 'Main Admin Building in EXIM terminal', unit: '2345 sqm', structure: 'RCC Framed' },
    { sn: 2, particular: 'Quarantine Building in EXIM terminal', unit: '885 sqm', structure: 'RCC Framed' },
    { sn: 3, particular: 'Domestic admin Building in Domestic', unit: '912 sqm', structure: 'RCC Framed' },
    { sn: 4, particular: 'Toilet (blocks of 32.5 sqm each)', unit: '162 sqm', structure: 'RCC Framed' },
    { sn: 5, particular: 'ESS & Pump House', unit: '428 sqm', structure: 'Prefab' },
    { sn: 6, particular: 'Warehouse Shed (Exim Side) 2 No', unit: '1329 sqm each', structure: '' },
    { sn: 7, particular: 'Ware House (Domestic side) 2 No', unit: '1329 sqm each', structure: '' },
    { sn: 8, particular: 'Inspection Shed (Exim Side) 2 No', unit: '800 sqm each', structure: '' },
    { sn: 9, particular: 'Inspection Shed (Domestic Side) 2 No', unit: '800 sqm each', structure: '' },
    { sn: 10, particular: 'Driver rest room', unit: '108 sqm', structure: '' },
  ];

  return (
    <div className="bg-white px-4 sm:px-10 py-12 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-6">ICD Chobhar</h1>

        {/* Description */}
        <div className="text-center text-gray-600 max-w-4xl mx-auto mb-8">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Salient Features</h2>
          <p className="mb-4 text-justify">
            Chobhar ICD is located in the southwestern corner of Kathmandu Valley in Kirtipur district and spreads over 11.77 hectares.
            It is divided into two sections EXIM and DOMESTIC. Inland Clearance Depot will allow importers to make customs clearance of their goods in Kathmandu itself,
            saving them trips to the various border checkpoints from where shipments enter Nepal and will help facilitate trade and transit.
            Operationalization of this ICD would minimize the cost of logistics, time and problems related to the import and export of goods.
          </p>
          <p className='text-justify'>
            Chobhar ICD’s relevance will increase further once the Kathmandu–Terai expressway project comes into implementation or a railroad arrives to Kathmandu.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2 text-left">SN</th>
                <th className="border px-4 py-2 text-left">Particular</th>
                <th className="border px-4 py-2 text-left">Unit</th>
                <th className="border px-4 py-2 text-left">Types Of Structure</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.sn} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{row.sn}</td>
                  <td className="border px-4 py-2">{row.particular}</td>
                  <td className="border px-4 py-2">{row.unit}</td>
                  <td className="border px-4 py-2">{row.structure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
