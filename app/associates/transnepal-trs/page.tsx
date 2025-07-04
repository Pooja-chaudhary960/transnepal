export default function Transnepal() {
    return (
        <section className="bg-gray-50 mb-4">
            <div className="w-full mb-10">
                <img
                    src="/images/warehouse.png"
                    alt="Corporate Social Responsibility"
                    className="block w-full h-64 md:h-[360px] object-cover"
                />
            </div>

            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                TransNepal TRS Logipark Pvt. Ltd.
            </h2>

            <div className="bg-white shadow-md rounded-lg p-6 max-w-5xl mx-auto text-gray-800">
                <div className="text-base sm:text-lg leading-relaxed text-justify space-y-6">
                    <p>
                        TransNepal TRS Logipark Pvt. Ltd. is a joint venture established to develop and manage
                        state-of-the-art logistics parks across Nepal. The company is a strategic partnership between
                        TransNepal and TRS Group, aimed at strengthening the logistics and supply chain infrastructure
                        to support both national and international trade.
                    </p>

                    <p>
                        Our mission is to offer integrated logistics solutions including warehousing, transportation,
                        and customs facilitation all under one roof. The Logiparks are being developed with a
                        focus on digital infrastructure, environmental sustainability, and connectivity to key
                        border points and economic corridors.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Key Services and Features:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Integrated logistics hubs with multimodal connectivity</li>
                            <li>Container Freight Stations (CFS) and Inland Container Depots (ICD)</li>
                            <li>Bonded & non-bonded warehousing</li>
                            <li>Cold chain and temperature-controlled storage</li>
                            <li>Customs facilitation & clearance services</li>
                            <li>Smart tracking and digital logistics solutions</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>

    )
}