import React from "react";
import img2 from "../assets/hubs.jpeg";
import img3 from "../assets/circle.png";
import img1 from "../assets/a2p.png";
const A2P = () => {
  return (
    <div className=" w-screen relative  p-8">
      <h1 className="md:pl-5 sm:pl-5 pl-5 align-center text-sky-600 pt-10 text-center p-5  font-bold text-3xl ">
        Application to Person Messaging
      </h1>
      <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
      <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
    
        <div className="flex flex-col justify-center p-5">
          <p className="text-orange-600 pl-1 font-bold text-3xl">
            A2P Messaging
          </p>
          {/* <h1 className="py-3 text-lg sm:text-xl md:text-xl">
          A2P messaging stands for Application-to-Person messaging. It is a type of SMS text messaging used to send messages from an application or software program to a mobile device or phone and it is...
           </h1> */}
          <div className="grid grid-flow-row pt-10  gap-4">
            <div className="">
              <div className="flex ">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl ">
                With global rise of digitization, Businesses create millions of touchpoints daily 
                These touchpoints consist of promotional to service messages to transactional messages

                </h1>
              </div>
              <div className="pt-5">

              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl">
                Globally SMS messages read average under 3 	Minutes

                </h1>
              </div>
            </div>
              </div>

        
              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl">
                SMS offers proficient and personal way to reach 	end-users

                </h1>
              </div>
              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl">
                SMS offers an incredibly high ROI when
compared with other digital marketing channels
      </h1>
              </div>
        
              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl">
                Special Rates and effective Routes for India and 	189 countries of the world
 </h1>
              </div>
              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl">
                Fastest Termination with Real Time Delivery 	Reports
</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default A2P;
