import React from 'react'
import Managehubs from './Managehubs'
import Hop from './0Hop'
import img1 from '../assets/ohop.png'
import Vas from './Vas'
import Smsc from './Smsc'
import A2P from './A2P'
function Operator() {
  return (
    <div className='pt-16'>
        <h1 className="relative w-screen pt-5  text-sky-600 text-center  font-bold text-4xl ">
       Our Operator Services
        </h1>
        <div className=' w-screen relative'>
    
    <h1 className="align-center text-gray-500  text-center p-5  font-bold text-4xl">
      0Hop Connectivity
    </h1>
      <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">Extend terminations beyond <br /> <span className="text-gray-400"> current reach for quicker and  more  <br /> dependable A2P SMS delivery</span></p>
             <p className="text-center p-5 text-gray-400 lg:text-2xl text-2xl ">

             These routes connect directly with mobile operators in the <br /> destination country. 
There are minimal intermediaries, <br /> resulting in  higher reliability and delivery rates</p>
            
          </div>
        </div>
  
  <div className="">
        
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
          Advantages of zero-hop connections    </p>
        
    
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
          <div className="benefits rounded-lg pt-8 h-32 p-5 bg-sky-900 hover:bg-gray-400  text-white">
            
              <p className="font-bold text-xl">Security</p>
              <p>A secure connection with minimal intervention</p>
            
          </div>
          <div className="benefits rounded-lg h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">Reliability </p>
              <p>High availability of services</p>
            
          </div>
          <div className="benefits rounded-lg  -32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">Alerts</p>
              <p>Immediate notifications in case of issues or scheduled maintenance</p>
            
          </div>
          <div className="benefits rounded-lg  h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">Delivery Rate</p>
              <p> Maximized delivery success</p>
            
          </div>
          <div className="benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">Compliance</p>
              <p>Adherence to data protection laws</p>
            
          </div>
          <div className=" benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            
              <p className="font-bold text-xl">Direct Routes</p>
              <p>These routes connect directly with mobile operators in the destination country</p>
            
          </div>
        </div>
      </div>
    
</div>
      <Managehubs/>
      <Smsc/>
      <Vas/>
    </div>
  )
}

export default Operator
