"use client";
import { useState } from 'react';

export default function TicketPurchase() {
  const [ticketCount, setTicketCount] = useState(2);
  const [travelOption, setTravelOption] = useState('Sekali Jalan'); // Default option is 'Sekali Jalan'

  const increaseTicketCount = () => setTicketCount(ticketCount + 1);
  const decreaseTicketCount = () => {
    if (ticketCount > 1) setTicketCount(ticketCount - 1);
  };

  // Determine the price based on the selected travel option
  const ticketPrice = travelOption === 'Sekali Jalan' ? 75000 : 120000;
  const totalPrice = ticketPrice * ticketCount;

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f8]">
      {/* Header */}
      <header className="bg-[#092143] text-white flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href="/" className="mr-4">
          <button className="mr-4">&#x2630;</button> {/* Hamburger menu icon */}
          </a>
          <h1 className="text-lg font-semibold">Beli Tiket</h1>
        </div>
        <button className="text-lg">&#x1F50D;</button> {/* Search icon */}
      </header>

      <main className="flex-1 p-4">
        {/* Ticket Purchase Section */}
        <h2 className="text-xl font-bold text-black">Pembelian Tiket</h2>
        <section className="bg-white rounded-lg p-4 shadow-lg">
          <div className="flex justify-between bg-[#f0f0f0] p-4 text-black rounded-lg mt-4">
            <div>
              <p className="font-semibold">Dari Stasiun</p>
              <p>Cikampek</p>
            </div>
            <div className="flex items-center text-gray-500 mx-2">
              &#x2192;
            </div>
            <div>
              <p className="font-semibold">Ke Stasiun</p>
              <p>Tasikmalaya</p>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg mt-4 flex">
            <div className="items-center justify-center flex">
              <p className="text-blue-500 text-4xl">&#x1F3AB;</p> {/* Ticket icon */}
            </div>
            <div className="ml-4">
              <p className="font-semibold text-blue-500">Informasi Masa Berlaku Tiket</p>
              <p className="text-blue-400">Tiket hanya dapat digunakan pada hari yang sama.</p>
            </div>
          </div>

          {/* Ticket Quantity */}
          <div className="mt-4">
            <h3 className="font-semibold">Jumlah Tiket</h3>
            <div className="flex items-center justify-between bg-[#f0f0f0] p-4 rounded-lg mt-2">
              <button onClick={decreaseTicketCount} className="text-2xl text-black">&#x2212;</button> {/* Minus icon */}
              <span className="text-lg font-semibold text-black">{ticketCount}</span>
              <button onClick={increaseTicketCount} className="text-2xl text-black">&#43;</button> {/* Plus icon */}
            </div>
          </div>

          {/* Travel Options */}
          <div className="mt-4">
            <h3 className="font-semibold">Pilihan Perjalanan</h3>
            <div className="flex justify-between mt-2">
              <div
                className={`bg-white rounded-lg p-4 shadow-lg flex-1 mr-2 cursor-pointer ${
                  travelOption === 'Sekali Jalan' ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => setTravelOption('Sekali Jalan')}
              >
                <img src="/Map.png" alt="Sekali Jalan" className="rounded-lg w-full" />
                <p className="text-center text-black mt-2">Sekali Jalan</p>
              </div>
              <div
                className={`bg-white rounded-lg p-4 shadow-lg flex-1 ml-2 cursor-pointer ${
                  travelOption === 'Pulang Pergi' ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => setTravelOption('Pulang Pergi')}
              >
                <img src="/Map.png" alt="Pulang Pergi" className="rounded-lg w-full" />
                <p className="text-center text-black mt-2">Pulang Pergi</p>
              </div>
            </div>
          </div>

          {/* Purchase Details */}
          <div className="mt-4 text-black">
            <h3 className="font-semibold">Rincian Pembelian</h3>
            <p className="mt-2">Harga Tiket: {travelOption === 'Sekali Jalan' ? 'Rp 75.000' : 'Rp 120.000'}</p>
            <p className="mt-2">Total Tiket: {ticketCount}</p>
            <p className="font-semibold mt-2">Total Harga: Rp {totalPrice.toLocaleString()}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
