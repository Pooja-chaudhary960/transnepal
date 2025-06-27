'use client';
import {
    FaParking,
    FaWarehouse,
    FaTruckMoving,
    FaLaptop,
    FaWifi,
    FaCamera,
    FaTools,
    FaClock,
    FaUniversity,
} from 'react-icons/fa';
import { FaT } from 'react-icons/fa6';

const features = [
    {
        icon: <FaParking size={20} />,
        title: 'PARKING',
        description: 'Both terminals have parking facilities for vehicles. Biratnagar ICP has the capacity to accommodate more than 150 vehicles, and Bhairahawa ICD has more than 250 vehicles at a time.'
    },
    {
        icon: <FaWarehouse size={20} />,
        title: 'WAREHOUSE & STORAGE',
        description: 'Covered warehouse of 55x25 meters with a 1.2-meter high-level platform at both terminals. Additional fully covered warehouse of similar size in ICP Biratnagar.'
    },
    {
        icon: <FaTruckMoving size={20} />,
        title: 'WEIGHTMENT',
        description: 'When the company took charge of our terminal in the year 2002, there were no weighing facilities. To facilitate this activity, the company installed a 100-ton capacity Digital Weighbridge.'
    },
    {
        icon: <FaLaptop size={20} />,
        title: 'AUTOMATED BILLING',
        description: 'TransNepal provides system of Automated Billing in Order to predetermine date to pay a recurring bill.Speed up billing operations without losing attention to detail. Group customers together and set up automated billing schedules and rules for each group.'
    },
    {
        icon: <FaTools size={20} />,
        title: 'CRANE & FORKLIFT FACILITY',
        description: "In the current situation, the company is pleased to introduce Escorts F-15 pick & carry crane in Biratnagar, one Forklift-3000kgs HYUNDAI make in Biratnagar, and one Forklift-3000kgs Ace Make in Bhairahawa."
    },
    {
        icon: <FaWifi size={20} />,
        title: 'FREE WI-FI ZONE',
        description: 'In order to build sound connectivity and easier information sharing which ultimately lead to facilitating trade and commerce, the company has provided wi-fi facility at administrative block of both the ICDs at free of cost w.e.f.i.e 13th April, 2016.'
    },
    {
        icon: <FaCamera size={20} />,
        title: 'CCTV',
        description: 'In order to build strict watch and surveillance system that allows you to keep an eye on whats going on in and around your business. Cameras and monitors enable you to view events live, and recorders archive footage for later reference.'
    },
    {
        icon: <FaClock size={20} />,
        title: 'ROUND THE CLOCK SECURITY',
        description: 'In order to protect persons and prevent damage or destruction to property, TransNepal provides round-the-clock security in the parking area. A batch of 16 security personnel, which include a security incharge and supervisor, remains deployed around the clock in the parking area.'
    },
    {
        icon: <FaUniversity size={20} />,
        title: 'BANKING',
        description: 'In order to make transactions easy and secure, TransNepal provides banking facilities including all types of secured and unsecured banking facilities, loans, advances, credit facilities, and financial arrangements.'
    },

];
export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
                            {/* Icon inside diamond */}
                            <div className="min-w-[48px] min-h-[48px] bg-blue-500 text-blue-600 bg-white shadow-md flex items-center justify-center rounded-[20%] rotate-45 mx-auto sm:mx-0">
                                <div className="-rotate-45">{feature.icon}</div>
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                                <p className="text-base text-justify lg:text-justify sm:text-left leading-relaxed text-gray-700">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}