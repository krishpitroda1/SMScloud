import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/cpaas.png'
import { useEffect, useState,useRef } from "react";

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
function Cpas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
 
  return (
    <div className=' w-screen pt-10 relative '>
   <RevealOnScroll>

    <h1 className="align-center text-gray-500 pt-16 text-center p-5  font-bold text-4xl">
    Transform Your Communication with Omni-Channel Platform as a Service
    </h1>
   
    {/* <div className="lg:flex pt-0 p-10 md:grid md:grid-cols-2 ">
    <img src={img1} className="w-[500px] h-[480px] mx-auto my-4 rounded-2xl" alt="" />
   <RevealOnScroll>
    <div className="flex flex-col lg:pt-10 lg:p-5">
      <p className="pl-5 text-orange-600 font-bold text-3xl">
        CPaaS platform
      </p>
      <h1 className="py-3 text-lg p-4 font-semibold sm:text-xl md:text-xl ">
      Communications Platform as a Service, or CPaaS, is one of the fastest-growing communication industries today
   </h1>
    <div className="lg:p-5 p-1">

    
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          CPaaS is a cloud-based collaboration platform that 	aims to make communication easier for businesses and It can be Can be integrated to existing CRM


          </h1>
        </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          CPaaS combines many useful features into one place 	so businesses can stay in touch with their partners, 	vendors, suppliers and customers on the 	communication channel they like

          </h1>
         </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl pr-5">
          Use of Email, SMS, Voice, Video, Chatbot & Analytics 	from the single platform & single vendor

          </h1>
         </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          Expert Consulting to the companies building the 	CPaaS Platform

           </h1>
        </div>
    
      </div>
     </div>
     </RevealOnScroll>
  </div> */}
       <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">Empower Engagement

 <br /> <span className="text-gray-400"> SMSCloud Hub's CPaaS for <br />Exceptional Customer Experiences</span></p>
             <p className="text-center lg:p-16 lg:pb-0 lg:pt-3 pt-3 text-gray-400 lg:text-xl text-2xl ">

             {/* SMSCloud Hub empowers enterprises and partners to seamlessly connect <br /> with their end customers via a secure, dependable, and scalable cloud <br /> communication platform. Supported by Best business operations Suport, <br /> our platform facilitates both one-way and two-way communication across <br /> diverse messaging interfaces and protocols. This versatility enables effortless <br />integration of enterprise applications through programmable APIs. */}    
             SMSCloud Hub empowers enterprises and partners to seamlessly connect  with their end customers via a secure, dependable, and scalable cloud communication platform. Supported by Best business operations Suport,  our platform facilitates both one-way and two-way communication across diverse messaging interfaces and protocols. This versatility enables effortless integration of enterprise applications through programmable APIs.     </p>
            
            </RevealOnScroll>
          </div>
        </div>
   
     </RevealOnScroll>
     <div className="">
        <RevealOnScroll>
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Benefits Of CPaaS Service with SMSCloud Hub
          </p>
        </RevealOnScroll>
    
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
          <div className="benefits rounded-lg pt-8 h-32 p-5 bg-sky-900 hover:bg-gray-400  text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Secure</p>
              <p>Secure buisness applications,via a two factor authentication method</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Reliable</p>
              <p>Deliver messages via appropriate channels</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  -32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Available</p>
              <p>Ensuring agreed levals of performance and reliance</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Scalable</p>
              <p>Expand business reach by adding new service over flexible hosting options</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">ROI</p>
              <p>Track and measure key business and operational KPI's</p>
            </RevealOnScroll>
          </div>
          <div className=" benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Cost Effective</p>
              <p>Smart least cost routing to optimize cost of delivery</p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
</div>
  )
}

export default Cpas
