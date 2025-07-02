export default function VisionMission() {
  return (
    <section className="bg-white text-gray-800">
      {/* Image Section */}
      <div className="w-full h-[300px] sm:h-[400px] relative">
        <img
          src="/images/missionimg.png"
          alt="Vision and Mission"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">Vision and Mission</h2>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Vision Card */}
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">VISION</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                Become a leader in ICP/ICD/CFS management in Nepal.
              </li>
            </ul>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">MISSION</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                Nurture long-term and good relationships with all stakeholders, public or private, through growth, trust, and honoring commitments.
              </li>
              <li>
                Deliver quality services and create a benchmark for operation and management of ICP/ICD/CFS in Nepal.
              </li>
              <li>
                Create better value for end users through knowledge, expertise, and technologies.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
