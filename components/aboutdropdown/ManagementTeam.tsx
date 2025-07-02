export default function ManagementTeam() {
  return (
    <div className="w-full bg-white">
      <div className="w-full h-[200px] sm:h-[300px] md:h-[400px]">
        <img
          src="/images/managementteam.png"
          alt="Management Team Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-20">
          Management Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <img
              src="/images/captmayur.png"
              alt="Capt. Mayur Paralkar"
              className="w-60 h-60 rounded-lg object-cover"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Capt. Mayur Paralkar
            </p>
            <p className="text-sm text-gray-500 mb-6">Advisor</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/Anandkumar.png"
              alt="Anand Kumar Singh"
              className="w-60 h-60 rounded-lg object-cover"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Anand Kumar Singh
            </p>
            <p className="text-sm text-gray-500">General Manager</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/Laxmisubba.png"
              alt="Laxmi Subba"
              className="w-60 h-60 rounded-lg object-cover"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Laxmi Subba
            </p>
            <p className="text-sm text-gray-500">Manager – ICP Biratnagar</p>
          </div>

     
          <div className="flex flex-col items-center">
            <img
              src="/images/rajeshbabu.png"
              alt="Rajesh Babu Tiwari"
              className="w-60 h-60 rounded-lg object-cover"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Rajesh Babu Tiwari
            </p>
            <p className="text-sm text-gray-500">Manager – ICD Kakarvitta</p>
          </div>
        </div>
      </div>
    </div>
  );
}
