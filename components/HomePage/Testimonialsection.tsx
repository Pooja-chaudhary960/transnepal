export default function Testimonialsection(){
    return(
        <div className="bg-white py-6 px-4 text-center">
            <h2 className="text-lg text-black-700 font-semibold mb-2">TESTIMONIAL</h2>
            <p className="text-black-500 text-base whitespace-nowrap overflow-hidden text-ellipsis max-w-full mb-10">
               We understand that in order to maximize customer satisfaction, the flow of your supply chain from product to information to finance needs to be responsive towards demand.
            </p>
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                <div >
                    <div className="flex justify-center mb-4">
                        <img 
                        src="/images/mukeshrathi.png"
                        alt="Mukesh Rathi"
                        className="w-24 h-24 rounded-full border-2 border-black-500 object-cover"
                        />
                    </div>
                    <h3 className="text-blue-600 font-bold">Mr Mukesh Rathi</h3>
                    <p className="text-black-600 font-semibold">Managing Director, Rathi Group</p>
                    <p className="text-black-500 mt-2 max-w-md max-auto text-base text-justify">TransNepal solution are user-friendly, innovative, and low cost. We wish them success in all their endeavors.</p>
                </div>

                <div>
                    <div className="flex justify-center mb-4">
                        <img
                          src="/images/sureshkumar.png"
                          alt="Suresh Kumar"
                          className="w-24 h-24 rounded-full border-2 border-black-500 object-cover"
                        />
                    </div>
                    <h3 className="text-blue-600 font-bold text-base text-center">Mr. suresh Kumar R</h3>
                    <p className="text-black-600 text-base font-semibold">CEO -All Cargo Logistic Limited</p>
                    <p className="text-black-500 mt-2 max-w-md mx-auto text-base text-justify">TransNepal proactive efforts have helped us to maintain strong relationships with our customers. Thank you for marvelous efforts.  </p>
                </div>
            </div>
        </div>
    )
}