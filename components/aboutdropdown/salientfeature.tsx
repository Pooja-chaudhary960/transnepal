export default function SalientFeature() {
  return (
    <section className="bg-white text-gray-800">
      {/* Header Image */}
      <div className="w-full h-[250px] sm:h-[400px] relative">
        <img
          src="/images/salientimg.png"
          alt="Salient Features"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10 flex flex-col items-center gap-2">
          <span className="text-blue-500 text-2xl"></span>
          Salient Features
        </h3>

        <ul className="list-disc pl-6 space-y-4 text-gray-700 text-justify leading-relaxed text-base">
          <li>
            Exports can get their containers custom-cleared at terminals and importers can manifest import containers directly to terminals for delivery option for stuffing / de-stuffing containers at ICDs/ICPs/CFSs.
          </li>
          <li>
            TransNepal has been managing two terminals at Nepal-India border at Bitanagar and Kakarbhitta and these terminals are located in the plains of Eastern Nepal.
          </li>
          <li>
            Furthermore, TransNepal also through joint venture acquired two ICDs at Tatopani and Chobhar. Tatopani ICD is located at Nepal-China border while ICD Chobhar is located at Kirtipur, Kathmandu valley.
          </li>
          <li>
            Chobhar ICD is a unique facility in its own as the ICD deals in both <strong>EXIM and DOMESTIC</strong> cargo.
          </li>
          <li>
            These facilities cut down overhead expenses of exporters/importers of respective regions significantly and eliminate business uncertainties.
          </li>
          <li>
            The Company also provides <strong>Tailor-Made Storage Solutions</strong> that align with specific business requirements, offering a range of benefits beyond basic storage services.
          </li>
          <li>
            Automated Warehousing Solutions like <strong>Warehouse Management System (WMS)</strong> streamline inventory processing, reduce errors, and optimize storage.
          </li>
          <li>
            The Nepal Govt. has introduced policies to encourage adoption of EVs. Consequently, there's been a rise in EV imports, and <strong>Chobhar ICD is well equipped with state-of-the-art warehouses</strong> and adequate space to accommodate growing EV inventory and their components.
          </li>
          <li>
            All the terminals are equipped with fire-fighting hydrant systems and sufficient cylinders to handle small incidents.
          </li>
          <li>
            These terminals bring the advantages of the gateway ports to the very doorsteps of exporters/importers across Nepal.
          </li>
          <li>
            To ensure 24-hour power supply, there's a backup arrangement of Diesel Generators ranging from 82.5 KVA to 450 KVA.
          </li>
          <li>
            These facilities are well connected to the gateway ports of Kolkata/Haldia and Vizag (India) by road and rail.
          </li>
          <li>
            All terminals have Grade-A category warehouses and are equipped with Digital Weighbridges.
          </li>
          <li>
            Availability of handling equipment like cranes, forklifts, and pallet trolleys.
          </li>
          <li>
            Availability of space for warehousing and 3PL operations.
          </li>
        </ul>
      </div>
    </section>
  );
}
