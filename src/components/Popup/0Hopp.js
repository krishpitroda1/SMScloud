
import React,{useRef,useEffect,useState} from "react";
import { Link } from "react-router-dom";
import img1 from "C:/Users/krish/OneDrive/Desktop/sms3/smsloud/src/assets/ohop.png";
import { AiOutlineClose } from "react-icons/ai";
import img3 from "C:/Users/krish/OneDrive/Desktop/sms3/smsloud/src/assets/circle.png";

function Hopp(props) {
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
         <h1 className=" text-white divs lg:text-2xl text-lg  text-center p-5  font-bold   border-b ">
        0Hop Connectivity
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
            className="w-[500px] mx-auto rounded-md"
            alt=""
          />
          <RevealOnScroll>
          <div className="flex flex-col justify-center">
            <p className="text-sky-600  p-5 font-bold text-2xl">
            Direct Routes
            </p>
            <div className="flex ">
              <div className="">
                <div className="flex">
                  <h1 className="align-center p-5 pt-0 text-gray-500  text-xl">
                  These routes connect directly with mobile operators in the destination country and ...  </h1>
                </div>
              </div>
            </div>
            <div className="pl-5 pt-6">
              <Link to="/0Hop">
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
  )
}

export default  Hopp;

 
//     </div>
//   )
// }

// export default Hopp;
