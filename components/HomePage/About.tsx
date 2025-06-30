import { Plus, Paperclip, Menu, MessageSquare } from "lucide-react";


export default function About() {
    return (
        <div className="px-6 py-12 md:px-24 flex justify-center">
        <div className="w-full max-w-10xl px-0 md:px-6 ml-4 md:ml-20">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">About Us</h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Text Section */}
                <div className="w-full max-w-none text-gray-700 leading-relaxed text-justify text-base
           ">
                    <p>
                        TransNepal Freight Services Pvt. Ltd., was incorporated in the year 2002 under the Nepalese Company Act and started operation from 17th
                        April 2002 by taking over the operation and management of the two ICDs’ at Biratnagar and Bhairahawa on lease for a period of ten years
                        from Nepal Intermodal Transport Development Board, a body constituted by the Government of Nepal to regulate terminals in Nepal. The
                        lease agreement for both the ICDs’ has been renewed for a further period of ten years up to 15th April 2022. Meanwhile, Biratnagar
                        ICP comes into existence and TransNepal has awarded the contract of operation & management of Biratnagar ICP for the period of 5 years
                        under International Competitive Bidding, and the operation commenced from 17th August 2020. Further in an International Competitive Bidding,
                        TransNepal has been awarded the contract of operation and management of Kakarbhitta ICD for 5 years and the operation commenced from 13th
                        Feb 2021. In the year 2022, the company has registered its presence in the northern part of Nepal by winning the bid of Tatopani ICD at
                        the Nepal-China border in the name of TransSilk Terminals Pvt. Ltd.. Recently, in 2023, the company has signed a contract with NITDB and commenced operation of Chobhar ICD at Kirtipur, Kathmandu, in the name of TranNepal T.R.S. Logipark Pvt.Ltd.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src="images/aboutus.png" className="rounded-lg shadow-md w-auto h-[330px] mb-4" />
                </div>
            </div>

            {/* Icons Section */}
            <div className="mt-8 justify-start gap-12 hidden md:flex ">
                <div className="w-15 h-15 flex items-center justify-center border-2 border-green-500 rounded-xl hover:scale-110 transition ">
                    <Plus className="w-8 h-8 text-green-600" />
                </div>
                <div className="w-15 h-15 flex items-center justify-center border-2 border-red-500 rounded-xl hover:scale-110 transition ">
                    <Paperclip className="w-8 h-8 text-red-600" />
                </div>
                <div className="w-15 h-15 flex items-center justify-center border-2 border-green-500 rounded-xl hover:scale-110 transition ">
                    <Menu className="w-8 h-8 text-green-600" />
                </div>
                <div className="w-15 h-15 flex items-center justify-center border-2 border-green-500 rounded-xl hover:scale-110 transition  ">
                    <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
            </div>
        </div>
        </div>
    );
}
