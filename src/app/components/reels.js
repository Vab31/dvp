"use client";

import React, { use } from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function Reels() {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  });

  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleWatch = () => {
    router.push("/fullvideo");
  };

  const handleSubmit = async (e) => {
    //     console.log("hellow this  who")
    // //     console.log("inside prject look into it")
    //     e.preventDefault();
    //     const res = await fetch(`https://dvbe.vercel.app/save-email`, {
    //       method: 'POST',
    //       body: JSON.stringify({ email }),
    //       headers: { 'Content-Type': 'application/json' },
    //     });
    // router.push('/fullvideo');
    // console.log(res)
    // if (res.ok) {
    //   localStorage.setItem('user_email', email);
    // } else {
    //   alert('Something went wrong!');
    // }
  };

  return (
    <div>
  
        <div>
          {/* Section 1 */}
          <section
            className="text-gray-600 bg-gray-200 body-font"
            data-aos="fade-right"
          >
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-5 py-24">
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
                <h1 className="title-font text-2xl sm:text-3xl sm:mr-2 mr-0 sm:mb-4 my-2 font-bold text-gray-900">
                Advocating for Refugee Rights in Thailand: Tanyakorn Thippayapokin | Asylum Access Thailand Coordinator 
                  <br className="hidden lg:inline-block" />
                </h1>
                <p className="mb-8 leading-relaxed">
                  In this deeply moving episode of Displaced Voice Network,
                  Saira sits down with Tanyakorn Thippayapokin to discuss the
                  multifaceted journey of refugee rights and welfare in
                  Thailand. From policies and legal gaps to grassroots support
                  systems, this conversation uncovers what it truly means to
                  seek safety in a country that’s both welcoming and complex.
                </p>
                {/* <div className="flex justify-center">
                  <button
                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    onClick={handleWatch}
                  >
                    Watch 
                  </button>
                </div> */}
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div
                  style={{
                    padding: "56.25% 0 0 0",
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/1075999096?h=345c713c19&badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    title="intro"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 (Reversed layout) */}
          {/* <section className="text-gray-600 body-font" data-aos="fade-left">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <iframe
          className="rounded w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          height="315"
          src="https://www.youtube.com/embed/9ymhsjd2VeE"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="title-font text-3xl sm:text-4xl mb-4 font-bold text-gray-900">
          Before they sold out
          <br className="hidden lg:inline-block" />
          readymade gluten
        </h1>
        <p className="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.
        </p>
        <div className="flex justify-center">
          <button
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleWatch}
          >
            Watch More
          </button>
        </div>
      </div>
    </div>
  </section> */}
        </div>
  

      {/* {showForm && (
  <div>
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Enter your email to continue</h2>
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        placeholder="you@example.com"
        required
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition" onClick={handleSubmit}
      >
        Continue
      </button>
    </div>
    <p className="text-sm text-gray-500 mt-3">We’ll never share your email with anyone else.</p>
    </div>
)} */}
    </div>
  );
}
