import React from "react";
import img3 from "../assets/circle.png";
import img1 from "../assets/firewall.png";
import { useState, useEffect, useRef } from "react";
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

function Smsc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div>
      <div className=' w-screen relative pt-7 pb-8'>
    <RevealOnScroll>
    <h1 className="align-center text-gray-500 pt-16 text-center p-5  font-bold text-4xl">
      SMSC Firewall 
    </h1>
      <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 "> Operate, Protect and Monetize <br />  <span className="text-gray-400"> Protect an SMSC from unauthorized <br /> access and potential attacks</span></p>
             <p className="text-center p-5 text-gray-400 lg:text-2xl text-2xl ">
             SMSCloud Hub being the key player in the industry fulfills 
              the  <br />requirement of protection, management of SMS traffic
               and   monetization <br />  of the traffic with complete Revenue Model for Telecom Operator                    </p> 
                      </RevealOnScroll>
          </div>
        </div>
  </RevealOnScroll>
  <div className="">
        <RevealOnScroll>
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
          Advantages of SMSC Firewall   </p>
        </RevealOnScroll>
    
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
          <div className="benefits rounded-lg pt-8 h-32 p-5 bg-sky-900 hover:bg-gray-400  text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Helps prevent potential security breaches
               </p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Traffic Filtering and content inspection
                  </p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  -32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Its subscribers as well as manage and monitor SMS traffic</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">The increasingly complex messaging ecosystem</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl"> Monetization of the traffic with complete Revenue Model for Telecom Operator</p>
            </RevealOnScroll>
          </div>
          <div className=" benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">  Ensure the reliability and security of SMS messages</p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    
</div>    
  
    </div>
  );
}

export default Smsc;
