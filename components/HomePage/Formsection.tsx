

export default function Formsection() {
  return (
    <div
      className="  bg-cover bg-center lex items-center w-cover justify-center min-h-[400px] w-full"
      style={{ backgroundImage: "url('/images/image4.png')" }} 
    >
      <div className=" bg-opacity-50 w-full max-w-7xl mx-auto p-6 md:p-12 rounded-lg flex flex-col md:flex-row text-center justify-center gap-10 items-center">
        
        {/* Right Form */}
        <div className="w-full md:w-1/2 text-white flex flex-col items-center text-center  ">
          <h2 className="text-xl md:text-2xl font-bold mb-6 mt-2 md:mt-6 ">
            Fill the Form and Get a Quote
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-md outline-none border border-black bg-white text-black"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="p-3 rounded-md outline-none border border-black bg-white text-black"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 rounded-md outline-none border border-black bg-white text-black"
              />
              <input
                type="date"
                className="p-3 w-full md:w-[210px] rounded-md outline-none border border-black bg-white text-black"
              />
            </div>
            <div className="flex gap-4 col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="Other Details"
              className="p-3 rounded-md outline-none border border-black bg-white text-black"
            />
            <button
              type="submit"
             className="w-full md:w-[210px] bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300 p-3"
            >
              SEND
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
