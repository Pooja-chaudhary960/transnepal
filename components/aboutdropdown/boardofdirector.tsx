
export default function Boardofdirector() {
    return (
        <div className="bg-white text-gray-700">
            {/* Image section*/}
            <div>
                <img
                    src="/images/Bod.png"
                    alt="Image section"
                    className="w-full h-90 object-cover"
                />
            </div>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-2xl md:text-3xl font-semibold mb-12 text-center">BOARD OF DIRECTOR</h1>

                {/* chairman*/}
                <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    <div className="grid grid-cols-1 gap-12 place-items-center">
                        <img
                            src="/images/adarsh.png"
                            alt="Adarsh Hedge/ chairman"
                            className="w-48 h-60  object-cover rounded-lg"
                        />
                    </div>
                    <div className="md:w-2/3 flex-1">
                        <h1 className="text-xl font-semibold mb-4">Adarsh Hegde / chairman</h1>
                        <p className="text-gray-600 text-justify text-sm md:text-base">
                            "Mr. Adarsh Hegde has been associated with Allcargo Logistics since its inception.
                            With over two and half decades of experience in the field of logistics, he has been
                            instrumental in the success of Allcargo Logistics’ growth story. Under his leadership,
                            Allcargo Logistics established 6 CFS & ICD facilities PAN India, making Allcargo CFS
                            & ICD division one of the largest private players in the country. He continues to lead
                            the blue print and strategy for the division. With his extensive experience & proficiency
                            in transportation, he has contributed to the set-up the Allcargo Logistics Project Forwarding
                            division. He is also a part of the leadership team at ECU-Line with respect to driving international
                            procurement initiative and organisation-wide planning. After finishing his mechanical engineering from
                            Nitte Education Trust, Mangalore, he started his career as an Assistant Maintenance Engineer with Eastern Ceramics Private Limited, Mumbai in 1987."
                        </p>
                    </div>
                </div>

                {/* Managing Director*/}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 ">
                    <div className="grid grid-cols-1 gap-12 place-items-center">
                        <img
                            src="/images/mukeshrathi.png"
                            alt="Mukesh Kumar Rathi / Managing Director"
                            className="w-48 h-60 object-cover rounded-lg"
                        />
                    </div>
                    <div className=" flex-1 md:w-2/3">
                        <h1 className="text-xl font-semibold mb-4">Mukesh Kumar Rathi / Managing Director</h1>
                        <p className="text-gray-600 text-sm md:text-base text-justify">
                            "Mr. Mukesh Kumar Rathi has been holding the position as Managing Director of TransNepal Freight Services Pvt. Ltd., since 2002. He is a young and dynamic businessman. He played a key role in developing and implementing various systems and procedures which helps the organisation in achieving and establishing its benchmark in ICD/CFS operation in Nepal. He was very instrumental in renewing the contract for operation and management of ICDs with Nepal Intermodal Transport Development Board in the year 2012. His sincerity, foresight and skill to handle manpower make him true business leader.. He is a Group Director of Rathi Group a leading business house in Nepal having its presence in Trading, Manufacturing and Service sector across the board."
                        </p>
                    </div>
                </div>

                {/*Director*/}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    <div className="grid grid-cols-1 gap-12 place-items-center">
                        <img
                            src="/images/bhimraj.png"
                            alt="Bhim Raj Joshi / Director"
                            className="w-48 h-60 object-cover rounded-lg"
                        />
                    </div>
                    <div className=" flex-1 md:w-2/3 ">
                        <h1 className="text-xl font-semibold mb-4">Bhim Raj Joshi/ Director</h1>
                        <p className="text-gray-600 text-sm md:text-base text-justify">
                            "Mr. Bhim Raj Joshi is on board since the formation of this company. He is a self made man and has a very vast experience in the field of transport and supply chain management in Nepal. He involves in policy formulation and provides strategic support to the management in the operation of ICDs. Mr. Joshi chairs J.B.Transport Group, a pioneer in the field of transportation in Nepal and this is his vision and sincere effort which made JBT strengthen day by day and today is a reputed name and market leader in transportation sector of Nepal."
                        </p>
                    </div>
                </div>
                {/* Director*/}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                    <div className="grid grid-cols-1 gap-12 place-items-center">
                        <img
                            src="/images/pankajrathi.png"
                            alt="Pankaj Rathi / Director"
                            className="w-48 h-60 object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex-1 md:w-2/3">
                        <h1 className="text-xl font-semibold mb-4">Pankaj Rathi / Director</h1>
                        <p className="text-gray-600 text-sm md:text-base text-justify">
                           "Mr. Pankaj Rathi, the youngest director in the board is an MBA (International Business and Finance)and leading the BAGMATI PLASTIC INDUSTRIES PVT.LTD. as its chairman. He has an understanding of the macroeconomic Dynamics of Nepal due to exposure to various international markets. He has an analytical bent of mind with a passion for entrepreneurship and financial markets. "
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}