"use client";

import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

export default function Counter() {
  const [visitorCount, setVisitorCount] = useState(53);

  useEffect(() => {
    fetch('https://dvbe.vercel.app/get-em')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.count) {
          setVisitorCount(data.count);
        }
      })
      .catch((error) => {
        console.error('Error fetching visitor count:', error);
      });
  }, []);

  return (
    <section className="bg-white pb-20 pt-4">
      <div className="container px-5 mx-auto max-w-6xl">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              <CountUp end={visitorCount} duration={2.5} />+
            </h3>
            <p className="text-gray-600 font-medium text-base sm:text-lg mt-1">
              Number Of Unique Visitors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
