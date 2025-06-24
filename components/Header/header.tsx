import { Mail, Phone } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white py-1 px-4">
            <div className="max-w-7xl mx-auto flex justify-between items-start flex-wrap">

                {/* Leftside: LogoSection */}
                <div className="flex items-start w-full sm:w-auto gap-4 mt-3 -ml-15">
                    <img
                        src="/images/transnepalLogo.png"
                        alt="All Cargo"
                        className="h-[100px] w-auto object-contain"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-700 mt-2 sm:mt-0 ml-auto">
                    {/* Email */}
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-[14px] font-medium mb-2 mt-8">
                            Write Us For Your Questions
                        </span>
                        <span className="flex items-center gap-2 text-green-700 mt-1 text-[14px] hover:text-blue-700 cursor-pointer">
                            <Mail className="w-4 h-4" /> info@transnepaldryport.com
                        </span>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-[14px] font-medium mb-2 mt-8">
                            Call Us For Your Queries
                        </span>
                        <span className="flex items-center gap-2 text-green-700 hover:text-blue-700 mt-1 text-[14px] cursor-pointer">
                            <Phone className="w-4 h-4" /> +977-21-501441
                        </span>
                    </div>
                </div>

            </div>
        </header>
    );
}
