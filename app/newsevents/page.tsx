export default function NewsAndEvents() {
  const news = [
    {
      date: 'January 30, 2024',
      title: 'Recognized by Customs',
      description:
        'On the Occasion International Custom’s day on 26th January 2024 Biratnagar and Kakarbhitta Custom’s has recognized TransNepal for managing the terminal efficiently in the best interest of the trade and transit.',
      image: '/images/event1.jpeg',
    },
    {
      date: 'December 15, 2023',
      title: 'Contract Signing of ICD Chobhar',
      description:'Transnepal T.R.S Logipark Pvt. Ltd. a 50:50 joint venture company between TransNepal Freight Services Pvt. Ltd. and TRS Lift and Shift Pvt. Ltd has been awarded the contract for operation and management of ICD Chobhar. ICD commenced its operation from 15th-Dec-2023.', 
      image: '/images/managementteam.png',
    },
    {
      date: 'September 28, 2022',
      title: 'Trans Silk joint venture company of Trans Nepal to operate Tatopani ICD for five years',
      description:
        'KATHMANDU: Nepal Intermodal Transport Development Board (NITDB) has entered into an agreement with Trans Nepal JV, Biratnagar, allowing the latter to operate Tatopani Dry Port for the next five years.The Tatopani dry port was built with the financial and technical support of the Chinese government in Larcha of Sindhupalchowk district.',
      image: '/images/event3.jpg',
    },
    {
      date: 'February 2, 2021',
      title: 'Signing of contract for Kakarbhitta ICD',
      description:
        'TransNepal has signed the contract for leasing of operation and management of Karkarbhitta ICD for 5 years with NITDB at Kathmandu on 27th January 2021 and company’s Managing Director MR.Mukesh Kumar Rathi signed and exchanged the contract paper with NITDB Executive Director MR.Aashish Gajurel on the occasion. The operation is scheduled to commence from 13th February 2021.',
      image: '/images/kakarbhitta.jpeg',
    },
    {
      date: 'August 17, 2020',
      title: 'Signing Of Contract For Biratnagar ICP',
      description:
        'TransNepal has signed the contract for leasing of operation and management of Biratnagar ICP for 5 years with NITDB at Kathmandu on 12th August 2020. TransNepal Director Mr. Pankaj Rathi and NITDB Director Mr. Hemedra Mohan Shahi signed and exchanged contract paper on the occasion.The operation is set to commence from 17th August 2020',
      image: '/images/icpbiratnagar.jpeg',
    },
    {
      date: 'March 8, 2020',
      title: 'Awarded by Bhairahawa Customs for efficiently managing terminal',
      description:'TransNepal has Awarded by Bhairahawa Customs for efficiently managing terminal at the occasion of 66th International Custom Day at 26 Jan,2018.'
        ,
      image: '/images/certificate.jpeg',
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">News & Events</h1>
        
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col">
          
            <div className="h-48 w-full relative rounded-t-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
