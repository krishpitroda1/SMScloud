import React from "react";
import img2 from "../assets/hubs.jpeg";
import img3 from "../assets/circle.png";

import img1 from "../assets/a2p.png";
import { useEffect, useState, useRef } from "react";
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

const A2P = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className=" w-screen relative  p-8">
      <h1 className="md:pl-5 sm:pl-5 pl-5 align-center text-sky-600 pt-10 text-center p-5  font-bold text-3xl ">
        Application to Person Messaging
      </h1>
      <RevealOnScroll>
        <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px]   lg:pl-10  my-4 rounded-2xl"
            alt=""
          />

          <div className="flex flex-col justify-center lg:p-5 md:p-0 mx-auto">
            {/* <p className="text-orange-600 pl-1 font-bold text-3xl">
            A2P Messaging
          </p> */}
            {/* <h1 className="py-3 text-lg sm:text-xl md:text-xl">
          A2P messaging stands for Application-to-Person messaging. It is a type of SMS text messaging used to send messages from an application or software program to a mobile device or phone and it is...
           </h1> */}
            {/* <div className="grid grid-flow-row pt-10  gap-4">
            <div className="">
              <div className="flex ">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl ">
                With global rise of digitization, Businesses create millions of touchpoints daily 
                These touchpoints consist of promotional to service messages to transactional messages

                </h1>
              </div>
              <div className="pt-5">

              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl">
                Globally SMS messages read average under 3 	Minutes

                </h1>
              </div>
            </div>
              </div>

        
              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl">
                SMS offers proficient and personal way to reach 	end-users

                </h1>
              </div>
              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl">
                SMS offers an incredibly high ROI when
compared with other digital marketing channels
      </h1>
              </div>
        
              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl">
                Special Rates and effective Routes for India and 	189 countries of the world
 </h1>
              </div>
              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl">
                Fastest Termination with Real Time Delivery 	Reports
</h1>
              </div>
          </div> */}
            <div className="flex flex-col justify-center text-center mx-auto ">
              <RevealOnScroll>
                <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">
                  Power of <br />{" "}
                  <span className="text-gray-400"> Customer Engagement</span>
                </p>
                <p className="text-center p-5 text-gray-400 lg:text-3xl text-2xl ">
                  API, SMPP, Reseller
                  <br /> Marketing companies & CTR <br /> Through One Platform
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <div className=" lg:pl-20 p-10 grid gap-6 grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-8">
        <div>
          <p className="mt-2 md:mt-3 text-4xl md:text-6xl font-bold text-sky-600">
            <RevealOnScroll>98%</RevealOnScroll>
          </p>
          <p className="text-lg md:text-xl font-bold text-gray-500">
            Open Rate
          </p>
        </div>
        <div>
          <p className="mt-2 md:mt-3 text-4xl  font-bold text-sky-600">
            <RevealOnScroll>Highly effective</RevealOnScroll>
          </p>
        </div>
        <div>
          <p className="mt-2 md:mt-3 text-4xl md:text-6xl font-bold text-sky-600">
            <RevealOnScroll>6 Billion</RevealOnScroll>
          </p>
          <p className="text-xl font-bold text-gray-500">Customers </p>
        </div>
      </div>
      <div className="">
        <RevealOnScroll>
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Benefits Of A2P with SMSCloud Hub
          </p>
        </RevealOnScroll>
    
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
          <div className="benefits rounded-lg pt-8 h-32 p-5 bg-sky-900 hover:bg-gray-400  text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">  With global rise of digitization, Businesses create millions of touchpoints daily</p>
             </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">  Globally SMS messages read average under 3 	Minutes
 </p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  -32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">  SMS offers proficient and personal way to reach end-users
</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl"> Special Rates and effective Routes for India and 	189 countries of the world
 </p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Get a diffrent links for marketing campaigns</p>
            </RevealOnScroll>
          </div>
          <div className=" benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Fastest Termination with Real Time Delivery Reports</p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default A2P;
