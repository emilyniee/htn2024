"use client";

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'; // Import Script component from Next.js
import pfp from '../app/images/pfp.jpeg';
import Navbar from './components/navbar.js';
import mango from '../app/images/mango.png';
import bg from '../app/images/bg.png'; // Import the background image

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center text-black p-16 min-h-screen"
      style={{
        backgroundImage: `url(${bg.src})`, // Set the imported image as the background
        backgroundSize: 'cover',           // Make the background cover the entire div
        backgroundPosition: 'center',      // Center the background image
        backgroundRepeat: 'no-repeat',     // Prevent the background from repeating
      }}
    >
      <div className="flex-grow grid grid-rows-3 grid-flow-col gap-4 w-3/4 mt-8">
        <div className="row-span-4 bg-lightGreen p-8 rounded-lg text-center shadow-md flex flex-col justify-center items-center text-xl">
          <h1 className="bg-green px-2 rounded-lg">PROFILE</h1>
          <Image 
            src={pfp}
            alt="Profile Picture"
            width={150}    
            height={150}   
            className="rounded-full my-4 mx-auto" 
          />
          <h2>Name: John Doe</h2>
          <h2>Role: Software Dev</h2>
          <h2>School: UofW</h2>
        </div>

        {/* Code Input and Go to Event Button */}
        <div className="col-span-6 bg-lightGreen p-8 rounded-lg shadow-md text-xl">
          <input 
            type="text" 
            placeholder="enter code here:" 
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link href="/map" className='flex'>
            <button className="ml-auto text-green-700 text-black text-lg hover:bg-orange-600 transition duration-300">
              go to event
            </button>
          </Link>
        </div>

        {/* Events Buttons */}
        <div className="row-span-2 col-span-2 space-x-2 text-xl">
          <Link href="/events">
            <button className="text-black py-3 px-6 rounded-lg text-orange-700 text-lg hover:bg-yellow-600 transition duration-300 bg-lightGreen shadow-md">
              Explore events
            </button> 
          </Link>
          <Link href="/mingos">
            <button className="text-black py-3 px-6 rounded-lg text-orange-700 text-lg hover:bg-yellow-600 transition duration-300 bg-lightGreen shadow-md">
              View your mingos
            </button> 
          </Link>
        </div>

        {/* Mango Icon */}
        <div className="fixed bottom-4 right-4">
          <Image 
            src={mango}
            alt="Bottom Right Icon"
            width={200}
            height={230}
          />
        </div>
      </div>

      <Script
        src="https://cdn.voiceflow.com/widget/bundle.mjs"
        type="text/javascript"
        onLoad={() => {
          window.voiceflow.chat.load({
            verify: { projectID: '66e6888f92f43d1a8236d5aa' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          });
        }}
      />
    </div>
  );
}
