import React from 'react'
import Cloudskool from './Cloudskool';
import Cpas from './Cpas';
import img3 from "../assets/ck.png";
import img1 from '../assets/cskool.jpeg'
import emailjs from '@emailjs/browser';
import { useEffect, useState,useRef } from "react";

import Ccc from './Ccc';
function Technology() {
  const form = useRef();

  return (
    <div className='pt-16'>
     <h1 className="relative w-screen pt-5 text-sky-600 text-center  font-bold text-4xl ">
        Our Technology Services
    </h1>
    <div className=' w-screen relative  pb-8'>
    <h1 className="align-center text-gray-500  text-center p-5  font-bold text-4xl">
    CloudSkool++
    </h1>
    
    <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto lg:pl-10  my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">CloudSkool++ <br /> <span className="text-gray-400"> The education platform </span></p>
             <p className="text-center p-5 lg:p-44 lg:pt-3 lg:pb-0 text-gray-400 lg:text-2xl text-2xl ">
             CloudSkool++ is a cloud based ED-Tech solution and is simple, safe and smart solution has enormous facilities for any school,college, university and any student. 

          </p>
            
          </div>
        </div>

        <div className="pb-10  ">
        
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Features Of Cloudskool++
          </p>
        
        <div className='flex justify-center items-center p-5'>
      <img src={img3} className=' object-center ' alt="" />

        </div>
    
        
        
      </div>
    
  
  
   
    </div>    <Cpas/>
        <Ccc/>
    </div>
  )
}

export default Technology
