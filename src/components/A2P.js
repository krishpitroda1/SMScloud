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
    <div className=" w-screen relative p-5">
      <h1 className="md:pl-5 sm:pl-5 pl-5 align-center text-gray-500 pt-10 text-center p-5 font-bold text-4xl ">
        Application to Person (A2P) Messaging
      </h1>
      <RevealOnScroll>
        <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px]   lg:pl-10  my-4 rounded-2xl"
            alt=""
          />

          <div className="flex flex-col justify-center lg:p-5 md:p-0 mx-auto">
            <div className="flex flex-col justify-center text-center mx-auto ">
              <RevealOnScroll>
                <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">
                  Power of Customer Connect <br />
                  <span className="text-gray-400">
                    {" "}
                    Engage with your customers <br /> instantly and in real time
                  </span>
                </p>
                <p className="text-center mx-aut0 lg:p-20 pt-3 pb-3 lg:pt-3  text-gray-400 lg:text-2xl text-2xl ">
                  Tap into the highest engagement rates with A2P SMS, where 9
                  out of 10 people read their texts within 3 minutes of Global
                  Average, by seamlessly integrating SMS into your Transaction
                  API or Campaign Manager to deliver OTP Message or any
                  promotion.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <div className="justify-between lg:pl-20 lg:p-10 p-5 grid grid-cols-2  lg:grid-cols-3 ">
        <div>
          <p className="mt-2 md:mt-3 lg:text-5xl text-3xl font-bold text-sky-600">
            <RevealOnScroll>98%</RevealOnScroll>
          </p>
          <p className="text-lg md:text-xl font-bold text-gray-500">
            Open Rate
          </p>
        </div>
        <div>
          <p className="mt-2 md:mt-3 lg:text-5xl text-3xl font-bold text-sky-600">
            <RevealOnScroll>3 Minutes</RevealOnScroll>
          </p>
          <p className="text-lg md:text-xl font-bold text-gray-500">
            Avg read time
          </p>
        </div>
        <div>
          <p className="mt-2 md:mt-3 text-3xl lg:text-5xl font-bold text-sky-600">
            <RevealOnScroll>8.9 Billion</RevealOnScroll>
          </p>
          <p className="text-xl font-bold text-gray-500">Global subscribers </p>
        </div>
      </div>
      <div className="">
        <RevealOnScroll>
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Benefits of A2P with SMSCloud Hub
          </p>
        </RevealOnScroll>

        <div className="grid pt-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  lg:p-5 lg:pr-8">
          <div className="benefits rounded-lg  p-5 bg-sky-900 hover:bg-gray-400  text-white">
            <RevealOnScroll>
              <p className="text-xl font-bold">Reach</p>
              <p>
                Deliver messages in more than 195 countries with a single click{" "}
              </p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="text-xl font-bold">Routes</p>
              <p> Use our 0Hop or 1Hop routes for secured delivery</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="text-xl font-bold">Support</p>
              <p> 24X7 Support and AM team</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg    p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="text-xl font-bold">Data Security</p>
              <p>
                {" "}
                Robust platform with complete authentication and 99.99% uptime
              </p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  p-5  bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="text-xl font-bold">Scalable</p>
              <p>
                On Demand Cloud based expandable TPS of 1000 from 700 regular
                TPS
              </p>
            </RevealOnScroll>
          </div>
          <div className=" benefits rounded-lg  p-5  bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="text-xl font-bold">Countrywise Compliance</p>
              <p>
                Manage rapidly changing countrywise compliance with
                our experts' team
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default A2P;
