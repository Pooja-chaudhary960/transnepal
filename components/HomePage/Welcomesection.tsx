export default function Welcomesection() {
    return (
        <div className="h-auto bg-gray-500 flex items-center justify-center py-4 px-4">
            <div className="grid md:grid-cols-2 gap-10 max-w-7xl w-full bg-gray-500 rectangle-xl overflow-hidden">

                {/* Left parts*/}
                <div className="bg-gray-500">
                    <img
                        src="/images/welcomesec.png" 
                        alt="TransNepal"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right parts */}
                <div className="bg-blue-500 text-white p-4 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 mt-2 ml-2">
                        Welcome to TransNepal
                    </h2>
                    <p className="leading-7 text-justify text-xl md:text-base pb-4 mb-10">
                        Government of Nepal’s strategic move to manage the EXIM traffics through ICPs/ ICDs put Nepal on Multi-Modal
                        Logistics map in the year 2002 when Nepal Intermodal Transport Development Board had invited tender for leasing
                        of operation and management of two ICDs at Biratnagar and Bhairahawa. TransNepal was successful in acquiring both
                        ICDs through global competitive bidding. TransNepal is a joint venture company with Allcargo Logistics Ltd an India-born
                        multinational company headquartered in Mumbai having presence in more than 160 countries across the globe.
                    </p>
                </div>

            </div>
        </div>
    );
}