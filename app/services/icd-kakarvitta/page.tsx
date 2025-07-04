'use client'
import React from 'react';

export default function IcdKakarbhitta() {
  return (
    <div className="px-4 md:px-12 py-10 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-6">ICD Kakarbhitta</h1>
        
        <p className=" text-gray-600 mb-10 max-w-4xl mx-auto text-justify">
          Kakarbhitta ICD spread over 7.5 hectares of land is located in Mechinagar Municipality of Jhapa district 
          and has been developed to boost trade with Bangladesh and Bhutan through India. This ICD is linked to 
          East–West highway that connects this facility with other terminals such as Biratnagar ICP, Birgunj ICD/ICP, 
          Bhairahawa ICD and Nepalgunj ICD.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3 border">SN</th>
                <th className="px-4 py-3 border text-left">Particular</th>
                <th className="px-4 py-3 border text-left">Unit</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {/* Ground Floor */}
              <tr className="bg-gray-100 font-semibold">
                <td className="px-4 py-2 border">1</td>
                <td className="px-4 py-2 border">Ground Floor</td>
                <td className="px-4 py-2 border"></td>
              </tr>
              <tr><td></td><td className="px-4 py-2 border">Custom Office</td><td className="px-4 py-2 border">600 sqm</td></tr>
              <tr><td></td><td className="px-4 py-2 border">Freight Forwarding Clearing Agent Office</td><td className="px-4 py-2 border">195 sqm</td></tr>
              <tr><td></td><td className="px-4 py-2 border">Desktop / Photocopiers etc.</td><td className="px-4 py-2 border">50 sqm</td></tr>
              <tr><td></td><td className="px-4 py-2 border">Lobby / Front Desk</td><td className="px-4 py-2 border">145 sqm</td></tr>
              <tr><td></td><td className="px-4 py-2 border">Electrical Room</td><td className="px-4 py-2 border">15 sqm</td></tr>

              {/* First Floor */}
              <tr className="bg-gray-100 font-semibold">
                <td className="px-4 py-2 border">2</td>
                <td className="px-4 py-2 border">First Floor</td>
                <td className="px-4 py-2 border"></td>
              </tr>
              <tr><td></td><td className="px-4 py-2 border">Bank</td><td className="px-4 py-2 border">140 sqm</td></tr>
              <tr><td></td><td className="px-4 py-2 border">Freight Forwarding Clearing Agent Office</td><td className="px-4 py-2 border">160 sqm</td></tr>
              <tr><td></td><td className="px-4 py-2 border">Terminal Management Company Office</td><td className="px-4 py-2 border">240 sqm</td></tr>
              <tr><td></td><td className="px-4 py-2 border">Laboratory for Customer</td><td className="px-4 py-2 border">135 sqm</td></tr>

              {/* Second Floor */}
              <tr className="bg-gray-100 font-semibold">
                <td className="px-4 py-2 border">3</td>
                <td className="px-4 py-2 border">Second Floor</td>
                <td className="px-4 py-2 border"></td>
              </tr>
              <tr><td></td><td className="px-4 py-2 border">Meeting Hall</td><td className="px-4 py-2 border">140 sqm</td></tr>
              <tr><td></td><td className="px-4 py-2 border">Training Class Room</td><td className="px-4 py-2 border">120 sqm</td></tr>
              <tr><td></td><td className="px-4 py-2 border">Store Room</td><td className="px-4 py-2 border">40 sqm</td></tr>

              {/* Warehouse */}
              <tr className="bg-gray-100 font-semibold">
                <td className="px-4 py-2 border">4</td>
                <td className="px-4 py-2 border">Warehouse (Covered)</td>
                <td className="px-4 py-2 border">3550 sqm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
