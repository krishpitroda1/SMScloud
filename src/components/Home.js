import React from "react";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";
import Companies from "./Companies";
import Test from "./Test";
import CountUp from 'react-countup';
// import ParticlesComponent from "./Particle";

import videobg from "../assets/bgvideo.mp4";
import Divs from "./Divs";
import { useEffect, useState, useRef } from "react";

import Ev from "./Ev";

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
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};
const words = ["SMS",'CPaaS','Voice'];
function Home() {
  // Create a state variable to store the text opacity
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  const [index, setIndex] = useState(0);

  // A useEffect hook to set up a timer that updates the index every 2 seconds
  useEffect(() => {
    // A function that increments the index by one, or resets it to zero if it reaches the end of the array
    const updateIndex = () => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    // A variable to store the timer ID
    const timerId = setInterval(updateIndex, 1000);   // A cleanup function that clears the timer when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []); 

  return (
    <div className="w-screen homediv relative overflow-hidden">
      <Navbar />
      <div className="relative ">
        <video
          src={videobg}
          className=" blur-sm top-3  absolute rounded-lg "
          autoPlay
          playsInline
          muted
          loop
        ></video>
    
          <div className="firstdiv relative pt-14 lg:pt-16 my-auto first max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center text-4xl flex flex-col justify-center text-sky-400  overflow-hidden">
            <h1 className="text-white  relative font-bold p-3  mt-10 text-5xl md:py-6">
        
              Smart, Simple & Effective <br />
              <span className="text-3xl pt-0 mt-0">
                Communication on the GO!
              </span>
              <p className="font-bold text-sky-400 p-0 text-6xl">{words[index]}</p>
           
            </h1>

            {/* <TypeAnimation
              className="font-bold"
              sequence={["SMS", 1000, "Voice", 1000, "CPaaS", 1000]}
              wrapper="span"
              speed={60}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            /> */}
            <p className="md:text-2xl text-xl relative font-bold pt-0 p-5 text-white 
            ">
              Scale your communications and connect with your audience
              seamlessly with wider messaging reach
            </p>
          </div>
      </div>
      {/* <Analytics/> */}
      <div>
        <Divs />
      </div>
      <div className="pt-16">
        <RevealOnScroll>
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Benefits Of SMS Hubbing with SMSCloud Hub
          </p>
        </RevealOnScroll>
    
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 p-5">
          <div className="benefits rounded-lg pt-8 h-32 p-5 bg-sky-900 hover:bg-gray-400  text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Scalable Platform</p>
              <p>Platform with burstable capacity upto 1000 TPS</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">High Quality</p>
              <p>Global routes with AI based Route Selection and Testing</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  -32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Seamless Broadcast</p>
              <p>LCR and QBR Based Routing with Fall back</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Carrier Grade Feature</p>
              <p>High availability, 99.95% uptime backed by SLA</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Cloud Based Services</p>
              <p>Cloud connectivity with no down time & no CAPEX</p>
            </RevealOnScroll>
          </div>
          <div className=" benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">World Wide Reach</p>
              <p>Flawless termination in more then 195 Countries</p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
      <div className=" lg:pl-20 p-10 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8">
            <div>
              <p className="text-lg sm:text-xl font-bold text-gray-500">
                Accuracy rate
              </p>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
                <RevealOnScroll>
                
                <CountUp start={0.00} end={99.96}  duration={10} decimals={2} suffix="%"/>
                </RevealOnScroll>
              </p>
              <p className="mt-1 text-gray-500">DLR</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-gray-500">
             
                Customers
            </p>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
               <RevealOnScroll>

               <CountUp start={0} end={500}  duration={10} decimals={0} suffix="+"/>
                 </RevealOnScroll>
              </p>
              <p className="mt-1 text-gray-500">Telcos, Carriers & Enterprises</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-gray-500">
                Happy customer
              </p>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              <RevealOnScroll>

               <CountUp start={0.000} end={96.90}  duration={10} decimals={2} suffix="%"/>
               </RevealOnScroll>
              </p>
              <p className="mt-1 text-gray-500">Overall satisfaction</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl font-semibold text-gray-500">
                Coverage
              </p>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              <RevealOnScroll>

              <CountUp start={0} end={195}  duration={10} decimals={0} suffix="+"/>
              </RevealOnScroll>
              </p>
              <p className="mt-1 text-gray-500">Countries</p>
            </div>
          </div>
      <div className="">
        <RevealOnScroll>
          <Companies />
        </RevealOnScroll>
      </div>
      <Test />
      <div className="rounded-lg">
        <RevealOnScroll>
          <Ev />
        </RevealOnScroll>
      </div>
     
      {/* <Cards/> */}
      {/* <End/> */}
    </div>
  );
}

export default Home;
