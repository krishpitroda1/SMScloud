import React from "react";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Companies from "./Companies";
import Test from "./Test";
import img2 from "../assets/hubs.jpeg";
// import ParticlesComponent from "./Particle";
import img3 from "../assets/easy.jpeg";
import videobg from "../assets/bgvideo.mp4";
import Divs from "./Divs";
import Ev from "./Ev";
function Home() {
  return (
    <div className="w-screen homediv relative overflow-hidden">
      <Navbar />
      <div className="relative ">
        <video
          src={videobg}
          className="pt-3 blur-sm top-3 mt-2 absolute rounded-lg "
          autoPlay
          playsInline
          muted
          loop
        ></video>
        <div className="firstdiv relative pt-14 lg:pt-16 my-auto first max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center text-4xl flex flex-col justify-center text-sky-400  overflow-hidden">
          <h1 className="text-white relative font-bold p-3   text-5xl md:py-6">
            Smart, Simple & Effective <br />{" "}
            <span className="text-3xl pt-0 mt-0">Communication on the GO!</span>
          </h1>
          <TypeAnimation
            className="font-bold"
            sequence={["SMS", 1000, "Voice", 1000, "CPaaS", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <p className="md:text-2xl text-xl relative font-bold text-white py-6">
            Scale your communications and connect with your audience seamlessly
            with wider messaging reach.
          </p>
        </div>
      </div>
      {/* <Analytics/> */}
      <Divs />
      <div className="">
        <Companies />
      </div>
      <div className="pt-16">
        <h1 className="text-sky-400 text-center p-5 pb-1  font-bold text-3xl">
          Benefits Of SMS Hubbing
        </h1>
        <p className="text-center text-gray-500 text-xl">
          Benefits of SMS Hubbing with SMSCloud Hub
        </p>
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 p-5">
          <div className="rounded-lg pt-8 h-32 p-5 bg-gray-800 hover:bg-gray-400  text-white">
            <h1 className="font-bold text-xl">Scalable Platform</h1>
            <p>Platform with burstable capacity upto 1000 TPS</p>
          </div>
          <div className="rounded-lg h-32 pt-8 p-5 bg-gray-800 hover:bg-gray-400 text-white">
            <h1 className="font-bold text-xl">High Quality</h1>
            <p>Global routes with AI based Route Selection and Testing</p>
          </div>
          <div className="rounded-lg  -32 pt-8 p-5 bg-gray-800 hover:bg-gray-400 text-white">
            <h1 className="font-bold text-xl">Seamless Broadcast</h1>
            <p>LCR and QBR Based Routing with Fall back</p>
          </div>
          <div className="rounded-lg  h-32 pt-8 p-5 bg-gray-800 hover:bg-gray-400 text-white">
            <h1 className="font-bold text-xl">Carrier Grade Feature</h1>
            <p>High availability, 99.95% uptime backed by SLA</p>
          </div>
          <div className="rounded-lg h-32 p-5 pt-8 bg-gray-800 hover:bg-gray-400 text-white">
            <h1 className="font-bold text-xl">Cloud Based Services</h1>
            <p>Cloud connectivity with no down time & no CAPEX</p>
          </div>
          <div className="rounded-lg h-32 p-5 pt-8 bg-gray-800 hover:bg-gray-400 text-white">
            <h1 className="font-bold text-xl">World Wide Reach</h1>
            <p>Flawless termination in more then 195 Countries</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg">
        <Ev />
      </div>
      <Test />
      {/* <Cards/> */}
      {/* <End/> */}
    </div>
  );
}

export default Home;
