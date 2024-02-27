import React,{useState,useEffect,useRef} from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/voice.png';

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

const Voice = () => {
  return (
    <div className=' w-screen relative pt-7 pb-8'>
    <RevealOnScroll>
    <h1 className="align-center text-gray-500 pt-16 text-center p-5  font-bold text-4xl">
    Elevate Your Communications with SMSCloud Hub VoIP Solutions</h1>
   
      <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] lg:pl-32 mx-auto my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">Seamless Connectivity, Reliable 
 <br /> <span className="text-gray-400"> Routing and Top-tier Service  </span></p>
             <p className="text-center lg:p-32 p-5 lg:pt-3 lg:pb-0 text-gray-400 lg:text-2xl text-2xl ">

             At SMSCloud Hub, we excel in VoIP termination, enabling businesses to seamlessly connect with their customers. Leveraging our vast network of carriers and tier 1 operators, we ensure reliable and efficient routing of voice traffic.      </p>
            </RevealOnScroll>
          </div>
        </div>
  </RevealOnScroll>
  <div className="">
        <RevealOnScroll>
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Benefits Of Voice Service with SMSCloud Hub
          </p>
        </RevealOnScroll>
    
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
          <div className="benefits rounded-lg pt-8 h-32 p-5 bg-sky-900 hover:bg-gray-400  text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Industry-leading rates</p>
              <p>SMSCloud Hub 's strength to offer you the best possible rates</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Autonomous portal </p>
              <p>Versatile self-service portal with advance reporting</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  -32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Expandable capability</p>
              <p>Advance communication platform with endless channels and robust cps capabilities</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Global-scale DIDs covrage</p>
              <p>For hassle-free access and explore our convenient access numbers</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">SMS Platform & API's</p>
              <p>Rich-featured SMS platform  for intensifying engagement</p>
            </RevealOnScroll>
          </div>
          <div className=" benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Support</p>
              <p>Around-the-clock support service that is available worldwide</p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    
</div>
  )
}

export default Voice
