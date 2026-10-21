"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NgoPartners() {
  return (
    <section id="ngo-partners" className="bg-gray-100 py-20 text-gray-800 scroll-mt-10">
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
            We partner with dedicated non-governmental organizations, community associations, and leaders to amplify the voices of marginalised communities and deliver meaningful support.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
          </div>
        </div>

        {/* Partners Grid / Cards */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Partner Card 1 - Kiiran Foundation */}
          <div id="kiran-foundation" className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 grid md:grid-cols-12 gap-0 items-center scroll-mt-20">
            {/* Image Container */}
            <div className="md:col-span-5 bg-gray-50 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 h-full">
              <div className="relative w-full max-w-xs aspect-square flex items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <img
                  src="/images/Kiiran_Foundation.png"
                  alt="Kiiran Care Foundation Logo"
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
                  Kiiran Care Foundation is a humanitarian organization dedicated to supporting vulnerable and marginalised communities, underprivileged children, and families in need. Through educational initiatives, food distribution, and community empowerment, Kiiran Care Foundation provides hope and sustainable support to communities facing social and economic challenges.
                </p>

                {/* Key Focus Highlights */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <span className="block text-sm font-semibold text-gray-900">🎓 Education</span>
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

          {/* Partner Card 2 - Thai - Uttarakhand Association */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 grid md:grid-cols-12 gap-0 items-center">
            {/* Image Container */}
            <div className="md:col-span-5 bg-emerald-50/40 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 h-full">
              <div className="relative w-full max-w-xs aspect-square flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-emerald-100">
                <img
                  src="/images/thai-uttarakhand-association.png"
                  alt="Thai - Uttarakhand Association Official Crest"
                  className="w-40 h-40 object-contain hover:scale-105 transition-transform duration-300"
                />
                <span className="mt-3 text-xs font-bold text-emerald-800 text-center uppercase tracking-wider">
                  Thai - Uttarakhand Association
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Community & Environmental Partner
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Thai - Uttarakhand Association
                </h3>
                <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wider mb-4">
                  Leadership: Dr. Chandra Shekhar Silori (President)
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  The Thai - Uttarakhand Association connects diaspora and local communities across Thailand, actively promoting cultural integration, mutual community welfare, and environmental stewardship. Through partnerships with international organizations like RECOFTC (The Center for People and Forests), the association supports participatory forestry, climate change resilience, and grassroots empowerment for local and marginalised populations.
                </p>

                {/* Key Focus Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-100">
                    <span className="block text-sm font-semibold text-gray-900">🌲 Participatory Forestry</span>
                    <span className="text-xs text-gray-500">Community governance & climate action</span>
                  </div>
                  <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-100">
                    <span className="block text-sm font-semibold text-gray-900">🤝 Community Empowerment</span>
                    <span className="text-xs text-gray-500">Diaspora welfare & cultural integration</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://drive.google.com/file/d/1aDKeckDNliR8n3U1xJP4Pk-cqE3E5r2F/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-3 rounded-xl transition duration-300 shadow-md text-sm sm:text-base gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Dr. Chandra Silori Podcast &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Partner Card 3 - Bangkok Community Help Foundation */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 grid md:grid-cols-12 gap-0 items-center">
            {/* Image / Logo Container */}
            <div className="md:col-span-5 bg-blue-50/30 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 h-full">
              <a
                href="https://bangkokcommunityhelp.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full max-w-xs aspect-square flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-blue-100 hover:border-blue-300 transition group cursor-pointer"
                title="Visit Bangkok Community Help Foundation official website"
              >
                <img
                  src="/images/bangkok-community-help.png"
                  alt="Bangkok Community Help Foundation Logo"
                  className="w-40 h-40 object-contain hover:scale-105 transition-transform duration-300"
                />
                <span className="mt-3 text-xs font-bold text-blue-900 text-center uppercase tracking-wider group-hover:text-blue-700 flex items-center gap-1">
                  Bangkok Community Help Foundation ↗
                </span>
              </a>
            </div>

            {/* Content Container */}
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Community Food Security Partner
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Bangkok Community Help Foundation
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  The Bangkok Community Center began providing food to people during the COVID-19 pandemic and has continued this work ever since, supporting people in the community through ongoing food assistance.
                </p>

                {/* Key Focus Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-100">
                    <span className="block text-sm font-semibold text-gray-900">🍲 Food Distribution & Relief</span>
                    <span className="text-xs text-gray-500">Essential meal support for local communities</span>
                  </div>
                  <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-100">
                    <span className="block text-sm font-semibold text-gray-900">🤝 Ongoing Community Care</span>
                    <span className="text-xs text-gray-500">Initiated during COVID-19 and sustained today</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://drive.google.com/file/d/1NQlH07PN3NDzBRMHuABdztvcbHKDQH1N/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300 shadow-md text-sm sm:text-base gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Friso Cornelis Poldervaart Podcast &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
