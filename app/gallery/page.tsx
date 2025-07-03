import Image from 'next/image';

export default function Gallery() {
  const images = [
    {
      src: '/images/icd2002.jpg',
      alt: 'Truck fleet',
      title: 'ICD Inauguration 2002',
    },
    {
      src: '/images/certificate.jpeg',
      alt: 'Certificates',
      title: 'Certificates',
    },
    {
      src: '/images/kakarbhitta.jpeg',
      alt: 'ICD Kakarbhitta',
      title: 'ICD Kakarbhitta',
    },
    {
      src: '/images/inaguaration2020.jpg',
      alt: 'ICP Inaguration 2020',
      title: 'ICP Inaguration 2020',
    },
    {
      src: '/images/icpbiratnagar.jpeg',
      alt: 'ICP Biratnagar',
      title: 'ICP Biratnagar',
    },
   {
      src: '/images/visit.jpg',
      alt: 'Finance Minister Visit',
      title: 'Finance Minister Visit',
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-black-700 mb-8">Gallery</h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map(({ src, alt, title }, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
          
            <div className="w-full h-64 relative">
              <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

          
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
