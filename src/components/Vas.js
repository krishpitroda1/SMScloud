import React from 'react'
import img3 from "../assets/circle.png";
import img1 from "../assets/vas.jpg";
import { useState, useEffect, useRef } from "react";

function Vas() {
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
        });
      
        const classes = `transition-opacity duration-1000
            ${isVisible ? "opacity-100" : "opacity-0"}`;
            return (
                <div ref={ref} className={classes}>
                  {children}
                </div>
              );
            };
            
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
      
  return (
    <div>
         <div className=' w-screen relative pt-7 pb-8'>
    <RevealOnScroll>
    <h1 className="align-center text-gray-500 pt-16 text-center p-5  font-bold text-4xl">
    Value added service
    </h1>
      <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 "> VAS, or non-core services, are  <br />  <span className="text-gray-400"> no longer just OTTs or ringtones</span></p>
             <p className="text-center p-5 text-gray-400 lg:text-2xl text-2xl ">
          Numerous value-added services, such as telemedicine,  smart meters, <br /> BNPL, eSports, online gaming, infrastructure-as-a-service IaaS, smart <br />homes / smart cities, and many more, are made possible by 5G.         </p> 
          <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">Let's Discuss .... </p>
            
            </RevealOnScroll>
          
          </div>
        </div>
  </RevealOnScroll>
 
    
</div>    
  
    </div>
  )
}

export default Vas;
 
