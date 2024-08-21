"use client";
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function Home() {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Ensure the code only runs on the client-side
    if (typeof window !== 'undefined' && mapRef.current === null && mapContainerRef.current) {
      // Initialize the map only if it hasn't been initialized yet
      mapRef.current = L.map(mapContainerRef.current).setView([-6.200000, 106.816666], 13); // Coordinates for Jakarta
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f8]">
      <Head>
        <title>Route Finder</title>
      </Head>

      {/* Purple Div */}
      <div className='absolute top-0 -z-100'>
        <img src="/TolakMacet-removebg-preview.png" alt="Logo" className="w-40 h-40"/>
      </div>

      <div className="bg-[#0A162C] opacity-[90%] flex flex-col rounded-b-xl text-white z-10 p-4 pb-16">
        {/* Header */}
        <header>
          <h1 className="text-lg font-semibold">Halo, Aland Mulia Pratama</h1>
          <p className="text-sm">Mau kemana kita hari ini?</p>
        </header>
        
        {/* Route Finder */}
        <div className="bg-white rounded-xl text-black opacity-100 p-4 mt-4 shadow-lg mx-4">
          <div className="flex items-center justify-around mb-2">
            <div>
              <p className="text-blue-600 font-medium">Dari</p>
              <input
                type="text"
                value="Cikini"
                className="w-full text-black border-none focus:ring-0"
                readOnly
              />
            </div>
            <div className="rotate-90 text-gray-500 mr-11">&#x21c5;</div>
            <div>
              <p className="text-red-600 font-medium">Ke</p>
              <input
                type="text"
                value="Gondangdia"
                className="w-full text-black border-none focus:ring-0"
                readOnly
              />
            </div>
          </div>
          <button className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold">
            Cari Rute
          </button>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="flex-1 bg-gray-100 rounded-xl mt-[-40px] mx-4 relative">
        <div 
          id="map-container" 
          ref={mapContainerRef} 
          className="h-96 w-full rounded-xl overflow-hidden"
        >
          {/* This div is where the map will be displayed */}
        </div>
      </div>

      {/* Bottom Menu */}
      <nav className="bg-white p-4 mt-4 rounded-t-xl flex justify-around shadow-lg">
        <a href="/jadwal">
        <div className="text-center">
          <div className="bg-[#092143] text-white rounded-lg p-2 w-[63px] h-[63px]">
            <div className="text-lg">&#x1F4C5;</div>
          
          <p className="text-xs mt-1">Jadwal</p>
          </div>
        </div>
        </a>
        <div className="text-center">
          <div className="bg-[#092143] text-white rounded-lg p-2 w-[63px] h-[63px]">
            <div className="text-lg">&#x1F689;</div>
          
          <p className="text-xs mt-1">Stasiun</p>
          </div>
        </div>
        <a href="/tiket">
        <div className="text-center">
          <div className="bg-[#092143] text-white rounded-lg p-2 w-[63px] h-[63px]">
            <div className="text-lg">&#x1F4B3;</div>
          <p className="text-xs mt-1">Tiket</p>
          </div>
        </div>
        </a>
        <a href="/bantuan">
        <div className="text-center">
          <div className="bg-[#092143] text-white rounded-lg p-2 w-[63px] h-[63px]">
            <div className="text-lg">&#x1F4DA;</div>
          
          <p className="text-xs mt-1">Lainnya</p>
          </div>
        </div>
      </a>
      </nav>
    </div>
  );
}
