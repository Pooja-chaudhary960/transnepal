import { Mail, Phone } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white py-1 px-4">
            
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
                {/* Leftside: LogoSection */}
                <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
                    <img
                        src="/images/transnepalLogo.png"
                        alt="All Cargo"
                        className="h-[100px] w-auto object-contain"
                    />
                </div>

                 <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center sm:justify-end text-gray-700 text-sm">
                    {/* Email */}
                    <div className="text-center sm:text-left">
                        <span className="text-gray-500 text-base text-[14px] font-medium mb-2 mt-8">
                            Write Us For Your Questions
                        </span>
                        <span className="flex items-center gap-2 text-base text-gray-700 mt-1 text-[14px] hover:text-blue-700 cursor-pointer">
                            <Mail className="w-4 h-4" /> info@transnepaldryport.com
                        </span>
                    </div>

                    {/* Phone */}
                    <div className="text-center sm:text-left">
                        <span className="text-gray-500 text-[14px] font-medium mb-2 mt-8">
                            Call Us For Your Queries
                        </span>
                        <span className="flex items-center text-base gap-2 text-gray-700 hover:text-blue-700 mt-1 text-[14px] cursor-pointer">
                            <Phone className="w-4 h-4" /> +977-21-501441
                        </span>
                    </div>
                </div>

            </div>
        </header>
    );
}
