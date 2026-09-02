// import React from "react";

// export default function Us() {
//   return (
//     <div>
//       <div
//         className="relative h-80 w-full  bg-cover bg-center bg-white"
//         style={{ backgroundImage: "url('/images/usimg.jpeg')" }}
//       >
//         {/* Black overlay */}
//         <div className="absolute inset-0 bg-black opacity-75"></div>

//         {/* Text content */}
//         <div className="relative flex items-center justify-center h-full text-center px-5">
//           <div>
//             <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4">
//               "Everyone Deserves Peace"
//             </h1>
     
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col text-center w-full pt-10 mt-10 ">
//         <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ">
//           Displaced Voices Network
//         </h1>
//       </div>
//       <div></div>

//       {/* <img className='my-20' src='/images/aboutus2.png' />

// <div className="flex flex-col text-center w-full">
//       <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ">Our Mission</h1>
//     </div>
//     <div> */}
//       <p className="font-medium my-4 text-xl mx-4 sm:mx-10 md:mx-20 lg:mx-28 xl:mx-36 leading-relaxed text-center text-gray-900">
//       We are a platform dedicated to raising awareness about the real-life struggles and strength of refugees. Our mission is to build empathy, spark important conversations, and drive action toward a more inclusive and supportive society.

// Through our podcast, we bring together a diverse range of voices—from refugees who share their personal journeys, to activists, social workers, and policymakers who are actively working to improve refugee welfare. These conversations not only shed light on the challenges faced by displaced communities but also explore practical solutions and policies that can help uplift them.

// By amplifying these stories, we aim to inspire change, promote understanding, and contribute to the global movement for refugee rights and dignity.{" "}
//       </p>

//       {/* </div> */}
//     </div>
//   );
// }


import React from "react";

export default function Us() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 antialiased">
      {/* Hero Section */}
      <div
        className="relative h-[450px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/usimg.jpeg')" }}
      >
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-neutral-900" />

        {/* Text content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Our Core Belief
          </span>
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl italic leading-tight">
            "Equal Opportunity & Dignity for All Communities"
          </h1>
          <div className="mt-6 w-20 h-1 bg-amber-500 rounded-full"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-24">
        
        {/* Brand / Mission Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center border border-gray-100">
          <h2 className="sm:text-4xl text-3xl font-black tracking-tight text-gray-900 mb-4">
            Displaced Voices Network
          </h2>
          <div className="w-12 h-1 bg-gray-300 mx-auto mb-8 rounded-full"></div>

          {/* Subtitle / Intro Hook */}
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            We are a platform dedicated to raising awareness about the struggles, resilience, and rights of marginalized communities in Thailand. Our mission is to build empathy, spark meaningful dialogue, and drive action toward a more inclusive and supportive society.
          </p>

          <hr className="border-gray-100 my-10" />

          {/* Detailed Narrative Layout */}
          <div className="grid md:grid-cols-2 gap-8 text-left text-gray-600 leading-relaxed text-base sm:text-lg">
            <div className="space-y-4">
              <h3 className="text-gray-900 font-bold text-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Amplifying Through Media
              </h3>
              <p>
                Through our platform and discussions, we bring together a diverse range of voices—from local community members sharing personal experiences, to grassroots activists, social workers, and policymakers actively working to uplift marginalized Thai communities.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-gray-900 font-bold text-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Driving Real Change
              </h3>
              <p>
                These conversations shed light on structural challenges and policy gaps while exploring actionable solutions to empower underrepresented populations. By amplifying these stories, we aim to inspire action, foster understanding, and advance social justice across Thailand.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}