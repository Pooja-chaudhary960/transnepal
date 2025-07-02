export default function Welcomesection() {
    return (
        <div className="h-auto bg-black flex items-center justify-center py-4 px-4">
            <div className="grid md:grid-cols-2 gap-10 max-w-7xl w-full bg-black-500 rectangle-xl overflow-hidden">

                {/* Left parts*/}
                <div className="bg-black">
                    <img
                        src="/images/welcomesec.png" 
                        alt="TransNepal"
                        className="w-[500px] h-[300px] object-cover rounded-[15px] mt-8"
                    />
                </div>

                {/* Right parts */}
                <div className=" text-white p-4 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4 mt-2 ml-1">
                        Welcome to TransNepal
                    </h2>
                    <p className="leading-7 text-justify text-base md:text-base pb-4 mb-10">
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