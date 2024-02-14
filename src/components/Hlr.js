import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/hlr.jpeg';
import { useState, useEffect,useRef} from 'react';

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

function Hlr() {
  return (
   <div className=' w-screen pt-7 relative pb-8'>
    <RevealOnScroll>

    <h1 className="align-center text-sky-600  pt-10 text-center p-5  font-bold text-3xl">
      Home Location Register
    </h1>
    
    <div className="lg:flex md:grid md:grid-cols-2 lg:pl-3 p-5">
    <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
    <div className="flex flex-col justify-center">
   <RevealOnScroll>
      <p className="text-orange-600 p-5 font-bold text-3xl">
     Home Location Register(HLR)
      </p>
      <h1 className="py-3 font-semibold text-lg p-5 sm:text-xl md:text-xl">
      home location register (HLR) is a database containing pertinent data regarding subscribers authorized to use a global system for mobile communications (GSM) network.
    </h1>
      <div className="flex p-5">

      <div className="pr-10">
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          Home Location Register is the subscribers 	database of a network, contains Customer data, 	including the validity of a phone number, which 	network it is operating on, number has porting, 	the network that originally issued the number, 	and information on whether or not the number 	is roaming.
</h1>
 </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          Allows businesses to adjust their messaging 	capabilities as needed to meet changing 	business requirements
 </h1>
         </div>
      </div>
    </div>

    </RevealOnScroll>
    </div>
  </div>
  </RevealOnScroll>
   
</div>
    )
}

export default Hlr
