"use client";

import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function PoliticsPaperPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between text-gray-800 antialiased">
      <div>
        <Nav />

        {/* Header Section */}
        <section className="bg-gradient-to-r from-gray-900 via-neutral-800 to-gray-900 text-white py-12 px-6 shadow-md">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-400/30 inline-block mb-3">
                Research & Politics Paper
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                Saira Gulati — Politics Paper
              </h1>
              <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-2xl">
                Explore the research paper on political dynamics, refugee rights, and global human rights discourse by Saira Gulati.
              </p>
            </div>

            {/* Quick Action Controls */}
            <div className="flex items-center gap-3">
              <a
                href="/Saira-Gulati-Politics-3.pdf"
                download="Saira-Gulati-Politics-Paper.pdf"
                className="bg-amber-500 hover:bg-amber-600 text-gray-950 font-semibold px-5 py-2.5 rounded-xl transition duration-200 shadow-md text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Download PDF
              </a>
              <a
                href="/Saira-Gulati-Politics-3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-4 py-2.5 rounded-xl transition duration-200 text-sm flex items-center gap-2"
              >
                Open Fullscreen ↗
              </a>
            </div>
          </div>
        </section>

        {/* Embedded PDF Viewer Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Viewer Toolbar */}
            <div className="bg-gray-100 px-6 py-3 border-b border-gray-200 flex justify-between items-center text-xs text-gray-500 font-medium">
              <span>📄 Document: Saira-Gulati-Politics-3.pdf</span>
              <span className="hidden sm:inline">Interactive PDF Reader</span>
            </div>

            {/* PDF Frame */}
            <div className="w-full h-[75vh] min-h-[550px] bg-gray-200">
              <iframe
                src="/Saira-Gulati-Politics-3.pdf"
                className="w-full h-full border-none"
                title="Saira Gulati Politics Paper PDF"
              />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
