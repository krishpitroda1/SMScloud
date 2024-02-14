import React from 'react'
import img1 from '../assets/source.png'
import img3 from "../assets/circle.png";
import { useState,useEffect,useRef } from 'react';

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
              scrollObserver.unobserve(entry.target);
          }
      });

      scrollObserver.observe(ref.current);

      return () => {
          if (ref.current) {
              scrollObserver.unobserve(ref.current);
          }
      };
  },);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};


const WA = () => {
  return (
    <div className='w-screen relative pt-8 pb-8'>
        <RevealOnScroll>
        <h1 className=" text-sky-600 pt-10 text-center p-5  font-bold text-3xl ">
          Whatsapp for Business
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
        <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
        <div className="flex flex-col justify-center">
          <RevealOnScroll>          <p className="text-orange-600  p-5 font-bold text-3xl">
            WA For Business
          </p>
          <h1 className="py-3 p-5 text-lg font-semibold sm:text-xl md:text-xl pr-5">
          WHATSAPP for business helps to connect with your target group with the help of Text, Multimedia, Video, Audio, etc.  </h1>
        <div className="grid grid-flow-row p-5 gap-3 ">
           <div className='flex'>
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600  text-xl">
              Genrate quick replies 
              </h1>
            </div>
            <div className='flex'>
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600  text-xl">
                Most Accepted Channel 
              </h1>
             </div>
           <div className='flex'>
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600  text-xl">
                    Automatic Greeting Message
              </h1>
            </div>
            <div className='flex'>
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600 text-xl">
               Contacts can be labelled
               </h1>
            </div>
     
          
            <div className='flex'> 
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600  text-xl">
              Create Catalogs and Collection of your products 
              </h1>
            </div>
            <div className='flex'>
              <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
              <h1 className="align-center text-sky-600  text-xl">
              WhatsApp Message API
              </h1>
            </div>
      
        </div>
        </RevealOnScroll>

         </div>
      </div>
      </RevealOnScroll>
    </div>
  )
}

export default WA
