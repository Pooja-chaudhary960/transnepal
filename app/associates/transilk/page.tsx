'use client';
import Image from 'next/image';

const boardDirectors = [
  { sn: 1, name: "Mukesh Kumar Rathi", designation: "Chairman" },
  { sn: 2, name: "Ramesh Sherpa", designation: "Joint Managing Director" },
  { sn: 3, name: "Bhimraj Joshi", designation: "Joint Managing Director" },
  { sn: 4, name: "Suresh Kumar R", designation: "Director" },
  { sn: 5, name: "Bijay Sherpa", designation: "Director" }
];

const experienceTeam = [
  { sn: 1, name: "Capt. Mayur Paralkar", designation: "Management Committee Member" },
  { sn: 2, name: "Anand Kumar Singh", designation: "Management Committee Member" },
  { sn: 3, name: "Anirudra Thapa", designation: "Chief Executive Officer" },
  { sn: 4, name: "Raj Sapkota", designation: "Chief Financial Officer" }
];

export default function Transilk() {
  return (
    <section className="px-4 py-10 sm:px-8 bg-gradient-to-br from-blue-50 to-white">
 
      <h1 className="text-3xl font-bold text-center text-black-900 mb-15">
        TRANSILK TERMINALS PVT. LTD.
      </h1>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-12 md:ml-15">
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md">
          <Image
            src="/images/transilk.jpg"
            alt="Company Image"
            width={480}
            height={280}
            className="rectangle-md object-cover w-full h-auto"
          />
          <p className="text-gray-500 text-sm pt-4 ml-2">September 28, 2022</p>
          <h2 className="text-xl font-semibold mt-2 mb-4 ml-2">
            Trans Silk joint venture company of Trans Nepal to operate Tatopani ICD for five years
          </h2>
        </div>

        <div className="text-gray-800 text-sm sm:text-xl leading-relaxed text-justify px-4 md:px-0">
          <h3 className="text-2xl font-semibold mb-3">Company Overview</h3>
          <p className='mr-15 text-base'>
            TranSilk Terminals Pvt. Ltd. is a 60:40 Joint Venture company incorporated in 2022
            with the objective of operating and managing terminals in Nepal. The company signed
            the contract of operation and management of Tatopani ICD with the Nepal Intermodal
            Transport Development Board and commenced operation in September 2022.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Board of Directors</h3>
          <table className="min-w-full border-separate border-spacing-y-2 text-sm">
            <thead className="bg-blue-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">SN</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Designation</th>
              </tr>
            </thead>
            <tbody>
              {boardDirectors.map((person) => (
                <tr key={person.sn} className=" odd:bg-blue-50 even:bg-green-50">
                  <td className="py-2 px-4">{person.sn}</td>
                  <td className="py-2 px-4">{person.name}</td>
                  <td className="py-2 px-4">{person.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Experience Behind the Wheel</h3>
          <table className="min-w-full border-separate border-spacing-y-2 text-sm">
            <thead className="bg-blue-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">SN</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Designation</th>
              </tr>
            </thead>
            <tbody>
              {experienceTeam.map((person) => (
                <tr key={person.sn} className="even:bg-green-50 odd:bg-blue-50">
                  <td className="py-2 px-4">{person.sn}</td>
                  <td className="py-2 px-4">{person.name}</td>
                  <td className="py-2 px-4">{person.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
