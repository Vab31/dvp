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
            <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto">
              Let me know which tone you're aiming for—whether it's emotional to
              touch hearts, hopeful to inspire change, or powerful to spark
              action—and I can provide more tailored options that match your
              message perfectly.
            </p>
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
        Displaced Voices is a documentation platform born from the journeys of
        refugees who have overcome immense challenges in cross border migration.
        Through our platform, we share their powerful narratives—of resilience,
        leadership, and transformation. Each episode offers a unique lens into
        the lived experiences behind the title, fostering empathy,
        understanding, and inspiration across borders.{" "}
      </p>

      {/* </div> */}
    </div>
  );
}
