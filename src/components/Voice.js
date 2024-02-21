import React,{useState,useEffect,useRef} from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/voice.jpeg';

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
    <h1 className="align-center text-sky-600 pt-10 text-center p-5  font-bold text-3xl">
      Voice Messaging
    </h1>
    <div className=" lg:flex md:grid md:grid-cols-2 p-5 " >
    <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
    <div className="flex flex-col justify-center">
        <RevealOnScroll>     <p className="text-orange-600 p-5 font-bold text-3xl pl-7">
        Voice Messaging
      </p>
      <h1 className="text-lg font-semibold  pl-8 sm:text-xl md:text-xl">
      A voice message is a type of message that you can send or receive using your voice. It is different from a voice call, which is a live conversation between two or more people.   </h1>
    <div className="flex lg:p-5">

      <div className="">
        <div className='flex pt-3'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          Voice messages are useful when you want to communicate something quickly, easily, or privately, without having to type or call. 
          </h1>
        </div>
        <div className='flex pt-3'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          Type of communication service that 	enables users to make and receive voice 	calls using telecommunication networks, 	such as landlines, mobile networks, or 	voice over IP (VoIP) networks.
  </h1>
         </div>
        <div className='flex pt-3'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          Accessible and affordable, making it 	easier for people to stay connected with 	each other regardless of location or 	device.
</h1>
</div>
        <div className='flex pt-3'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          Some voice messages also have transcripts, which are written versions of what was said in the message
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

export default Voice
