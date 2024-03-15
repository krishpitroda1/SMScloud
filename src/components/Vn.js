import React,{useState,useEffect,useRef} from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/vn.png';
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

function Vn() {
  return (
    <div>
      <div className=' w-screen relative pt-7 pb-8'>
    <RevealOnScroll>
    <h1 className="align-center text-gray-500 pt-16  text-center p-5  font-bold text-4xl ">
      Virtual Number
    </h1>
    <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto lg:pl-10  my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">Have your own virtual phone number   <br /> <span className="text-gray-400"> in any city or country worldwide </span></p>
             <p className="text-center p-5 lg:p-36 lg:pt-2 lg:pb-0 text-gray-400 lg:text-2xl text-2xl ">
             Virtual number is Showing a local number to visitors at your web site increases trust and sales with SMSCloud Hub
             </p>
            </RevealOnScroll>
          </div>
        </div>
</RevealOnScroll>
<div className="">
        <RevealOnScroll>
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Benefits Of Virtual Number
            </p>
        </RevealOnScroll>
    
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
          <div className="benefits rounded-lg pt-8 h-32 p-5 bg-sky-900 hover:bg-gray-400  text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Higher Conversion Rate</p>
              <p>Track every inbound and outbound call which engage proactively to drive more conversion</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Identify Quality Leads </p>
              <p>Virtual Number is the solution allows you to mask numbers of both the agent and a customer</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  -32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Be Omnipresent</p>
              <p>Forward all customers call to agents to manage business call from anywhere</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Optimize Operational  Efficiency</p>
              <p>Route the customer calls to specific agents based on their availability</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Real-time Data Insights</p>
              <p>Receive actionable data insights on call performance</p>
            </RevealOnScroll>
          </div>
          <div className=" benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Number Masking</p>
              <p>Ensure customer privacyGuarantee customer confidentiality and prevent any lead exposure with a number masking solution</p>
            </RevealOnScroll>
          </div>
        </div>
      </div>

</div>
            </div>
  )
}

export default Vn
