"use client";

import React, { useState } from "react";

// Extensible Research Publications Content Model
const publicationsData = [
  {
    id: "refugee-comparative-study",
    title: "When Faith Becomes a Reason to Flee: Jewish Refugees (1933–1945) and Rohingya Refugees (2012–Present)",
    subtitle: "A Comparative Historical Inquiry into Religious Persecution, Forced Migration & State Disenfranchisement",
    category: "Whitepaper & Comparative Research",
    categorySlug: "whitepaper",
    author: "Saira Gulati",
    role: "Lead Author & Founder, Displaced Voices Network",
    date: "2024",
    readTime: "18 min read",
    fileUrl: "/paper.pdf",
    downloadFilename: "When-Faith-Becomes-a-Reason-to-Flee-Saira-Gulati.pdf",
    description:
      "A rigorous comparative analysis examining how religious and identity-based persecution have been weaponized by state apparatuses to displace vulnerable populations. The study compares the institutional persecution of Jewish refugees during WWII with the ongoing plight of Rohingya refugees, analyzing citizenship revocation, international asylum failures, and human rights precedents.",
    highlights: [
      "Comparative historical framework evaluating systemic persecution across two distinct eras (1933–1945 and 2012–present)",
      "In-depth analysis of statutory disenfranchisement, Nuremberg Laws, and the 1982 Myanmar Citizenship Law",
      "Critical review of international refugee conventions and recommendations for contemporary asylum responsibility"
    ],
    tags: ["Refugee Studies", "Comparative History", "Human Rights Law", "Rohingya Crisis", "Asylum Governance"],
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    accentColor: "border-amber-500",
    iconBg: "bg-amber-500/10 text-amber-600"
  },
  {
    id: "diversity-fashionable-politics",
    title: "Diversity is Fashionable, But is it Valuable?",
    subtitle: "A Critical Political Analysis of Institutional Inclusivity, Corporate Discourse & Authentic Equity",
    category: "Political Essay & Policy Research",
    categorySlug: "politics",
    author: "Saira Gulati",
    role: "Author, Displaced Voices Network",
    date: "2024",
    readTime: "14 min read",
    fileUrl: "/Saira-Gulati-Politics-3.pdf",
    downloadFilename: "Diversity-is-Fashionable-Politics-Paper-Saira-Gulati.pdf",
    description:
      "A critical political and philosophical essay examining the widespread adoption of diversity rhetoric in contemporary institutions, education, and governance. The inquiry investigates whether modern diversity initiatives achieve meaningful structural redistribution and empathy, or whether they risk descending into performative tokenism and superficial branding.",
    highlights: [
      "Philosophical critique distinguishing between performative diversity gestures and substantive structural equity",
      "Empirical evaluation of representation in higher education admissions, workplace programs, and political leadership",
      "Framework advocating for deep cultural dialogue, active listening, and dignity-centered institutional reforms"
    ],
    tags: ["Political Philosophy", "Institutional Policy", "Ethics & Governance", "Social Equity", "Civic Education"],
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    accentColor: "border-emerald-500",
    iconBg: "bg-emerald-500/10 text-emerald-600"
  }
];

// Featured Research Project Model
const featuredResearchProject = {
  id: "displaced-voices-refugee-story",
  category: "Featured Research / Displaced Voices Story",
  title: "Displaced Voices: A Refugee's Story",
  description:
    "A research project by Saira documenting the lived experiences of a refugee through an interview, offering a closer look at the personal realities of displacement.",
  attribution: "Research by Saira",
  role: "Founder & Lead Researcher, Displaced Voices Network",
  destinationUrl: "https://27sairag.wixsite.com/displacedvoices",
  primaryCta: "Explore the Research",
  highlights: [
    "Firsthand oral history documentation capturing authentic refugee narratives",
    "Exploration of legal vulnerability, family displacement, and community resilience",
    "Independent digital research platform hosted with interactive storytelling"
  ],
  tags: ["Oral History", "Lived Realities", "Firsthand Interview", "Field Research"]
};

export default function WhitepaperResearch() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeReaderDoc, setActiveReaderDoc] = useState(null); // id of doc opened in reader, or null

  const filteredPublications =
    selectedCategory === "all"
      ? publicationsData
      : publicationsData.filter((doc) => doc.categorySlug === selectedCategory);

  const currentReadingDoc = publicationsData.find((doc) => doc.id === activeReaderDoc);

  return (
    <div className="bg-stone-50/60 min-h-screen text-gray-900 antialiased">
      {/* 1. EDITORIAL HEADER & HERO */}
      <section className="bg-gradient-to-b from-gray-900 via-neutral-900 to-gray-900 text-white pt-16 pb-20 px-6 sm:px-8 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb / Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Research & Publications
            </span>
            <span className="text-gray-500 text-sm">/</span>
            <span className="text-gray-400 text-sm font-medium">Displaced Voices Network</span>
          </div>

          {/* Heading & Subtitle */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Academic Inquiries, Policy Analyses & Firsthand Fieldwork
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              A curated collection of academic research, comparative human rights analyses, and firsthand oral histories by Saira and the Displaced Voices Network. We document the legal, social, and personal realities of displacement to inform policy, challenge preconceptions, and amplify community strength.
            </p>
          </div>

          {/* Research Pillar Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-800 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-base flex-shrink-0">
                ⚖️
              </div>
              <div>
                <h4 className="font-semibold text-white">Comparative Studies</h4>
                <p className="text-gray-400 text-xs mt-0.5">Rigorous historical analysis of forced displacement & refugee rights.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-base flex-shrink-0">
                🎙️
              </div>
              <div>
                <h4 className="font-semibold text-white">First-Person Fieldwork</h4>
                <p className="text-gray-400 text-xs mt-0.5">Direct oral interviews capturing lived realities and human resilience.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-base flex-shrink-0">
                📄
              </div>
              <div>
                <h4 className="font-semibold text-white">Open Access</h4>
                <p className="text-gray-400 text-xs mt-0.5">Freely readable and downloadable whitepapers for students, educators & advocates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-14 space-y-16">
        
        {/* 2. FEATURED RESEARCH PROJECT: SAIRA'S REFUGEE RESEARCH WEBSITE */}
        <section aria-labelledby="featured-research-heading">
          <div className="relative bg-gradient-to-br from-amber-50/70 via-white to-stone-100 rounded-3xl border border-amber-200/80 shadow-xl overflow-hidden p-6 sm:p-10 transition-all duration-300 hover:shadow-2xl">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Editorial Information & CTAs */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
                    <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                    {featuredResearchProject.category}
                  </div>

                  {/* Title */}
                  <h2 id="featured-research-heading" className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                    {featuredResearchProject.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                    {featuredResearchProject.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-6 text-sm text-gray-700">
                    {featuredResearchProject.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="text-amber-600 font-bold mt-0.5">✓</span>
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Attribution Block */}
                  <div className="flex items-center gap-3.5 p-3.5 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200/60 mb-8 max-w-md">
                    <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                      SG
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        Principal Investigator
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {featuredResearchProject.attribution}
                      </div>
                      <div className="text-xs text-gray-600">
                        {featuredResearchProject.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href={featuredResearchProject.destinationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base group"
                  >
                    <span>{featuredResearchProject.primaryCta}</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Preview / Editorial Mockup Card */}
              <div className="md:col-span-5">
                <a
                  href={featuredResearchProject.destinationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative rounded-2xl overflow-hidden border border-amber-300/80 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  aria-label="Open Saira's Refugee Research Website in new tab"
                >
                  {/* Mock Browser Topbar */}
                  <div className="bg-gray-100 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
                    </div>
                    <div className="bg-white px-3 py-0.5 rounded-md text-[11px] font-mono text-gray-600 truncate max-w-[210px] border border-gray-200 shadow-inner">
                      27sairag.wixsite.com/displacedvoices
                    </div>
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>

                  {/* Card Content & Preview Styling */}
                  <div className="p-6 bg-gradient-to-br from-stone-50 via-white to-amber-50/40 min-h-[300px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-md">
                          Digital Research Monograph
                        </span>
                        <span className="text-xs text-gray-400">Oral History Archive</span>
                      </div>

                      <div className="border-l-4 border-amber-500 pl-4 py-1 my-4">
                        <blockquote className="text-base sm:text-lg font-serif italic text-gray-800 leading-snug">
                          “Offering a closer look at the personal realities, resilience, and human dignity within displacement.”
                        </blockquote>
                        <div className="mt-2 text-xs font-semibold text-gray-600">
                          — Field Interview Documentation by Saira
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">Refugee Realities</span>
                        <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">Fieldwork</span>
                      </div>
                      <span className="text-xs font-semibold text-amber-700 group-hover:text-amber-800 flex items-center gap-1">
                        Open Project ↗
                      </span>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE PDF READER (IF EXPANDED) */}
        {activeReaderDoc && currentReadingDoc && (
          <section id="interactive-reader" className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden scroll-mt-8">
            {/* Reader Header Toolbar */}
            <div className="bg-gray-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <span className="text-amber-400 font-bold text-sm sm:text-base flex items-center gap-2">
                  <span>📖</span> Interactive Reader:
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-200 truncate max-w-xs sm:max-w-md">
                  {currentReadingDoc.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentReadingDoc.fileUrl}
                  download={currentReadingDoc.downloadFilename}
                  className="bg-amber-500 hover:bg-amber-600 text-gray-950 text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg transition duration-200 flex items-center gap-1.5 shadow"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download PDF</span>
                </a>

                <a
                  href={currentReadingDoc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-lg transition duration-200 flex items-center gap-1.5"
                >
                  <span>Fullscreen ↗</span>
                </a>

                <button
                  onClick={() => setActiveReaderDoc(null)}
                  className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition"
                  aria-label="Close reader"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="w-full bg-neutral-900 h-[75vh] min-h-[550px]">
              <iframe
                src={currentReadingDoc.fileUrl}
                className="w-full h-full border-none"
                title={currentReadingDoc.title}
              />
            </div>

            {/* Reader Footer Toolbar */}
            <div className="bg-gray-100 px-6 py-3 border-t border-gray-200 flex flex-wrap items-center justify-between text-xs text-gray-600">
              <div>
                Author: <strong className="text-gray-900">{currentReadingDoc.author}</strong> ({currentReadingDoc.role})
              </div>
              <div className="flex items-center gap-4">
                <span>Format: <strong>Open Document PDF</strong></span>
                <button
                  onClick={() => setActiveReaderDoc(null)}
                  className="text-gray-500 hover:text-gray-900 font-medium underline"
                >
                  Minimize Reader
                </button>
              </div>
            </div>
          </section>
        )}

        {/* 4. ACADEMIC WHITEPAPERS & RESEARCH PUBLICATIONS */}
        <section aria-labelledby="publications-list-heading">
          {/* Section Header with Category Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-gray-200">
            <div>
              <span className="text-amber-600 font-semibold tracking-wider uppercase text-xs">
                In-Depth Scholarship & Policy
              </span>
              <h2 id="publications-list-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                Publications & Whitepapers
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">
                Explore comprehensive research papers addressing political philosophy, comparative forced migration, and human rights governance.
              </p>
            </div>

            {/* Reusable Category Switcher / Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-gray-100 p-1.5 rounded-xl border border-gray-200 text-xs sm:text-sm font-medium">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedCategory === "all"
                    ? "bg-white text-gray-900 font-semibold shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                All Publications ({publicationsData.length})
              </button>
              <button
                onClick={() => setSelectedCategory("whitepaper")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedCategory === "whitepaper"
                    ? "bg-white text-gray-900 font-semibold shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Comparative Whitepapers
              </button>
              <button
                onClick={() => setSelectedCategory("politics")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedCategory === "politics"
                    ? "bg-white text-gray-900 font-semibold shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Political Analysis
              </button>
            </div>
          </div>

          {/* Publication Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPublications.map((pub) => {
              const isCurrentlyReading = activeReaderDoc === pub.id;

              return (
                <article
                  key={pub.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                    isCurrentlyReading ? "border-amber-500 ring-2 ring-amber-400/30" : "border-gray-200/90 hover:border-gray-300"
                  }`}
                >
                  {/* Top Details */}
                  <div className="p-6 sm:p-8">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${pub.badgeColor}`}>
                        {pub.category}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        {pub.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-snug">
                      {pub.title}
                    </h3>

                    {/* Subtitle */}
                    {pub.subtitle && (
                      <h4 className="text-xs sm:text-sm font-medium text-amber-800 mb-4 leading-relaxed">
                        {pub.subtitle}
                      </h4>
                    )}

                    {/* Author & Byline */}
                    <div className="flex items-center gap-2.5 text-xs text-gray-500 mb-5 pb-4 border-b border-gray-100">
                      <span className="font-semibold text-gray-800">By {pub.author}</span>
                      <span>•</span>
                      <span>{pub.date}</span>
                      <span>•</span>
                      <span className="text-gray-600">{pub.role}</span>
                    </div>

                    {/* Abstract / Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {pub.description}
                    </p>

                    {/* Research Key Takeaways */}
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/70 mb-6 space-y-2 text-xs sm:text-sm text-gray-700">
                      <div className="font-semibold text-gray-900 text-xs uppercase tracking-wider mb-2">
                        Key Research Focus:
                      </div>
                      {pub.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Keyword Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1 rounded-md font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Footer */}
                  <div className="px-6 sm:px-8 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl flex flex-wrap items-center justify-between gap-3">
                    {/* Read Online Button */}
                    <button
                      onClick={() => {
                        setActiveReaderDoc(isCurrentlyReading ? null : pub.id);
                        if (!isCurrentlyReading) {
                          setTimeout(() => {
                            const el = document.getElementById("interactive-reader");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }
                      }}
                      className={`inline-flex items-center gap-2 font-medium px-4 py-2 rounded-xl text-xs sm:text-sm transition duration-200 ${
                        isCurrentlyReading
                          ? "bg-amber-600 text-white shadow-sm"
                          : "bg-gray-900 hover:bg-amber-600 text-white shadow-sm"
                      }`}
                    >
                      <span>{isCurrentlyReading ? "Reading Online (Active)" : "Read Online"}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>

                    {/* Download & External Open Controls */}
                    <div className="flex items-center gap-2">
                      <a
                        href={pub.fileUrl}
                        download={pub.downloadFilename}
                        className="inline-flex items-center gap-1.5 text-xs text-gray-700 hover:text-amber-700 bg-white hover:bg-gray-100 border border-gray-200 px-3 py-2 rounded-xl transition"
                        title={`Download ${pub.title}`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>Download</span>
                      </a>

                      <a
                        href={pub.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 px-2 py-2 rounded-lg transition"
                        title="Open in new window"
                      >
                        <span>Fullscreen ↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
