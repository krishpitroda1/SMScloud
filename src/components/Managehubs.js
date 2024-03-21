import React from "react";
import img3 from "../assets/circle.png";
import img1 from "../assets/manage.png";
import { useState, useRef, useEffect } from "react";
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

function Managehubs() {
  return (
    <div>
      <div className=" w-screen  relative pb-8">
        <RevealOnScroll>
          <h1 className="align-center text-gray-500  pt-16 text-center p-5  font-bold text-4xl">
            Managed Services with SMSCloud Hub
          </h1>
          <div className=" lg:flex md:grid md:grid-cols-2  lg:p-5 md:p-0 sm:p-0">
            <img
              src={img1}
              className="w-[500px] mx-auto   my-4 rounded-2xl"
              alt=""
            />
            <div className="flex flex-col justify-center text-center mx-auto ">
              <RevealOnScroll>
                <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">
                  Focus on your core Business Operations <br />{" "}
                  <span className="text-gray-400">
                    and leaving the technical and operational <br /> aspects to
                    SMSCloud Hub{" "}
                  </span>
                </p>
                <p className="text-center p-5 text-gray-400 lg:text-3xl text-2xl ">
                  SMSCloud Hub is the first choice to manage <br /> the SMS Hubs
                  for Telecom Operators
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll>
        <div className="">
          <RevealOnScroll>
            <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
              Let us manage your cumbersome Operations
            </p>
          </RevealOnScroll>

          <div className="grid   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
            <div className="benefits rounded-lg   p-5 bg-sky-900 hover:bg-gray-400  text-white">
              <RevealOnScroll>
                <p className="font-bold text-xl">Support</p>

                <p>
                  We manage your L1 and L2 Support working on your own platform
                </p>
              </RevealOnScroll>
            </div>
            <div className="benefits rounded-lg   p-5 bg-sky-900 hover:bg-gray-400 text-white">
              <RevealOnScroll>
                <p className="font-bold text-xl">Rates & Routing</p>
                <p>Our team does all RnR activities on an immediate basis</p>
              </RevealOnScroll>
            </div>
            <div className="benefits rounded-lg   p-5 bg-sky-900 hover:bg-gray-400 text-white">
              <RevealOnScroll>
                <p className="font-bold text-xl">Procurement</p>
                <p>
                  Our procurement team manages all procurement for the maximum
                  benefit of operator
                </p>
              </RevealOnScroll>
            </div>
            <div className="benefits rounded-lg  p-5 bg-sky-900 hover:bg-gray-400 text-white">
              <RevealOnScroll>
                <p className="font-bold text-xl">Platform</p>
                <p>
                  And all these can be clubbed with our wholesale messaging
                  platform{" "}
                </p>
              </RevealOnScroll>
            </div>
            <div className="benefits rounded-lg  p-5  bg-sky-900 hover:bg-gray-400 text-white">
              <RevealOnScroll>
                <p className="font-bold text-xl">On Demand</p>
                <p>
                  Our team can be available as per requirement viz. 5 X 8, 5 X
                  12 ,or 7 X 24 to manage the platform
                </p>
              </RevealOnScroll>
            </div>
            <div className=" benefits rounded-lg  p-5  bg-sky-900 hover:bg-gray-400 text-white">
              <RevealOnScroll>
                <p className="font-bold text-xl">Cost Effective</p>
                <p>
                  We ensure the managed services provided by us benefits the
                  operators in terms of Operational cost reduction
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Managehubs;
