import React,{useState,useEffect,useRef} from "react";
import img3 from "../assets/circle.png";
import img1 from "../assets/smsc2.jpeg";
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

function Cr() {

  return (
    <div className=" w-screen relative pt-7 pb-8">
     <RevealOnScroll>

      <h1 className="align-center text-sky-600  text-center pt-10 p-5  font-bold text-3xl">
        CR
      </h1>
        <div className="lg:flex md:grid md:grid-cols-2 p-5">
      <img src={img1} className="w-[500px] h-96 mx-auto my-4 rounded-2xl" alt="" />
      <RevealOnScroll> 
        <div className="flex flex-col justify-center">
          <p className="text-orange-600  p-5 font-bold text-3xl pt-10">
            Change Request(CR)
          </p>

          <div className="flex pr-5 p-5">
            
            <div className="">
              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl pb-5">
                  A change request in an existing Short Message Service Center
                  (SMSC) refers to a request to modify, update or improve an
                  existing SMSC system. 
                </h1>
              </div>
              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl pb-5">
                  We ensures that the system is updated and improved to meet the
                  evolving needs of Your business.
                </h1>
              </div>
              <div className="flex">
                <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                <h1 className="align-center text-sky-600  text-xl pb-5">
                This can be due to various reasons such
                  as new business requirements, technological advancements, or
                  to resolve system issues.</h1>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>  
      </div>
      </RevealOnScroll>
  
  
     
    </div>
  );
}

export default Cr;
