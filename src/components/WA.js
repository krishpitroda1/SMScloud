import React from "react";
import img1 from "../assets/wa.png";
import img3 from "../assets/circle.png";
import { useState, useEffect, useRef } from "react";
import CountUp from 'react-countup';
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

const WA = () => {
  return (
    <div className="w-screen relative  pb-8">
      <RevealOnScroll>
        <h1 className=" text-gray-500 pt-16 text-center p-5  font-bold text-4xl ">
          SMSCloud Hub's WhatsApp Suite: Boost Engagement & Efficiency!
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto lg:pl-10  my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 "> Maximize your ROI through  WhatsApp  by  <br /> <span className="text-gray-400"> executing tailored, automated campaigns <br /> on the globally acclaimed messaging platform</span></p>
             {/* <p className="text-center p-5 lg:p-36 lg:pt-3 lg:pb-0 text-gray-400 lg:text-2xl text-2xl ">

              Run automated, personalized marketing campaigns, on the world’s most popular messaging platform
             </p> */}
            </RevealOnScroll>
          </div>
        </div>
      </RevealOnScroll>
      <div className=" lg:pl-20 p-10 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
            <div>
              <p className="mt-2 sm:mt-3 text-4xl lg:text-6xl  font-bold text-sky-600">
                <RevealOnScroll>
                2.5x
                </RevealOnScroll>
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-500">
              Conversions compared to email
              </p>
            
              <p className="mt-1 text-gray-500">
WhatsApp surpasses email in conversion rates by a factor of 2.5.




</p>
            </div>
            <div>
              <p className="mt-2 md:mt-3 text-4xl lg:text-6xl md:text-4xl font-bold text-sky-600">
               <RevealOnScroll>

              75%
                 </RevealOnScroll>
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-500">
             
              Impressive open rate
            </p>
       
              <p className="mt-1 text-gray-500">Attain an impressive 75% open rate on your WhatsApp messages</p>
            </div>
            <div>
              <p className="mt-2 md:mt-3 text-4xl md:text-6xl font-bold text-sky-600">
              <RevealOnScroll>

              2 Billion
                   </RevealOnScroll>
              </p>
              <p className="text-lg sm:text-xl font-bold text-gray-500">
              Monthly active users  </p>
             
              <p className="mt-1 text-gray-500">Engage with a vast audience of 2 billion monthly active users on the most widely utilized chat application</p>
            </div>
          </div>
          <div className="">
        <RevealOnScroll>
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Features of WhatsApp Service with SMSCloud Hub
          </p>
        </RevealOnScroll>
    
        <div className="grid   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
          <div className="benefits rounded-lg   p-5 bg-sky-900 hover:bg-gray-400  text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">High Open Rates</p>
              <p>Enjoy 90%+ open rates with our broadcast feature</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg   p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Recover Lost Sales </p>
              <p>Re-engage customers effectively, bidding goodbye to abandoned carts</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  -32  p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Automate Everything</p>
              <p>Streamline marketing, sales, and support tasks effortlessly</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg    p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Multiple Agents</p>
              <p>Share the inbox among your team with unlimited agent support</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  p-5  bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Low-Code Automations</p>
              <p> Simplify mass communication and personalize responses effortlessly</p>
            </RevealOnScroll>
          </div>
          <div className=" benefits rounded-lg  p-5  bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">One-to-One Communication</p>
              <p>Tag, categorize, and target contacts in personalized groups</p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WA;
