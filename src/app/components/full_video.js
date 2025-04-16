import React from "react";

export default function Fullv() {
  return (
    //     <div>
    //       <section class="text-gray-600 body-font">
    //         <div class="container mx-auto flex flex-col px-4 sm:px-6 lg:px-8 py-12 items-center">
    //           <div class="w-full aspect-video max-w-3xl mb-6">
    //             <div style="padding:56.25% 0 0 0;position:relative;">
    //             <iframe
    //   src="https://player.vimeo.com/video/1069117619?h=92f95ee07d&badge=0&autopause=0&player_id=0&app_id=58479"
    //   allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
    //   style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    //   title="13"
    // />

    //             </div>
    //             <script src="https://player.vimeo.com/api/player.js"></script>
    //             {/* <iframe
    //             class="w-full h-full rounded"
    //             src="https://www.youtube.com/embed/D0UnqGm_miA?si=-whlIIG-x2Otjr8T"
    //             title="YouTube video player"
    //             frameborder="0"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //             referrerpolicy="strict-origin-when-cross-origin"
    //             allowfullscreen
    //           ></iframe> */}
    //           </div>

    //           <div class="w-full md:w-2/3 text-center">
    //             <h1 class="title-font text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-4">
    //               Knausgaard typewriter readymade marfa
    //             </h1>
    //             <p class="mb-8 text-base sm:text-lg leading-relaxed">
    //               Kickstarter biodiesel roof party wayfarers cold-pressed. Palo
    //               santo live-edge tumeric scenester copper mug flexitarian. Prism
    //               vice offal plaid everyday carry. Gluten-free chia VHS squid
    //               listicle artisan.
    //             </p>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-4 sm:px-6 lg:px-8 py-12 items-center">
          <div className="w-full aspect-video max-w-3xl mb-6">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1075999096?h=345c713c19&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                title="Displaced Voice Network"
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>

            {/* 
        <iframe
          className="w-full h-full rounded"
          src="https://www.youtube.com/embed/D0UnqGm_miA?si=-whlIIG-x2Otjr8T"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        */}
          </div>

          <div className="w-full md:w-2/3 text-center">
            <h1 className="title-font text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Displaced Voice Network Series-1
            </h1>
            <p className="mb-8 text-base sm:text-lg leading-relaxed">
              Today I'm going to be asking you some questions about your journey — your brand, your work with refugees, and your collaboration with Asylum Access Thailand.
            </p>
          </div>
        </div>
      </section>
    </div>


  );
}
