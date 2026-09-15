"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NgoPartners() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="bg-gray-100 py-20 text-gray-800" data-aos="fade-up">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">
            Collaboration & Community Support
          </span>
          <h2 className="sm:text-4xl text-3xl font-extrabold text-gray-900 mt-2">
            NGOs & Key Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
            {/* We partner with dedicated non-governmental organizations and community leaders to amplify refugee voices and deliver actionable humanitarian support. */}
            We partner with dedicated non-governmental organizations and community leaders to amplify the voices of marginalised communities and deliver meaningful support.

          </p>
          <div className="flex justify-center mt-4">
            <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
          </div>
        </div>

        {/* Featured Partner Card - Kiiran Foundation */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-gray-200 grid md:grid-cols-12 gap-0 items-center">
          {/* Image Container */}
          <div className="md:col-span-5 bg-gray-50 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 h-full">
            <div className="relative w-full max-w-xs aspect-square flex items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <img
                src="/images/Kiiran_Foundation.png"
                alt="Kiiran Care Foundation"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                Featured NGO Partner
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Kiiran Care Foundation
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {/* Kiiran Care Foundation is a humanitarian organization dedicated to supporting vulnerable populations, asylum seekers, and refugee children in Thailand. Through educational initiatives, food distribution, and community empowerment, Kiiran Care Foundation provides hope and sustainable assistance to displaced families. */}
                Kiiran Care Foundation is a humanitarian organization dedicated to supporting vulnerable and marginalised communities, underprivileged children, and families in need. Through educational initiatives, food distribution, and community empowerment, Kiiran Care Foundation provides hope and sustainable support to communities facing social and economic challenges.

              </p>

              {/* Key Focus Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="block text-sm font-semibold text-gray-900">🎓 Refugee Education</span>
                  <span className="text-xs text-gray-500">Learning support & school transportation</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="block text-sm font-semibold text-gray-900">🤝 Humanitarian Aid</span>
                  <span className="text-xs text-gray-500">Emergency relief & family care</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/ngo"
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-xl transition duration-300 shadow-md text-sm sm:text-base"
              >
                Learn More About Kiiran Foundation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
