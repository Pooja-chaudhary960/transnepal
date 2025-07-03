export default function CSR() {
  const csr = [
    {
      date: 'May 21, 2024',
      title: 'CSR-Manav Sewa Ashram',
      description: 'TransNepal Freight Services Pvt. Ltd contributed Rs. 5,11,111 to Manav Sewa Ashram, Biratnagar in part of assistance in building infrastructure for rehabilitation of mentally, physically & economically challenged person.',
      image: '/images/manavsewa.jpg',
    },
    {
      date: 'December 1, 2020',
      title: 'CSR-Fight against COVID-19',
      description: 'In its drive to fight against COVID-19 TransNepal has extended its hand to Nagarik Care Centre for construction of 110 bed facility at Biratnagar and for this company’s MD and GM handing over NRs. 5 lakhs cheque to Mr. Pawan Sharda and Mr. Mahesh Jaju.',
      image: '/images/event1.jpeg',
    },
    {
      date: 'September 10, 2020',
      title: 'Green Initiatives to keep Environment clean by TransNepal',
      description:
        'Part of Green Initiatives and to keep the environment clean TransNepal has planted 100 Ashoka Trees in ICP today. Custom Chief of Biratnagar and President of Biratnagar Agent Sangha lead the initiative.',
      image: '/images/csr2.jpeg'
    },

  ];


  return (
    <div className="bg-gray-50 px-4">
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen mb-4">
        <img
          src="/images/csr1.jpg"
          alt="Corporate Social Responsibility"
          className="w-full h-64 md:h-90 object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center mb-10">

        <h1 className="text-3xl md:text-4xl font-bold text-black-700 mb-4 text-center">
          Corporate Social Responsibility
        </h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-10">
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li>
            TransNepal Freight Services Pvt. Ltd contributed Rs. 5,11,111 to Manav Sewa Ashram, Biratnagar in part of assistance in building infrastructure for rehabilitation of mentally, physically & economically challenged person.
          </li>
          <li>
            TransNepal contributes Rs. 5,00,000 to Pradesh No.1 Corona Jana Suraksha Kosh and collaborates on other initiatives to bolster Nepal’s fight against COVID-19.
          </li>
          <li>
            The company as to subsume its social responsibility has provided Rs. 1,01,000 to the Prime Minister Disaster Relief Fund and Rs.1,01,000 to "Bhukamp Rahat Pidit Kosh" established by Morang Merchant’s Association after the devastating earthquake dated 25th April 2015. It has further contributed to other institutions at the local level as well.
          </li>
          <li>
            Not only monetary contribution but the company being present at two important locations across the Indo-Nepal border at Biratnagar and Bhairahawa did its best to manage the supply chain of essential commodities as logistics plays a crucial role in such a catastrophic event, and consequently Mr. Ravi Parikhe, Manager, ICD-Bhairahawa recognized by Consulate General of India, Nepal for his sincere and hard work.
          </li>
        </ul>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {csr.map((item, index) => (
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
