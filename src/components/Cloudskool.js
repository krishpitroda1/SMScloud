import React from 'react';
import img3 from "../assets/ck.png";
import img1 from '../assets/cskool.jpeg'
import emailjs from '@emailjs/browser';
import { useEffect, useState,useRef } from "react";

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
  },);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function Cloudskool() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sf5lyrk', 'template_0tl3o4j', form.current, '-5PwbfIUXfNKA7-Sv')
      .then((result) => {
          console.log(result.text);
          alert("email send successfully ")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
     <div className=' w-screen relative pt-8 pb-8'>
    <h1 className="align-center text-gray-500 pt-16 text-center p-5  font-bold text-4xl">
    CloudSkool++
    </h1>
    <RevealOnScroll>
    <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto lg:pl-10  my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">CloudSkool++ <br /> <span className="text-gray-400"> The education platform </span></p>
             <p className="text-center p-5 lg:p-44 lg:pt-3 lg:pb-0 text-gray-400 lg:text-2xl text-2xl ">
             CloudSkool++ is a cloud based ED-Tech solution and is simple, safe and smart solution has enormous facilities for any school,college, university and any student. 

          </p>
            </RevealOnScroll>
          </div>
        </div>

        <div className="pb-10  ">
        <RevealOnScroll>
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Features Of Cloudskool++
          </p>
        </RevealOnScroll>
        <div className='flex justify-center items-center p-5'>
      <img src={img3} className=' object-center ' alt="" />

        </div>
    
        
        
      </div>
    </RevealOnScroll>
   <RevealOnScroll>
  <div className='mr-10 ml-10 rounded-lg divs '>
    <h1 className='p-5 text-3xl text-center text-white  font-bold'>Contact Us For Demo</h1>
  <form ref={form} onSubmit={sendEmail} className='h-full p-10 pt-0  align-middle '>
          <div class="">
             <div class="p-3">
              <div>
                <p className='pl-1 pb-1 text-white text-lg'>Name</p>
                <input type="text" name="user_name" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none= " placeholder=" Name" required/>
              </div> 
             </div>

             <div className='p-3'>
              <p className='pl-1 pb-1 text-white text-lg'>Email</p>
              <input type="email" name="user_email" autocomplete="email" className="py-3 px-4 p-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" required/>
            </div> 

            <div className='p-3'>
              <label className='pl-1 pb-1 text-white text-lg'>Phone Number</label>
              <input type='tel' name="phone_no" id="hs-phone-number-1" class="py-3 px-4 p-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Phone Number"  pattern="[0-9]{10}" required/>
            </div> 

             <div className='p-3'> 
              <label className='pl-1 pb-1 text-white text-lg'>Details</label>
              <textarea  name="details" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Details" required></textarea>
            </div>
          </div>
          <div class="mt-4  p-3">
            <input type="submit" value='Send Inquiry' class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2  font-semibold rounded-lg border border-transparent bg-gray-400 text-xl text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none" />
          </div>

          <div class="mt-3 text-center">
            <p class="text-lg text-white">
              We'll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
  </div>
  </RevealOnScroll>
   
    </div>
  )
}

export default Cloudskool
