import React from 'react';

export default function Whyitmatter() {
  const cards = [
    {
      title: "Increased Awareness",
      description: "Amplifying marginalized voices educates the public on the lived realities, rights, and struggles of underrepresented groups in Thailand.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Community Solidarity",
      description: "Connecting local advocates, partners, and communities to support and uplift marginalized populations across Thailand.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Empowerment & Change",
      description: "Inspiring collective action to create positive change in policy reform, legal access, and sustainable living conditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="text-gray-600 body-font bg-white py-20">
      <div className="container px-5 mx-auto max-w-6xl">
        {/* Section Header - Matching site style */}
        <div className="text-center mb-16">
          <h2 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
            Why It Matters
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-gray-600">
            Understanding the challenges faced by marginalized communities in Thailand is crucial in fostering an inclusive and equitable society.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 group"
            >
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white mb-6 transition-colors duration-300 flex-shrink-0">
                {card.icon}
              </div>
              <h3 className="text-gray-900 text-xl font-bold mb-3">
                {card.title}
              </h3>
              <p className="leading-relaxed text-gray-600 text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
