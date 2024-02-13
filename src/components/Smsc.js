import React from "react";
import img3 from "../assets/circle.png";
import img1 from "../assets/smsc.jpeg";
function Smsc() {
  return (
    <div>
      <div className=" w-screen relative pt-10 pb-8">
        <h1 className="align-center text-sky-600 pt-10  text-center p-5  font-bold text-3xl ">
          SMSC Firewall
        </h1>
        <div className="lg:flex md:grid md:grid-cols-2 p-5 lg:pt-0">
          <img
            src={img1}
            className="w-[900px] h-96 mx-auto my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col p-5 justify-center">
            <p className="text-orange-600 p-5 font-bold text-3xl ">
              SMSC Firewall
            </p>
            <h1 className="text-lg font-semibold sm:text-xl md:text-xl p-3 ">
            Protect an SMSC from unauthorized access 	and potential attacks, controlling the flow of 	data into and out of the SMSC

            </h1>
            <div className="grid grid-flow-row pt-5 ">
              <div className="">
                <div className="flex">
                  <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl pb-5">
                  Ensure the reliability and security of SMS 	messages and helps prevent potential 	security breaches

                  </h1>
                </div>
                <div className="flex">
                  <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl pb-5">
                  Traffic Filtering and content inspection
   </h1>
                </div>
              </div>
               <div className="">
                <div className="flex">
                  <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl ">
                  Authentication and Authorization
     </h1>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smsc;
