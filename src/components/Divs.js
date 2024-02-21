import React, { useState, useEffect, useRef } from "react";

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
function Divs() {
  const [color, setColor] = useState("blue");
  const toggleColor = () => {
    color === "blue" ? setColor("red") : setColor("blue");
  };
  useEffect(() => {
    const timer = setInterval(toggleColor, 1000);
    return () => clearInterval(timer);
  }, [color]);
  return (
    <div className="pt-16 ">
      <RevealOnScroll>
        <div>
          <h1
            className={`text-${color}-600 p-7 font-bold transition-colors duration-500 ease-in-out  hover:text-indigo-500 text-3xl  text-center`}
          >
            Empowering Connectivity
          </h1>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="text-xl font-semibold   p-5 pt-1 ml-2 mr-3 text-center">
          Seamless Messaging Across All Touchpoints
          <br /> Experience effortless communication solutions that seamlessly
          connect you with customers worldwide <br /> powered by our
          cutting-edge connectivity , Reliable Routes  and AI Technology
        </p>
      </RevealOnScroll>

      <div className="text-white relative p-5 grid md:grid-cols-2 lg:grid-cols-5 gap-3 lg:items-center">
        <div class=" flex flex-col border hover:bg-gray-400 text-center rounded-xl p-5 h-full bg-gray-800 border-gray-700">
          <RevealOnScroll>
            <h4 className=" font-bold text-xl border-b pt-5 pb-5 border-white">
              Global Reach
            </h4>
            <p className="text-lg p-4">
              Expand your reach across borders and connect with audiences
              globally.
            </p>
          </RevealOnScroll>
        </div>

        <div class=" flex flex-col border text-center hover:bg-gray-400 h-full rounded-xl  bg-gray-800 p-5 border-gray-700">
          <RevealOnScroll>
            <h4 className="font-bold text-xl  border-b block p-5  border-white">
              Reliability
            </h4>
            <p className="text-lg  p-5">
              Rely on our platform's consistent performance for uninterrupted
              communication.
            </p>
          </RevealOnScroll>
        </div>
        <div class=" flex flex-col border h-full hover:bg-gray-400  text-center rounded-xl p-5  bg-gray-800 border-gray-700">
          <RevealOnScroll>
            <h4 className=" font-bold  text-xl border-b  p-5  border-white">
              Security
            </h4>
            <p className="text-lg  p-5">
              Safeguard sensitive data with advanced encryption and robust
              security measures.
            </p>
          </RevealOnScroll>
        </div>

        <div class=" flex flex-col border  h-full text-center hover:bg-gray-400 rounded-xl p-5  bg-gray-800 border-gray-700">
          <RevealOnScroll>
            <h4 className="font-bold text-xl border-b p-5  border-white">
              Scalability
            </h4>
            <p className="text-lg p-4">
              Scale your messaging operations effortlessly to meet evolving
              business needs.
            </p>
          </RevealOnScroll>
        </div>

        <div class=" flex flex-col border h-full object-contain text-center hover:bg-gray-400 bg-gray-800 rounded-xl p-5 border-gray-700">
          <RevealOnScroll>
            <h4 className="font-bold text-xl  border-b pt-5 pb-5 border-white">
              AI Integrated
            </h4>
            <p className="text-lg  p-4">
              Harness the power of AI to optimize messaging strategies and
              enhance customer interactions.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}

export default Divs;
