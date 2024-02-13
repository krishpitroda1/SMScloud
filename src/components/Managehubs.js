import React from "react";
import img3 from "../assets/circle.png";
import img1 from "../assets/managehubs.jpg";
function Managehubs() {
  return (
    <div>
      <div className=" w-screen pt-8 relative pb-8">
        <h1 className="align-center text-sky-600  pt-10 text-center p-5  font-bold text-3xl">
          Managed Service For Messaging Hubs
        </h1>
        <div className="lg:flex md:grid md:grid-cols-2 ">
        <img
            src={img1}
            className="w-[700px] mx-auto my-4 rounded-2xl p-3 h-[500px]"
            alt=""
          />
    
          <div className="flex flex-col justify-center p-5">
            <p className="text-orange-600 font-bold text-3xl pt-10">
              Managed Service For Messaging Hubs
            </p>
            <div className="grid grid-flow-row pt-10 gap-4">
              
                <div className="flex">
                  <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl  pr-5">
                    Messaging hubs are platforms or services that enable
                    communication between different applications, devices, or
                    systems using messages or events.{" "}
                  </h1>
                </div>
                <div className="flex">
                  <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl ">
                    Messages are raw data that contain the information that
                    triggered the message pipeline, while events are lightweight
                    notifications of a condition or a state change.{" "}
                  </h1>
                </div>
                <div className="flex">
                  <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl ">
                  Regular monitoring of messaging hubs to 	ensure optimal performance, detect potential 	issues, and perform necessary maintenance to 	keep the system running smoothly  </h1>
                </div>
                <div className="flex ">
                  <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                  Regular software upgrades and security 	patches to ensure that messaging hubs are up- 	to-date and protected against vulnerabilities
       </h1>
                </div>
              
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Managehubs;
