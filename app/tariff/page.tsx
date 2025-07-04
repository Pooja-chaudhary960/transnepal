'use client';
import React from 'react';

const data = [
  {
    title: "Freight Vehicle Entry",
    entries: [
      { activity: "Truck/Tanker/Tractor/Trailer per entry per trip", vehicle: "259.31", teu: "-", feu: "-" },
      { activity: "Light Vehicles/Bullock Cart up to 5 Ton per entry", vehicle: "129.69", teu: "-", feu: "-" },
      { activity: "Rickshaw / Hand Trolley per entry", vehicle: "38.94", teu: "-", feu: "-" },
      { activity: "Container Truck (fixed container)", vehicle: "389.06", teu: "-", feu: "-" },
      { activity: "Trailer / Flat Truck (with/without container)", vehicle: "518.64", teu: "-", feu: "778.13" },
    ]
  },
  {
    title: "Loading / Unloading / Handling of Cargo (all activities)",
    entries: [
      { activity: "Containerized cargo", vehicle: "-", teu: "2593.75", feu: "4668.74" },
      { activity: "Non containerized break bulk/Packaged/ Bagged cargo", vehicle: "181.57", teu: "-", feu: "-" },
      { activity: "Non containerized bulk/ loose cargo", vehicle: "129.69", teu: "-", feu: "-" },
    ]
  }
];

export default function Tarrif() {
  return (
    <section className="bg-gray-50">

      <div className="w-full mb-10">
        <img
          src="/images/image3.png"
          alt="Tariff"
          className="block w-full h-64 md:h-[360px] object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Tariff Details</h2>

        <div className="overflow-x-auto mb-4">
          <table className="min-w-full text-sm border border-gray-300 rounded-lg shadow-lg bg-white">
            <thead className="bg-blue-100 text-gray-700">
              <tr>
                <th className="text-left py-3 px-4">S. No</th>
                <th className="text-left py-3 px-4">Activity</th>
                <th className="text-center py-3 px-4">Vehicle</th>
                <th className="text-center py-3 px-4">TEU</th>
                <th className="text-center py-3 px-4">FEU</th>
              </tr>
            </thead>
            <tbody>
              {data.map((section, i) => {
                const rows = [];

                rows.push(
                  <tr key={`section-${i}`} className="bg-blue-50">
                    <td className="py-3 px-4 font-bold">{i + 1}</td>
                    <td className="py-3 px-4 font-semibold text-gray-800" colSpan={4}>
                      {section.title}
                    </td>
                  </tr>
                );

                section.entries.forEach((entry, j) => {
                  rows.push(
                    <tr key={`entry-${i}-${j}`} className="border-t border-gray-200 hover:bg-blue-50 transition-all">
                      <td className="py-3 px-4">{`${i + 1}.${j + 1}`}</td>
                      <td className="py-3 px-4">{entry.activity}</td>
                      <td className="py-3 px-4 text-center">{entry.vehicle}</td>
                      <td className="py-3 px-4 text-center">{entry.teu}</td>
                      <td className="py-3 px-4 text-center">{entry.feu}</td>
                    </tr>
                  );
                });

                return rows;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
