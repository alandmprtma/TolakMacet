"use client";
import { useRouter } from 'next/navigation';

export default function HelpPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f8]">
     <div className='absolute top-0 -z-100'>
        <img src="/TolakMacet-removebg-preview.png" alt="Logo" className="w-40 h-40"/>
      </div>

      <div className="bg-[#0A162C] opacity-[90%] flex flex-col rounded-b-xl text-white z-10 p-4">
        {/* Header */}
        <header className='ml-[150px]'>
          <h1 className="text-3xl font-semibold mt-[50px]">Butuh Bantuan?</h1>
            <p className="text-sm">Kami siap membantu Anda</p>
        </header>
    </div>

      <main className="flex-1 p-4">

        <div className="mt-4 space-y-4">
          {/* WhatsApp */}
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <div className="text-[#00ACEE] text-3xl mr-4">&#x1F4F1;</div>
            <div>
              <p className="font-semibold text-black">WhatsApp</p>
              <p className="text-gray-600">Layanan melalui WhatsApp Official</p>
            </div>
          </div>

          {/* Call Center */}
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <div className="text-[#00ACEE] text-3xl mr-4">&#x1F4DE;</div>
            <div>
              <p className="font-semibold text-black">Call Center</p>
              <p className="text-gray-600">Menghubungi Call Center kami 12345</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <div className="text-[#00ACEE] text-3xl mr-4">&#x2709;&#xFE0F;</div>
            <div>
              <p className="font-semibold text-black">Email</p>
              <p className="text-gray-600">Kirim ke Email Official TolakMacet</p>
            </div>
          </div>

          {/* Pelaporan */}
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <div className="text-[#00ACEE] text-3xl mr-4">&#x1F6A9;</div>
            <div>
              <p className="font-semibold text-black">Pelaporan</p>
              <p className="text-gray-600">Buat aduan terkait kendala transportasi umum</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <div className="text-[#00ACEE] text-3xl mr-4">&#x2753;</div>
            <div>
              <p className="font-semibold text-black">FAQ</p>
              <p className="text-gray-600">Berisi pertanyaan umum</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-white p-4 flex justify-around items-center border-t border-gray-200">
      <a href="/bantuan">
        <div onClick={() => router.push('/jadwal')} className="flex flex-col items-center text-[#092143]">
          <div className="bg-[#092143] text-white rounded-lg p-3 mb-1">&#x1F4C5;</div>
          <p className="text-sm">Jadwal</p>
        </div>
        </a>
        <div onClick={() => router.push('/stasiun')} className="flex flex-col items-center text-[#092143]">
          <div className="bg-[#092143] text-white rounded-lg p-3 mb-1">&#x1F689;</div>
          <p className="text-sm">Stasiun</p>
        </div>
        <a href="/tiket">
        <div onClick={() => router.push('/tiket')} className="flex flex-col items-center text-[#092143]">
          <div className="bg-[#092143] text-white rounded-lg p-3 mb-1">&#x1F3AB;</div>
          <p className="text-sm">Tiket</p>
        </div>
        </a>
        <a href="/bantuan">
        <div className="flex flex-col items-center text-[#092143]">
          <div className="bg-[#092143] text-white rounded-lg p-3 mb-1">&#x1F4DA;</div>
          <p className="text-sm">Lainnya</p>
        </div>
        </a>
      </footer>
    </div>
  );
}
