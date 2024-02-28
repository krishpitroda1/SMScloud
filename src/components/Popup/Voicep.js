import React ,{useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import img1 from "C:/Users/krish/OneDrive/Desktop/sms3/smsloud/src/assets/voice.png";
import { AiOutlineClose } from "react-icons/ai";
import img3 from "C:/Users/krish/OneDrive/Desktop/sms3/smsloud/src/assets/circle.png";

function Voicep(props) {
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
    <div>
      <div className="lg:w-[50%] md:w-[70%]  lg:top-[30%] mr-10 lg:left-[30%]  z-10 absolute border border-black">
        <h1 className=" text-white   text-center p-5 text-2xl font-bold divs border-b ">
          Voice Messaging
          <span
            id="close"
            className=" text-red-600 rounded-md float-end bg-sky-200 hover:cursor-pointer p-1"
            onClick={() => handleClose()}
          >
            <AiOutlineClose />
          </span>
        </h1>
        <div className="grid md:grid-cols-2  bg-white">
          <img
            src={img1}
            className="w-[500px] mx-auto  rounded-md"
            alt=""
          />
         <RevealOnScroll>
          <div className="flex flex-col justify-center">
            <p className="text-sky-600  p-5 font-bold text-2xl">
              Voice Messaging with SMSCloud Hub
            </p>
            <div className="flex p-5 pt-0  gap-3 ">
              <div className="">
                <div className="flex">
                  <h1 className="align-center text-gray-500  text-xl">
                    A voice message is a type of message that you can send or
                    receive using your voice and ...
                  </h1>
                </div>
              </div>
            </div>
            <div className="pl-5">
              <Link to="/Voice">
                <button className="bg-red-400 text-white rounded-lg p-3">
                  Read more
                </button>
              </Link>
            </div>
          </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}

export default Voicep;
