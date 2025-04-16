import React from 'react'

export default function Whyitmatter() {
  return (
    <div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Why It Matters</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Understanding the impact of refugee experiences is crucial in fostering a more empathetic and just world.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
  
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <div className="p-2 md:w-1/3 flex flex-col text-center items-center ">
            <div className="bg-gray-200 border-2 shadow-2xl p-3 rounded">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  className="icon" viewBox="0 0 24 24">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v2" />
                  <path d="M12 21v2" />
                  <path d="M4.22 4.22l1.42 1.42" />
                  <path d="M18.36 18.36l1.42 1.42" />
                  <path d="M1 12h2" />
                  <path d="M21 12h2" />
                  <path d="M4.22 19.78l1.42-1.42" />
                  <path d="M18.36 5.64l1.42-1.42" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Increased Awareness</h2>
                <p className="leading-relaxed text-base">
                  Amplifying refugee voices educates the public on the realities of displacement.
                </p>
              </div>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="p-2 md:w-1/3 flex flex-col text-center items-center">
          <div className="bg-gray-200 border-2 shadow-2xl p-3 rounded">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                className="icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12c1.5 2 3.5 2 5 0" />
                <path d="M9 10c1-1 2-1 3 0" />
                <path d="M10 8c0.5-1 1.5-1 2 0" />
                <path d="M2 12h20" />
                <path d="M12 2a10 10 0 0 1 0 20" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Global Solidarity</h2>
              <p className="leading-relaxed text-base">
                Connecting individuals across borders to support refugee communities.
              </p>
            </div>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="p-2 md:w-1/3 flex flex-col text-center items-center ">
            <div className='bg-gray-200 p-3 rounded border-2 shadow-2xl'>
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                className="icon" viewBox="0 0 24 24">
                <path d="M8 13v-2a1 1 0 0 1 1-1h2V9a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1v2" />
                <path d="M8 13v3a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-3" />
                <path d="M6 6l1 1" />
                <path d="M18 6l-1 1" />
                <path d="M12 2v2" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Empowerment and Change</h2>
              <p className="leading-relaxed text-base">
                Inspiring action and advocacy to create positive change in policies and attitudes.
              </p>
            </div>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  </div>
  
  )
}
