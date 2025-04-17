import React from 'react';

export default function Nav() {
  return (
    <div>
    <header className="text-black body-font bg-gray-300">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        
        {/* Logo - centered on mobile, left on desktop */}
        <div className="w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
          <a className="flex title-font font-medium items-center text-gray-900">
            <img
              src="/images/logo.png"
              alt="DVP logo"
              className="w-32 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 lg:w-52 lg:h-28 object-contain"
            />
          </a>
        </div>
  
        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center text-base justify-center md:justify-start w-full md:w-auto">
          <a className="mr-5 hover:text-gray-900" href="/home">Home</a>
          <a className="mr-5 hover:text-gray-900" href="/us">About Us</a>
          <a className="mr-5 hover:text-gray-900" href="/reel">Conference</a>
          <a className="mr-5 hover:text-gray-900" href="/journal">Journal</a>
        </nav>
      </div>
    </header>
  </div>
  
  
  );
}

