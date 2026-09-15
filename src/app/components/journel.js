"use client";

import React, { useState } from "react";
import Head from "next/head";

export default function PdfPreview() {
  const [activePdf, setActivePdf] = useState("politics");

  const pdfFiles = {
    politics: {
      title: "Saira Gulati — Politics Paper",
      file: "/Saira-Gulati-Politics-3.pdf",
    },
    whitepaper: {
      title: "Displaced Voices Network Whitepaper",
      file: "/paper.pdf",
    },
  };

  return (
    <>
      <Head>
        <title>Research & Whitepaper — Displaced Voices Network</title>
        <meta name="description" content="View research papers and whitepapers by Saira Gulati" />
      </Head>

      <div className="min-h-screen bg-gray-900 flex flex-col justify-between text-white">
        {/* Top Control Bar */}
        <div className="bg-gray-800 px-6 py-4 border-b border-gray-700 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-bold text-lg">
              📄 Papers & Publications
            </span>

            {/* Document Switcher */}
            <div className="bg-gray-900 p-1 rounded-xl flex gap-1 border border-gray-700">
              <button
                onClick={() => setActivePdf("politics")}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition ${
                  activePdf === "politics"
                    ? "bg-amber-500 text-gray-950 font-bold shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Saira Gulati Politics Paper
              </button>
              <button
                onClick={() => setActivePdf("whitepaper")}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition ${
                  activePdf === "whitepaper"
                    ? "bg-amber-500 text-gray-950 font-bold shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Network Whitepaper
              </button>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <a
              href={pdfFiles[activePdf].file}
              download
              className="bg-amber-500 hover:bg-amber-600 text-gray-950 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition"
            >
              Download PDF
            </a>
            <a
              href={pdfFiles[activePdf].file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg transition"
            >
              Open Fullscreen ↗
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-gray-950">
          <iframe
            src={pdfFiles[activePdf].file}
            className="w-full h-[calc(100vh-140px)] border-none"
            title={pdfFiles[activePdf].title}
          />
        </div>
      </div>
    </>
  );
}