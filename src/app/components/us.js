import React from "react";

export default function Us() {
  return (
    <div>
      <div
        className="relative h-80 w-full  bg-cover bg-center"
        style={{ backgroundImage: "url('/images/usimg.jpeg')" }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Text content */}
        <div className="relative flex items-center justify-center h-full text-center px-5">
          <div>
            <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4">
              "Everyone Deserves Peace"
            </h1>
     
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center w-full pt-10 mt-10 ">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ">
          Displaced Voices Network
        </h1>
      </div>
      <div></div>

      {/* <img className='my-20' src='/images/aboutus2.png' />

<div className="flex flex-col text-center w-full">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ">Our Mission</h1>
    </div>
    <div> */}
      <p className="font-medium my-4 text-xl mx-4 sm:mx-10 md:mx-20 lg:mx-28 xl:mx-36 leading-relaxed text-center text-gray-900">
      We are a platform dedicated to raising awareness about the real-life struggles and strength of refugees. Our mission is to build empathy, spark important conversations, and drive action toward a more inclusive and supportive society.

Through our podcast, we bring together a diverse range of voices—from refugees who share their personal journeys, to activists, social workers, and policymakers who are actively working to improve refugee welfare. These conversations not only shed light on the challenges faced by displaced communities but also explore practical solutions and policies that can help uplift them.

By amplifying these stories, we aim to inspire change, promote understanding, and contribute to the global movement for refugee rights and dignity.{" "}
      </p>

      {/* </div> */}
    </div>
  );
}
