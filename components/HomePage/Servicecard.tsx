
'use client';
import React from "react";

type ServiceProps = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  index:number;
};

const ServiceCard = ({ title, description, image, reverse = false, index }: ServiceProps) => (
  <div className={`flex flex-col items-center bg-white shadow-md mb-6 md:mb-0 overflow-hidden ${
    index === 0
    ? 'md:rounded-l-[15px]'
    : index === 2
    ? 'md:rounded-r-[15px]'
    :''
  }`}
    
  >
    {reverse ? (
      <>
        <div className="bg-sky-500 w-full text-white text-center py-6 px-4 flex flex-col justify-center">
          <h3 className="text-xl font-bold mt-6">{title}</h3>
          <p className="mt-2 text-base">{description}</p>
        </div>
        <img src={image} alt={title} className="w-full h-60 object-cover " />
      </>
    ) : (
      <>
        <img src={image} alt={title} className="w-full h-60 object-cover"/>
        <div className="bg-sky-500 w-full text-white text-center py-6 px-4  flex flex-col justify-center">
          <h3 className="text-xl font-bold mt-6">{title}</h3>
          <p className="mt-2  text-base text-sm mb-8 justify-center">{description}</p>
        </div>
      </>
    )}
  </div>
);
export default function Servicecard() {
  const services = [
    {
      title: "STORAGE",
      description: "Covered Warehouse of 55 x 25 meters with 1.2 meter high level platform in both ICP and ICD Bhairahawa.",
      image: "/images/storage.png"
    },
    {
      title: "CARGO HANDLING",
      description: "Earlier cargoes were being totally handled manually. In the current situation where handling activities have been transforming from manual to mechanical.",
      image: "/images/cargohandling.png",
      reverse: true,
    },
    {
      title: "WEIGHMENT",
      description: "Weighing activities were being carried out at remote locations making it cost ineffective and time consuming",
      image: "images/weighment1image.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-y-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          reverse={service.reverse}
          index={index}
        />
      ))}
    </div>
  )
}