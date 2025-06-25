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

                {/* Right: Contact Info */}
                <div className="hidden sm:flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center sm:justify-end items-center sm:items-start text-gray-700 text-sm text-center sm:text-left">
                    
                    {/* Email */}
                    <div>
                        <span className="text-gray-500 text-[14px] text-base font-semibold mb-4 sm:mt-4 block">
                            Write Us For Your Questions
                        </span>
                        <span className="flex items-center text-base font-semibold justify-center sm:justify-start gap-2 text-[14px] text-gray-700 hover:text-blue-700 space-x-4 text-sm cursor-pointer">
                            <Mail className="w-5 h-5 text-green-500" />info@transnepaldryport.com
                        </span>
                    </div>

                    {/* Phone */}
                    <div className="pl-4">
                        <span className="text-gray-500 text-base font-semibold text-[14px] mb-4 sm:mt-4 block">
                            Call Us For Your Queries
                        </span>
                        <span className="flex items-center font-semibold text-base justify-center sm:justify-start gap-2 text-[14px] text-gray-700 hover:text-blue-700 cursor-pointer">
                            <Phone className="w-5 h-5 text-green-500" />+977-21-501441
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
