'use client'
import React from 'react';

export default function IcdTatopani() {
  const data = [
    { sn: 1, particular: 'Developed Land area', unit: '41895 sqm.' },
    { sn: 2, particular: 'Admin Building', unit: 'Two storied building of total floor area 3011 sqm' },
    { sn: 3, particular: 'Bhimraj Joshi', unit: 'Joint Managing Director' },
    { sn: 4, particular: 'Warehouse', unit: '1129 sqm' },
    { sn: 5, particular: 'Good Shed', unit: '700 sqm' },
    { sn: 6, particular: 'Inspection Shed', unit: '598 sqm' },
    { sn: 7, particular: 'Canteen Building', unit: 'Available' },
  ];

  return (
    <div className="bg-white px-4 sm:px-10 py-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header with icon and title */}
        <div className="flex items-center justify-center gap-2 mb-6">
          
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-700 uppercase">ICD Tatopani</h1>
        </div>

        {/* Paragraph */}
        <div className="text-center text-gray-600 max-w-4xl mx-auto mb-8">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Salient Features</h2>
          <p className='text-justify'>
            Tatopani ICD is located in Sindhupachowk, Bagmati Province 114 Km north east of Kathmandu.
            Tatopani and Rasua are two important cross border points of Nepal to China. But Tatopani point
            provides better services and facilitates trade and transit efficiently than Rasua because of this
            ICD and better road connectivity. With the development of North-South Road Corridors along Koshi,
            Gandaki and Karnali rivers, trade between India and China can happen via Nepal and Tatopani ICD will
            play a crucial role in facilitating the north–south trade between India and China.
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
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.sn} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{row.sn}</td>
                  <td className="border px-4 py-2">{row.particular}</td>
                  <td className="border px-4 py-2">{row.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
