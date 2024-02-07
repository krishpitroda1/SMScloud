import React, { useEffect } from "react";
import img from "../assets/img1.jpeg";
import img2 from "../assets/hubs.jpeg";
import img3 from "../assets/easy.jpeg";
import { count } from "firebase/firestore";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="w-screen  overflow-x-hidden relative p-8 ">
      <div className="">
        <h1 className="md:pl-5 sm:pl-5 pl-5 align-center text-sky-600 pt-10 text-center p-5  font-bold text-3xl">
          About Us
        </h1>
      </div>
      <div className="">
        <div className="lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            className="w-[500px] mx-auto my-4 rounded-2xl"
            src={img}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-4xl sm:text-3xl text-red-600 text-2xl font-bold p-5">
              Messaging is our business!
            </h1>
            <p className="p-5 pt-0 text-xl text-black">
              SMSCloud Hub provides solutions for better customer engagement
              through a cloud-based platform. We empower businesses to engage
              with their people through a variety of channels, making their
              communication conversational, more personalized, fun, meaningful,
              and with ease. With an innovative suite of Cloud based solutions,
              WebPanels & APIs, SMSCloud Hub delivers communication solutions
              that have been used by almost everyone around the world
            </p>
            <p className="p-5 text-xl">
              When the messaging is the central to the business, we solve
              today’s unique customer challenges by bridging business to the
              world by using complex communication channels. And we thrive with
              A2P Messaging for India and International Market providing
              solutions with the right mix of Cloud Technlogy &
              Telecommunications.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h1 className="align-center text-sky-600  h-20  text-center p-5  font-bold text-3xl">
          Why Choose Us
        </h1>
        <div className="lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img2}
            className="w-[500px] mx-auto my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center  p-5">
            <p className="text-sky-600  font-bold text-3xl p-5">
              Advantages for Choosing Us
            </p>
            <h1 className="pt-0 font-semibold p-5 text-lg sm:text-xl md:text-xl">
        
              Even in the age of digital advertising, tapping into SMS, or
              simply texting, is considered as the personalized, fastest, and…
            </h1>
            <div className="grid grid-flow-row  pl-5 gap-4">
              <div className="grid grid-cols-3 gap-5 pt-5">
                <div>
                  <img src={img3} className="h-16 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                    Easy to integrate
                  </h1>
                  <p className="font-semibold">Adaptive platform to connect with your existing clients</p>
                </div>
                <div>
                  <img src={img3} className="h-16 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                    Global Reach
                  </h1>
                  <p className="font-semibold">World Wide Connectivity</p>
                </div>
                <div>
                  <img src={img3} className="h-16 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                    Cloud Scalable
                  </h1>
                  <p className="font-semibold">
                    Burstable capacity in the cloud to support your business.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5 pt-5">
                <div>
                  <img src={img3} className="h-16 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                    Responsive Team
                  </h1>
                  <p className="font-semibold">Friendly and always available business & support team.</p>
                </div>
                <div>
                  <img src={img3} className="h-16 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                    Low TCO
                  </h1>
                  <p className="font-semibold">Adaptive platform to connect with your existing clients</p>
                </div>
                <div>
                  <img src={img3} className="h-16 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                    Futuristic Solution
                  </h1>
                  <p className="font-semibold">
                    Using new-age technologies we bring 360-degree Digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{/* <End/> */}</div>
    </div>
  );
}

export default About;
