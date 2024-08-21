import Head from 'next/head';

export default function Schedule() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex flex-col items-center">
      <Head>
        <title>Jadwal</title>
      </Head>

      {/* Header */}
      <header className="w-full bg-[#0A162C] p-4 text-white text-center relative">
        <div className="absolute left-4 top-4">
        <a href="/">
          <button>&#x2190;</button> {/* This button can be replaced with a back icon */}
        </a>
        </div>
        <h1 className="text-lg font-semibold">Jadwal</h1>
      </header>

      {/* Schedule Information */}
      <div className="bg-white w-[90%] mt-2 rounded-xl shadow-lg mx-4 py-6 justify-around flex">
        <div className="flex justify-start items-start px-4 flex-col">
          <p className="text-gray-500 text-sm">
            Jadwal keberangkatan Ratunggu dari
          </p>
          <p className="text-2xl font-semibold mt-1 text-black">Al-Madinah</p>
          </div>
          <div className='flex justify-center items-center'>
          <button className="text-[#0A162C] text-sm font-medium">Ubah</button>
          </div>
        
      </div>

      {/* Departure Times */}
      <div className="w-full p-4 flex flex-col items-center space-y-4">
        {/* First Direction */}
        <div className="w-full bg-[#EDF1E8] p-4 rounded-xl shadow-lg">
          <div className="text-center text-[#758A54] font-semibold">
            Ke arah Cikini
          </div>
          <div className="text-center text-4xl font-bold text-[#758A54] mt-2">
            11:33
          </div>
          <p className="text-center text-sm text-gray-500 mt-1">
            Keberangkatan selanjutnya
          </p>
          <div className="mt-2 space-y-2">
            {["11:38", "11:43", "11:48", "11:53", "12:00", "12:15"].map((time, index) => (
              <div
                key={index}
                className="bg-[#D1E2FB] text-center text-[#092143] py-1 rounded-lg"
              >
                {time}
              </div>
            ))}
          </div>
        </div>

        {/* Second Direction */}
        <div className="w-full bg-[#EDF1E8] p-4 rounded-xl shadow-lg">
          <div className="text-center text-[#67889C] font-semibold">
            Ke arah Istana
          </div>
          <div className="text-center text-4xl font-bold text-[#67889C] mt-2">
            11:35
          </div>
          <p className="text-center text-sm text-gray-500 mt-1">
            Keberangkatan selanjutnya
          </p>
          <div className="mt-2 space-y-2">
            {["11:41", "11:48", "11:56", "12:06", "12:16", "12:26"].map((time, index) => (
              <div
                key={index}
                className="bg-[#D1E2FB] text-center text-[#092143] py-1 rounded-lg"
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
