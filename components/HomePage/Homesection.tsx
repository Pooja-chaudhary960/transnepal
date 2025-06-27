'use client';
import CountUp from "react-countup";

const stats = [
    { label: "Number of Offices", value: 7 },
    { label: "Number of Projects", value: 3 },
    { label: "Traffics", value: 350000 },
    { label: "Staffs", value: 100 },
    { label: "Years", value: 19 },
];

export default function Homesection() {
    return (
        <div className="relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/images/image4.png')" }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0" />
            {/* Stats Content */}
            <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 py-8 text-white text-center mt-10 pb-25">
                {stats.map((item, index) => (
                    <div key={index} className="w-1/2 sm:w-1/4 md:w-1/6 mt-15">
                        <h2 className="text-4xl font-bold">
                            <CountUp end={item.value} duration={2} separator="" />
                        </h2>
                        <p className="mt-2 text-sm font-medium">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}