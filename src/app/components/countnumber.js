"use client";

import CountUp from 'react-countup';
import { useEffect , useState } from 'react';


export default function Counter() {
    const [emailCount, setEmailCount] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const num = 5; // or get it from somewhere else
    //       try {
    //         const response = await fetch('http://localhost:5000/get-em', {
    //           method: 'GET',
    //           body: JSON.stringify({ num }),
    //           headers: { 'Content-Type': 'application/json' },
    //         });
      
    //         const data = await response.json();
    //         console.log(data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
      
    //     fetchData();
    //   }, []);



    useEffect(() => {
        fetch('https://dvbe.vercel.app/get-em') // adjust this if your backend is on a different port or domain
          .then((response) => response.json())
          .then((data) => {
            setEmailCount(data.count);
          })
          .catch((error) => {
            console.error('Error fetching email count:', error);
          });
      }, []);

  return (
    <div className="text-4xl ">
      
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-20 mx-auto">
    <div class="flex justify-center items-center text-center">
      <div class="p-4  bg-gray-50 border-2 shadow-2xl rounded-2xl">
        <h2 class="title-font font-medium sm:text-3xl text-2xl text-gray-900 ">
            
          <CountUp end={emailCount} duration={2} />+
        </h2>
        <p class="leading-relaxed">Number Of Unique Visitor</p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}
