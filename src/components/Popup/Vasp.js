import React,{useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import img1 from "C:/Users/krish/OneDrive/Desktop/sms3/smsloud/src/assets/vas.jpg";
import { AiOutlineClose } from "react-icons/ai";
import img3 from "C:/Users/krish/OneDrive/Desktop/sms3/smsloud/src/assets/circle.png";

function Vasp(props) {
    const handleClose = () => {
        console.log("Clicked");
        props.getClick(true);
      };
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
    
  return (
    <div className="">
    <div className="lg:w-[50%] md:w-[70%]  lg:top-[30%] mr-10 lg:left-[30%]   z-10 absolute border border-black   ">
      <h1 className="  text-center p-5 text-2xl font-bold  divs text-white border-b ">
        Vas
        <span
          id="close"
          className=" text-red-600 float-end bg-sky-200 hover:cursor-pointer p-1 rounded-md"
          onClick={() => handleClose()}
        >
          <AiOutlineClose />
        </span>
      </h1>
      <div className="grid md:grid-cols-2  bg-white">
        <img
          src={img1}
          className="w-[500px] mx-auto my-4 rounded-md"
          alt=""
        />
        <RevealOnScroll> 
        <div className="flex flex-col justify-center">
          <p className="text-sky-600  p-5 font-bold text-2xl">
          Value added Service
          </p>
          <div className="flex p-5 gap-3 ">
            <div className="">
              <div className="flex">
                <h1 className="align-center text-gray-500 text-xl">
                VAS, or non-core services, are  no longer just OTTs or ringtones and ...   </h1>
              </div>
            </div>
          </div>
          <div className="pl-5">
            <Link to="/WA">
              <button className="bg-red-400 text-white rounded-lg p-3">
                read more
              </button>
            </Link>
          </div>
        </div>
        </RevealOnScroll> 
      </div>
    </div>
  </div>)
}

export default Vasp
