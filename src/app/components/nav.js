import React from 'react';

export default function Nav() {
  return (
    <div>
      <header className="text-black body-font bg-gray-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="/images/logo.png"
              alt="DVP logo"
              className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16 object-contain"
            />
          </a>
          <nav className="md:ml-auto md:mr-auto ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900" href="/home">Home</a>
            <a className="mr-5 hover:text-gray-900" href="/us">About Us</a>
            <a className="mr-5 hover:text-gray-900" href="/reel">Conference Clips</a>
          </nav>
          <a href='https://forms.gle/h5ZjqrjVRYNTPaNMA'>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Contact Us
          </button>
          </a>
        </div>
      </header>
    </div>
  );
}

