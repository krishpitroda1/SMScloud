import React from 'react'
import A2P from './A2P'
import Vn from './Vn'
import img1 from '../assets/a2p.png'
import Voice from './Voice'
function Carrier() {
  return (
    <div className='pt-16'>
       <h1 className=" relative w-screen pt-5 text-sky-600 text-center  font-bold text-4xl">
   Our Carrier Services
    </h1>
    <div className=" w-screen relative pt-0 p-8">
      <h1 className="md:pl-5 sm:pl-5 pl-5 align-center text-gray-500  text-center p-5  font-bold text-4xl ">
        Application to Person Messaging
      </h1>
      
        <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px]   lg:pl-10  my-4 rounded-2xl"
            alt=""
          />

          <div className="flex flex-col justify-center lg:p-5 md:p-0 mx-auto">
            <div className="flex flex-col justify-center text-center mx-auto ">
              
                <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">
                  Power of  Customer Engagement <br />
                  <span className="text-gray-400">  Engage with your customers <br /> instantly and in real time
              </span>
                </p>
                <p className="text-center mx-aut0 lg:p-20 pt-3 pb-3 lg:pt-3  text-gray-400 lg:text-2xl text-2xl ">
                Tap into the highest engagement rates with SMS, where 9 out of 10 people read their texts, by seamlessly integrating SMS into your campaigns and workflow for maximum impact
                </p>
              
            </div>
          </div>
        </div>
      
      <div className="justify-between lg:pl-20 lg:p-10 p-5 grid grid-cols-2  lg:grid-cols-3 ">
        <div>
          <p className="mt-2 md:mt-3 lg:text-5xl text-3xl font-bold text-sky-600">
            98%
          </p>
          <p className="text-lg md:text-xl font-bold text-gray-500">
            Open Rate
          </p>
        </div>
        <div>
          <p className="mt-2 md:mt-3 lg:text-5xl text-2xl font-bold text-sky-600">
            3 Minutes
          </p>
        <p className="text-lg md:text-xl font-bold text-gray-500">
            Avg read time
          </p>
        
        </div>
        <div>
          <p className="mt-2 md:mt-3  text-3xl lg:text-5xl font-bold text-sky-600">
            8.9 Billion
          </p>
          <p className="text-xl font-bold text-gray-500">Global subscribers </p>
        </div>
      </div>
      <div className="">
        
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Benefits Of A2P with SMSCloud Hub
          </p>
        
    
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  lg:p-5 lg:pr-8">
          <div className="benefits rounded-lg pt-8 h-32 p-5 bg-sky-900 hover:bg-gray-400  text-white">
            
              <p className="font-bold text-xl">  With global rise of digitization, Businesses create millions of touchpoints daily</p>
             
          </div>
          <div className="benefits rounded-lg h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">  Globally SMS messages read average under 3 	Minutes
 </p>
            
          </div>
          <div className="benefits rounded-lg  -32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">  SMS offers proficient and personal way to reach end-users
</p>
            
          </div>
          <div className="benefits rounded-lg  h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl"> Special Rates and effective Routes for India and 	189 countries of the world
 </p>
            
          </div>
          <div className="benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">Get a diffrent links for marketing campaigns</p>
            
          </div>
          <div className=" benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">Fastest Termination with Real Time Delivery Reports</p>
            
          </div>
        </div>
      </div>
    </div><Voice/>
      <Vn />
    </div>
  )
}

export default Carrier
