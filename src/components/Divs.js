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
          <p
            className={`text-gray-500 p-7 font-bold  text-3xl  text-center`}
          >
            Empowering Connectivity
          </p>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="text-xl font-bold text-gray-500 p-5 pt-1 ml-2 mr-3 text-center">
        Simple A2P SMS delivery options <br /> that uses AI technology, Dependable Routes, and State-of-the-art platform <br /> to connect you with clients across the globe
        </p>
      </RevealOnScroll>

      <div className="text-white relative p-5 grid md:grid-cols-2 lg:grid-cols-5 gap-3 lg:items-center">
        <div class="divs flex flex-col border hover:bg-gray-400 text-center rounded-xl p-5 h-full bg-sky-900 border-gray-700">
          <RevealOnScroll>
            <p className=" font-bold text-xl border-b pt-5 pb-5 border-white">
              Global Reach
            </p>
            <p className="text-lg p-4">
            Industry best HA platform and LCR + QBR based routes for improved reliable communication  </p>
          </RevealOnScroll>
        </div>

        <div class=" divs flex flex-col border text-center hover:bg-gray-400 h-full rounded-xl  bg-sky-900 p-5 border-gray-700">
          <RevealOnScroll>
            <p className="font-bold text-xl  border-b block p-5  border-white">
              Reliability
            </p>
            <p className="text-lg  p-5">
              Rely on our platform's consistent performance for uninterrupted
              communication
            </p>
          </RevealOnScroll>
        </div>
        <div class="divs flex flex-col border h-full hover:bg-gray-400  text-center rounded-xl p-5  bg-sky-900 border-gray-700">
          <RevealOnScroll>
            <p className=" font-bold  text-xl border-b  p-5  border-white">
              Security
            </p>
            <p className="text-lg  p-5">
              Safeguard sensitive data with advanced encryption and robust
              security measures
            </p>
          </RevealOnScroll>
        </div>

        <div class="divs flex flex-col border  h-full text-center hover:bg-gray-400 rounded-xl p-5  bg-sky-900 border-gray-700">
          <RevealOnScroll>
            <p className="font-bold text-xl border-b p-5  border-white">
              Scalability
            </p>
            <p className="text-lg p-4">
            Scale your messaging operation on the go using our cloud based solutions for uninterrupted traffic flow   </p>
          </RevealOnScroll>
        </div>

        <div class="divs flex flex-col border h-full object-contain text-center hover:bg-gray-400 bg-sky-900 rounded-xl p-5 border-gray-700">
          <RevealOnScroll>
            <p className="font-bold text-xl  border-b pt-5 pb-5 border-white">
              AI Integrated
            </p>
            <p className="text-lg  p-4">
              Harness the power of AI to optimize messaging strategies and
              enhance customer interactions
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}

export default Divs;
