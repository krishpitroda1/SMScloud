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
    <div className="w-screen relative pt-8 pb-8">
      <RevealOnScroll>
        <h1 className=" text-gray-500 pt-16 text-center p-5  font-bold text-4xl ">
          SMSCloud Hub's WhatsApp Suite: Boost Engagement & Efficiency!{" "}
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto lg:pl-10  my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">Unlock more ROI with  <br /> <span className="text-gray-400"> WhatsApp Marketing </span></p>
             <p className="text-center p-5 text-gray-400 lg:text-3xl text-2xl ">

              Run automated, personalized marketing <br /> campaigns, on the world’s most popular <br /> messaging platform
             </p>
            </RevealOnScroll>
          </div>
        </div>
      </RevealOnScroll>
      <div className=" lg:pl-20 p-10 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
            <div>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-sky-600">
                <RevealOnScroll>
                2.5x
                </RevealOnScroll>
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-500">
              Conversions vs email
              </p>
            
              <p className="mt-1 text-gray-500">WhatsApp  outperforms email in terms of conversions by 2.5x</p>
            </div>
            <div>
              <p className="mt-2 md:mt-3 text-4xl md:text-6xl font-bold text-sky-600">
               <RevealOnScroll>

              75%
                 </RevealOnScroll>
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-500">
             
              Average open rate
            </p>
       
              <p className="mt-1 text-gray-500">On average, WhatsApps achieve a 75% open rate</p>
            </div>
            <div>
              <p className="mt-2 md:mt-3 text-4xl md:text-6xl font-bold text-sky-600">
              <RevealOnScroll>

              2 Billion
                   </RevealOnScroll>
              </p>
              <p className="text-lg sm:text-xl font-bold text-gray-500">
              Monthly active users  </p>
             
              <p className="mt-1 text-gray-500">Reach 2B people on the world's most used chat app</p>
            </div>
          </div>
          <div className="">
        <RevealOnScroll>
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Benefits Of WhatsApp Service with SMSCloud Hub
          </p>
        </RevealOnScroll>
    
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
          <div className="benefits rounded-lg pt-8 h-32 p-5 bg-sky-900 hover:bg-gray-400  text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Welcome new subscribers</p>
              <p>Share a promotion with new subscribers to incentivize marketing opt-ins</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Cart abandonment </p>
              <p>Nudge customers to complete checkout with the pre-built abandoned cart flow</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  -32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Delivery notifications</p>
              <p>Keep customers informed of the status of their orders with realtime notifications</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Conversational Commerce</p>
              <p>Let customers discover and purchase products without leaving the chat conversation</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Upsell and cross-sell</p>
              <p>Push product recommendations directly to your customers from your Shopify store</p>
            </RevealOnScroll>
          </div>
          <div className=" benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Convert on the spot</p>
              <p>Enable customers to checkout without having to leave the conversation</p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WA;
