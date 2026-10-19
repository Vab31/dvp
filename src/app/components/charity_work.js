"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function CharityWork() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxData, setLightboxData] = useState(null); // { images: [], index: 0, title: "" }

  const events = [
    {
      id: "bang-khun-thian",
      title: "Bang Khun Thian Slums — Community Outreach",
      location: "Bang Khun Thian, Bangkok",
      tag: "Community Outreach",
      tshirtTag: "Team in Grey T-Shirts",
      tshirtColor: "bg-slate-100 text-slate-700 border-slate-300",
      description:
        "Our team spent a day with families in the Bang Khun Thian slum community, distributing food and essential supplies to support local households and contribute to the well-being of the community.",
      highlights: [
        "Food & essential groceries distributed",
        "Direct family welfare support",
        "Community well-being engagement",
      ],
      images: [
        { src: "/images/khun/1.jpg", alt: "Bang Khun Thian Slums - Team in grey T-shirts distributing food rations to families" },
        { src: "/images/khun/2.jpg", alt: "Bang Khun Thian Slums - Community outreach and distributing care packages" },
        { src: "/images/khun/3.jpg", alt: "Bang Khun Thian Slums - Delivering essential grocery packs to local households" },
        { src: "/images/khun/4.jpg", alt: "Bang Khun Thian Slums - Interacting with community elders and residents" },
        { src: "/images/khun/5.jpg", alt: "Bang Khun Thian Slums - Food distribution drive on the ground" },
        { src: "/images/khun/6.jpg", alt: "Bang Khun Thian Slums - Handing over supplies to families in need" },
        { src: "/images/khun/7.jpg", alt: "Bang Khun Thian Slums - Community engagement and support in Bangkok" },
        { src: "/images/khun/8.jpg", alt: "Bang Khun Thian Slums - Essential items delivery to households" },
        { src: "/images/khun/9.jpg", alt: "Bang Khun Thian Slums - Listening to community needs during field visit" },
        { src: "/images/khun/10.jpg", alt: "Bang Khun Thian Slums - Volunteer team providing relief packages" },
        { src: "/images/khun/11.jpg", alt: "Bang Khun Thian Slums - Group interaction with local residents" },
      ],
    },
    {
      id: "klongtoei",
      title: "Klongtoei Slums — Food Distribution Drive",
      location: "Klongtoei Slums, Bangkok",
      tag: "Food Distribution Drive",
      tshirtTag: "Team in Black T-Shirts",
      tshirtColor: "bg-neutral-900 text-white border-neutral-700",
      description:
        "As part of our community outreach efforts, Saira led a food distribution drive in the Klongtoei slum community, providing 300 meals to local residents.",
      highlights: [
        "300 fresh hot meals provided",
        "Led by Saira & local volunteers",
        "Frontline community food security",
      ],
      images: [
        { src: "/images/klong/1.jpg", alt: "Klongtoei Slums - Saira in black T-shirt handing out hot meal boxes to children" },
        { src: "/images/klong/2.jpg", alt: "Klongtoei Slums - Food distribution line with local residents" },
        { src: "/images/klong/3.jpg", alt: "Klongtoei Slums - Providing 300 fresh meals to families in need" },
        { src: "/images/klong/4.jpg", alt: "Klongtoei Slums - Volunteer meal packaging and prep station" },
        { src: "/images/klong/5.jpg", alt: "Klongtoei Slums - Saira organizing lunch distribution drive" },
        { src: "/images/klong/6.jpg", alt: "Klongtoei Slums - Community members receiving meal packages" },
        // { src: "/images/klong/7.jpg", alt: "Klongtoei Slums - Serving local households in the Klongtoei community" },
        { src: "/images/klong/8.jpg", alt: "Klongtoei Slums - Direct food relief drive on the ground" },
        { src: "/images/klong/9.jpg", alt: "Klongtoei Slums - Connecting with families during meal distribution" },
        { src: "/images/klong/10.jpg", alt: "Klongtoei Slums - Distributing fresh food supplies to residents" },
        { src: "/images/klong/11.jpg", alt: "Klongtoei Slums - Community support in Klongtoei informal settlements" },
        { src: "/images/klong/12.jpg", alt: "Klongtoei Slums - Saira and volunteers completing the 300-meal drive" },
      ],
    },
  ];

  const filteredEvents =
    activeTab === "all"
      ? events
      : events.filter((ev) => ev.id === activeTab);

  const openLightbox = (images, index, title) => {
    setLightboxData({ images, index, title });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!lightboxData) return;
    setLightboxData({
      ...lightboxData,
      index:
        (lightboxData.index - 1 + lightboxData.images.length) %
        lightboxData.images.length,
    });
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (!lightboxData) return;
    setLightboxData({
      ...lightboxData,
      index: (lightboxData.index + 1) % lightboxData.images.length,
    });
  };

  return (
    <section id="charity-work" className="py-20 bg-slate-50 text-gray-800">
      <div className="container max-w-6xl mx-auto px-5">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-amber-700 bg-amber-100 uppercase mb-4 border border-amber-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-amber-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Community Impact in Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            On-Ground Charity Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto italic font-medium">
            Beyond ideas and initiatives, we believe in creating meaningful impact through action.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-amber-500 inline-flex"></div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === "all"
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
          >
            All Initiatives ({events.reduce((acc, ev) => acc + ev.images.length, 0)} Photos)
          </button>
          <button
            onClick={() => setActiveTab("bang-khun-thian")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${activeTab === "bang-khun-thian"
                ? "bg-slate-700 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
            Bang Khun Thian Slums (Grey T-Shirts)
          </button>
          <button
            onClick={() => setActiveTab("klongtoei")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${activeTab === "klongtoei"
                ? "bg-neutral-900 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            Klongtoei Slums (Black T-Shirts)
          </button>
        </div>

        {/* Event Cards Showcase */}
        <div className="space-y-16">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-lg shadow-gray-200/60 overflow-hidden"
            >
              {/* Event Header Block */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-gray-100">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {event.tag}
                    </span>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${event.tshirtColor}`}
                    >
                      {event.tshirtTag}
                    </span>
                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {event.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    “{event.description}”
                  </p>
                </div>

                {/* Event Highlights List */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 min-w-[260px] flex flex-col justify-center">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Initiative Highlights
                  </h4>
                  <ul className="space-y-2">
                    {event.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-emerald-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {hl}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-gray-500 font-medium">
                    📸 {event.images.length} verified on-ground photos
                  </div>
                </div>
              </div>

              {/* Responsive Photo Gallery Grid */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Event Photo Documentation
                  </span>
                  <span className="text-xs text-gray-400">
                    Click any image to view in full resolution
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {event.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      onClick={() => openLightbox(event.images, imgIdx, event.title)}
                      className="group relative aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-200 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                        <span className="bg-white/95 text-gray-900 text-[10px] sm:text-xs font-bold px-2 py-1 rounded-md shadow flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5 text-amber-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                          View #{imgIdx + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxData && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 text-white">
              <div>
                <h4 className="text-base font-bold text-white line-clamp-1">
                  {lightboxData.title}
                </h4>
                <p className="text-xs text-neutral-400">
                  Photo {lightboxData.index + 1} of {lightboxData.images.length}
                </p>
              </div>
              <button
                onClick={closeLightbox}
                className="w-9 h-9 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 flex items-center justify-center transition-colors"
                aria-label="Close photo preview"
              >
                ✕
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black flex items-center justify-center select-none">
              <img
                src={lightboxData.images[lightboxData.index].src}
                alt={lightboxData.images[lightboxData.index].alt}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors border border-white/20"
                aria-label="Previous photo"
              >
                &#8592;
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors border border-white/20"
                aria-label="Next photo"
              >
                &#8594;
              </button>
            </div>

            {/* Modal Footer Caption */}
            <div className="px-6 py-4 bg-neutral-950 text-neutral-300 text-xs sm:text-sm border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-neutral-400">
                {lightboxData.images[lightboxData.index].alt}
              </span>
              <span className="text-xs text-amber-400 font-semibold flex-shrink-0">
                Use arrows to navigate
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
