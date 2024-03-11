import React from 'react'
import WA from './WA'
import A2P from './A2P'
import Voice from './Voice'
import img1 from '../assets/wa.png'
import Cpas from './Cpas'
function Enterprise() {
  return (
    <div className='pt-16 pb-0'>
       <h1 className="relative w-screen pt-5  text-sky-600 text-center  font-bold text-4xl ">
      Our Enterprise Services
    </h1>
    <div className="w-screen relative pt-8 pb-8">
      
        <h1 className=" text-gray-500  text-center p-5  font-bold text-4xl ">
          SMSCloud Hub's WhatsApp Suite: Boost Engagement & Efficiency!{" "}
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto lg:pl-10  my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">Unlock more ROI with  <br /> <span className="text-gray-400"> WhatsApp Marketing </span></p>
             <p className="text-center p-5 lg:p-36 lg:pt-3 lg:pb-0 text-gray-400 lg:text-2xl text-2xl ">

              Run automated, personalized marketing campaigns, on the world’s most populr messaging platform
             </p>
            
          </div>
        </div>
      
      <div className=" lg:pl-20 p-10 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
            <div>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-sky-600">
                
                2.5x
                
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-500">
              Conversions vs email
              </p>
            
              <p className="mt-1 text-gray-500">WhatsApp  outperforms email in terms of conversions by 2.5x</p>
            </div>
            <div>
              <p className="mt-2 md:mt-3 text-4xl md:text-6xl font-bold text-sky-600">
               

              75%
                 
              </p>
              <p className="text-lg md:text-xl font-bold text-gray-500">
             
              Average open rate
            </p>
       
              <p className="mt-1 text-gray-500">On average, WhatsApps achieve a 75% open rate</p>
            </div>
            <div>
              <p className="mt-2 md:mt-3 text-4xl md:text-6xl font-bold text-sky-600">
              

              2 Billion
                   
              </p>
              <p className="text-lg sm:text-xl font-bold text-gray-500">
              Monthly active users  </p>
             
              <p className="mt-1 text-gray-500">Reach 2B people on the world's most used chat app</p>
            </div>
          </div>
          <div className="">
        
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Features Of WhatsApp Service with SMSCloud Hub
          </p>
        
    
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
          <div className="benefits rounded-lg pt-8 h-32 p-5 bg-sky-900 hover:bg-gray-400  text-white">
            
              <p className="font-bold text-xl">High Open Rates</p>
              <p>Enjoy 90%+ open rates with our broadcast feature</p>
            
          </div>
          <div className="benefits rounded-lg h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">Recover Lost Sales </p>
              <p>Re-engage customers effectively, bidding goodbye to abandoned carts</p>
            
          </div>
          <div className="benefits rounded-lg  -32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">Automate Everything</p>
              <p>Streamline marketing, sales, and support tasks effortlessly</p>
            
          </div>
          <div className="benefits rounded-lg  h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">Multiple Agents</p>
              <p>Share the Wati inbox among your team with unlimited agent support</p>
            
          </div>
          <div className="benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">Low-Code Automations</p>
              <p> Simplify mass communication and personalize responses effortlessly</p>
            
          </div>
          <div className=" benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">One-to-One Communication</p>
              <p>Tag, categorize, and target contacts in personalized groups</p>
            
          </div>
        </div>
      </div>
    </div>
      <A2P/>
      <Voice/>
      <Cpas/>
  
    </div>
  )
}

export default Enterprise
