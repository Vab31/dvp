// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import { Autoplay } from 'swiper/modules';

// const HeroSlider = () => {
//   const images = [
//     '/images/slide1.jpeg',
//     '/images/slide2.jpeg',
//     '/images/slide3.jpeg',
//   ];

//   return (
//     <div className="w-full h-screen overflow-hidden">
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay]}
//         className="h-full"
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index} className="flex justify-center items-center h-full">
            
//             <img
//               src={src}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover bg-black opacity-60"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSlider;


// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import { Autoplay } from 'swiper/modules';

// const HeroSlider = () => {
//   const slides = [
//     { src: '/images/slide1.jpeg', text: 'Welcome to Our Platform' },
//     { src: '/images/slide2.jpeg', text: 'Empowering Your Future' },
//     { src: '/images/slide3.jpeg', text: 'Learn, Grow, Succeed' },
//   ];

//   return (
//     <div className="w-full h-[500px] overflow-hidden  relative">
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay]}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} className="relative flex justify-center items-center h-full">
//             {/* Image with opacity */}
//             <img
//               src={slide.src}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover opacity-80"
//             />
//             {/* Overlay text */}
//             <div className="absolute inset-0 flex justify-center items-center bg-black opacity-20 text-white text-2xl font-semibold px-4 text-center">
//               {slide.text}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSlider;





'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


const HeroSlider = () => {
  const slides = [
    { src: '/images/slide1.jpeg', text: 'Stories Beyond Borders — Voices That Moved the World' },
{ src: '/images/slide2.jpeg', text: 'From Struggle to Strength — Documenting the Journey of Resilience' },
{ src: '/images/slide3.jpeg', text: 'Lived Realities, Shared Humanity — A Lens Into Displacement and Hope' },

    
  ];

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative flex justify-center items-center h-full">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover  opacity-60"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <h2 className="text-white  text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                {slide.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
