import React, { useState ,useEffect} from "react";

function Divs() {
  const[color,setColor]=useState('blue')
  const toggleColor = () => {
    color === 'blue' ? setColor('red') : setColor('blue')
  }
  useEffect(() => {
    const timer = setInterval(toggleColor, 1000)
    return () => clearInterval(timer)
  }, [color])
  return (
    <div className="pt-16">
    <div>
    <h1 className={`text-${color}-600 p-7 font-bold transition-colors duration-500 ease-in-out  hover:text-indigo-500 text-3xl  text-center`}>Empowering Connectivity
    </h1>
  </div>  
        <p className="text-xl font-semibold  p-5 pt-1 ml-2 mr-3 text-center">Seamless Messaging <br /> Across All Touchpoints
        Experience effortless <br /> communication solutions that seamlessly connect you <br /> with customers worldwide, powered by our cutting-edge connectivity and tools</p>
      <div className="text-white relative p-5 grid sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:items-center">
        <div class="div1 flex flex-col border  text-center rounded-xl p-5 h-full border-gray-700">
          <h4 className=" font-bold font-sans text-3xl border-b p-4  border-white">
            Global Reach
          </h4>
          <p className="text-xl p-4">
            Expand your reach across borders and connect with audiences
            globally.
          </p>
        </div>
        <div class="div2 flex flex-col border text-center h-full rounded-xl p-5 border-gray-700">
          <h4 className="font-bold font-sans text-3xl  border-b p-4  border-white">
          Reliability
          </h4>
          <p className="text-xl  p-5">
          Rely on our platform's consistent performance for uninterrupted communication.

          </p>
        </div>

        <div class="div3 flex flex-col border h-full  text-center rounded-xl p-8 border-gray-700">
        <h4 className=" font-bold font-sans text-3xl  border-b p-4  border-white">
          Security
          </h4>
          <p className="text-xl  p-5">
          Safeguard sensitive data with advanced encryption and robust security measures.

            </p>
        </div>

        <div class="div4 flex flex-col border  h-full text-center rounded-xl p-8 border-gray-700">
        <h4 className="font-bold font-sans text-3xl  border-b p-4  border-white">
            Scalability
          </h4>
          <p className="text-lg  p-4">
             Scale your messaging operations effortlessly to meet evolving business needs.
           </p>
        </div>
        <div class="div5 flex flex-col border h-full object-contain text-center rounded-xl p-8 border-gray-700">
        <h4 className="pt-4 font-bold font-sans text-3xl  border-b p-4  border-white">
        Integration with AI Technologies
          </h4>
          <p className="text-xl  p-4">
          Harness the power of AI to optimize messaging strategies and enhance customer interactions.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Divs;
