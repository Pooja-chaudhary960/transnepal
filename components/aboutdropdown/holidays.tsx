export default function Holidays() {
  return (
    <section className="bg-white text-gray-800">
   
      <div className="w-full h-[250px] sm:h-[400px] relative">
        <img
          src="/images/salientimg.png" 
          alt="Holidays"
          className="object-cover w-full h-full"
        />
      </div>

    
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 flex flex-col items-center gap-2 ">
          <span className="text-blue-500 text-2xl"></span>
          Holidays
        </h3>

        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-green-200 text-gray-700 text-left">
              <th className="border border-gray-300 px-4 py-2 font-semibold">S.N</th>
              <th className="border border-gray-300 px-4 py-2 font-semibold">Holidays</th>
              <th className="border border-gray-300 px-4 py-2 font-semibold">Days</th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base">
            {[
              ['1', '1st Baishakh', '1'],
              ['2', '19th Baishakh (Labor Day)', '1'],
              ['3', '3rd Ashoj (Constitution Day)', '1'],
              ['4', '24th, 25th, 26th, 27th & 28th Kartik (Dashain)', '5'],
              ['5', '15th, 16th, 17th & 18th Kartik (Dipawali)', '4'],
              ['6', '22th Mangsir (Chhath)', '1'],
              ['7', '14th Falgun (Mahashivratri)', '1'],
              ['8', '1st Chaitra (Holi)', '1'],
            ].map(([sn, holiday, days], idx) => (
              <tr key={idx}>
                <td className="border border-gray-300 px-4 py-2">{sn}</td>
                <td className="border border-gray-300 px-4 py-2">{holiday}</td>
                <td className="border border-gray-300 px-4 py-2">{days}</td>
              </tr>
            ))}

            <tr className="font-semibold text-gray-700">
              <td colSpan={2} className="border border-gray-300 px-4 py-2">Total</td>
              <td className="border border-gray-300 px-4 py-2">15 Days</td>
            </tr>

            <tr>
              <td className="border border-gray-300 px-4 py-2">9</td>
              <td className="border border-gray-300 px-4 py-2">21st Ashoj (Teej for Women only)</td>
              <td className="border border-gray-300 px-4 py-2">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
