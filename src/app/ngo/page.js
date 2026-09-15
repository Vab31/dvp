"use client";

import React, { useEffect } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NgoPage() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 antialiased flex flex-col justify-between">
      <div>
        <Nav />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 via-neutral-800 to-gray-900 text-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center" data-aos="fade-down">
            <span className="bg-amber-500/20 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider border border-amber-400/30 inline-block mb-4">
              NGO & Community Partner Spotlight
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
              Kiiran Care Foundation
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {/* Empowering refugee communities, supporting underprivileged youth, and providing vital humanitarian aid to displaced families in Thailand. */}
              Empowering marginalised communities, supporting underprivileged youth, and providing vital support to underserved families.

            </p>
          </div>
        </section>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Card Overview Section */}
          <div
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-16 border border-gray-100 grid lg:grid-cols-12 gap-10 items-center"
            data-aos="fade-up"
          >
            {/* Logo Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm w-full max-w-sm flex items-center justify-center">
                <img
                  src="/images/Kiiran_Foundation.png"
                  alt="Kiiran Care Foundation Logo"
                  className="w-full h-auto object-contain max-h-64"
                />
              </div>
            </div>

            {/* Overview Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-amber-600 font-bold uppercase tracking-wider text-xs">
                About the Foundation
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Bridging Hope and Education for Displaced Families
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                <strong>Kiiran Care Foundation</strong> is a non-governmental organization focused on restoring dignity and providing essential services to marginalised and vulnerable communities, with a strong focus on underprivileged children and families.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Through grassroots initiatives, Kiiran Care Foundation provides safe educational environments, school transportation, food distribution, and emergency support to families who have fled conflict and persecution in countries across the region and beyond.
              </p>
            </div>
          </div>

          {/* Core Initiatives Section */}
          <div className="mb-20" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Key Impact Areas & Programs
              </h2>
              <p className="text-gray-500 mt-2">
                How Kiiran Care Foundation makes a meaningful difference on the ground.
              </p>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition">
                <div>
                  <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">
                    📚
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Youth Education
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {/* Supporting refugee learning centers and providing transport, books, and language education for displaced children who lack access to formal public schooling. */}
                    Supporting learning centres and providing transport, books, and educational resources for children from marginalised communities who lack access to quality education.

                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition">
                <div>
                  <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">
                    🍲
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Humanitarian Relief & Care
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Distributing monthly food packages, hygiene kits, and emergency medical assistance to urban refugee families living in vulnerable circumstances.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition">
                <div>
                  <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-2xl font-bold mb-6">
                    🌱
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Community Empowerment
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Offering skill-building workshops, vocational guidance, and support networks to foster resilience, self-reliance, and dignity for displaced parents.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Impact Section - Official Foundation Data */}
          <div className="mb-16" data-aos="fade-up">
            <div className="text-center mb-12">
              <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">
                Community Impact
              </span>
              <div className="w-16 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Impact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Card 1: Meals Distributed */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-2">
                    Meals Distributed To Families
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    Nutritious meals and food rations distributed to underprivileged families and individuals every month:
                  </p>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-teal-600 font-mono">
                  9,920+ <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Meals / Month</span>
                </div>
              </div>

              {/* Card 2: Families Reached */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-2">
                    Families Reached Weekly
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    Number of families receiving food, healthcare, and essential support through our outreach programs every week:
                  </p>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-teal-600 font-mono">
                  180+ <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Families / Week</span>
                </div>
              </div>

              {/* Card 3: Active Volunteers */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-2">
                    Active Volunteers On The Ground
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    Dedicated volunteers actively serving communities through our healthcare, education, and relief programs:
                  </p>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-teal-600 font-mono">
                  23+ <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Volunteers</span>
                </div>
              </div>
            </div>

            {/* Bottom Card: Children Supported Through Education */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-2">
                Children Supported Through Education
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                Children supported through school transportation, learning centers, school supplies, and skill-building workshops across our programs:
              </p>
              <div className="text-2xl sm:text-3xl font-black text-teal-600 font-mono">
                950+ <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Children Supported</span>
              </div>
            </div>
          </div>

          {/* Partnership Statement */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 text-center" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Displaced Voices Network & Kiiran Care Foundation Partnership
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
              {/* Together with Kiiran Care Foundation, Displaced Voices Network works to bring stories from the ground to a global audience—raising awareness, advocating for policy improvements, and mobilizing resources for refugee rights and welfare. */}

              Together with Kiiran Care Foundation, Displaced Voices Network works to bring stories from the ground to a wider audience—raising awareness, advocating for policy improvements, and mobilizing resources to support marginalised communities and promote their rights and well-being.

            </p>
            <a
              href="/home"
              className="inline-block bg-gray-900 hover:bg-amber-600 text-white font-medium px-8 py-3.5 rounded-xl transition duration-300 shadow-md"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
