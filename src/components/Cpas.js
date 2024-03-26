import React from "react";
import img3 from "../assets/circle.png";
import img1 from "../assets/cpaas.png";
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
function Cpas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className=" w-screen p-5 relative">
      <RevealOnScroll>
        <h1 className="align-center text-gray-500 pt-16 text-center p-5 font-bold text-4xl">
          Transform Your communication with Multi-Channel Platform as a Service
        </h1>

        <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 ">
          <img
            src={img1}
            className="w-[500px]   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center md:p-0 text-center  ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">
                Empower Engagement
                <br />
                <span className="text-gray-400">
                  
                  SMSCloud Hub's CPaaS for 
                  Exceptional <br/> Customer Experiences
                </span>
              </p>
              <p className="text-center lg:p-16 lg:pb-0 lg:pt-3 pt-3 text-gray-400 lg:text-xl text-2xl ">
                {/* SMSCloud Hub empowers enterprises and partners to seamlessly connect <br /> with their end customers via a secure, dependable, and scalable cloud <br /> communication platform. Supported by Best business operations Suport, <br /> our platform facilitates both one-way and two-way communication across <br /> diverse messaging interfaces and protocols. This versatility enables effortless <br />integration of enterprise applications through programmable APIs. */}
                SMSCloud Hub empowers enterprises to seamlessly connect with
                their end customers via a secure, dependable, and scalable cloud
                communication platform. Supported by multiple communication
                channels, facilitating both one-way and two-way
                communication.This versatility enables effortless integration of
                enterprise applications through programmable APIs.{" "}
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </RevealOnScroll>
      <div className="">
        <RevealOnScroll>
          <p className="text-gray-500 text-center 
           pb-1  font-bold text-3xl">
            Benefits of CPaaS Service with SMSCloud Hub
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 ">
          <div className="benefits rounded-lg p-5 bg-sky-900 hover:bg-gray-400  text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Secure</p>
              <p>
                Hosted in Global Data Centers with authentication for enhanced
                security
              </p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Reliable</p>
              <p>0Hop dependable routes from operators for realible delivery</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Multi Channel</p>
              <p>Communicate via SMS,Voice,Video,Email,OTT and Analytics</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Scalable</p>
              <p>Scale your number of users with cloud platform,on the GO!</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  p-5  bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">ROI</p>
              <p>
                Track and measure key business and operational KPIs to enhance
                ROI
              </p>
            </RevealOnScroll>
          </div>
          <div className=" benefits rounded-lg p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Cost Effective</p>
              <p>
                Intelligent least-cost routing to maximize delivery and cost
                efficiency
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cpas;
