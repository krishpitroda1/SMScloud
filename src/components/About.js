import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/img1.jpeg";
import img2 from "../assets/hubs.jpeg";
import img3 from "../assets/easy.jpeg";
import image from '../assets/Events/icon1.jpg'
import image2 from '../assets/Events/i1.png'
import image3 from '../assets/Events/i3.png'
import image4 from '../assets/Events/i4.webp'
import image5 from '../assets/Events/i5.png'
import image6 from '../assets/Events/i6.png'

import { count } from "firebase/firestore";
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
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="w-screen  overflow-x-hidden relative p-8 ">
      <div className="">
        <h1 className="md:pl-5 sm:pl-5 pl-5 align-center text-sky-600 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>

          About Us
        </RevealOnScroll>
        </h1>
      </div>
      <div className="">
        <div className="lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            className="w-[500px] rounded-2xl mx-auto  "
            src={img}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-4xl sm:text-3xl text-red-600 text-2xl font-bold p-5">
          <RevealOnScroll>

              Messaging is our business!
          </RevealOnScroll>
            </h1>
            <p className="p-5 pt-0 text-xl text-black">
             <RevealOnScroll>

              SMSCloud Hub provides solutions for better customer engagement
              through a cloud-based platform. We empower businesses to engage
              with their people through a variety of channels, making their
              communication conversational, more personalized, fun, meaningful,
              and with ease. With an innovative suite of Cloud based solutions,
              WebPanels & APIs, SMSCloud Hub delivers communication solutions
              that have been used by almost everyone around the world
             </RevealOnScroll>
            </p>
            <p className="p-5 pt-0 text-xl">
             <RevealOnScroll>

              When the messaging is the central to the business, we solve
              today’s unique customer challenges by bridging business to the
              world by using complex communication channels. And we thrive with
              A2P Messaging for India and International Market providing
              solutions with the right mix of Cloud Technlogy &
              Telecommunications.
             </RevealOnScroll>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h1 className="align-center text-sky-600  h-20  text-center p-5  font-bold text-3xl">
          Why Choose Us
        </h1>
        <div className="lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img2}
            className="w-[500px] mx-auto my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center md:p-0 lg:p-5">
            <p className="text-sky-600  font-bold text-3xl lg:p-5 md:pl-0 md:pr-0">
          <RevealOnScroll>

              Advantages for Choosing Us
          </RevealOnScroll>
            </p>
            <h1 className="pt-0 font-semibold lg:p-5 md:pl-0 md:pr-0 md:pt-4  text-lg sm:text-xl md:text-xl">
              <RevealOnScroll>

              Even in the age of digital advertising, tapping into SMS, or
              simply texting, is considered as the personalized, fastest, and…
              </RevealOnScroll>
            </h1>
            <div className="grid grid-flow-row lg:pl-5 md:pl-0 gap-4">
              <div className="grid grid-cols-3 gap-5 pt-5">
                <div>
                  <img src={image2} className="h-10 rounded-lg" alt="" />
                  <h1 className="align-center  text-sky-600  text-xl">
                  <RevealOnScroll>

                    Easy to integrate
                  </RevealOnScroll>
                  </h1>
                  <p className="font-semibold"><RevealOnScroll>Adaptive platform to connect with your existing clients</RevealOnScroll></p>
                </div>
                <div>
                  <img src={image} className="h-10 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                  <RevealOnScroll>

                    Global Reach
                  </RevealOnScroll>
                  </h1>
                  <p className="font-semibold"><RevealOnScroll> World Wide Connectivity</RevealOnScroll></p>
                </div>
                <div>
                  <img src={image3} className="h-10 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                 <RevealOnScroll>
                    Cloud Scalable
                  </RevealOnScroll>  
                  </h1>
                  <p className="font-semibold">
                 <RevealOnScroll>

                    Burstable capacity in the cloud to support your business.
                 </RevealOnScroll>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5 pt-5">
                <div>
                  <img src={image4} className="h-10 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                  <RevealOnScroll>

                    Responsive Team
                  </RevealOnScroll>
                  </h1>
                  <p className="font-semibold">
                    <RevealOnScroll>Friendly and always available business & support team.</RevealOnScroll></p>
                </div>
                <div>
                  <img src={image5} className="h-10 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                    <RevealOnScroll>Low TCO</RevealOnScroll>
                  </h1>
                  <p className="font-semibold"><RevealOnScroll>Adaptive platform to connect with your existing clients</RevealOnScroll></p>
                </div>
                <div>
                  <img src={image6} className="h-10 ounded-lg" alt="" />
                  <h1 className="align-center text-sky-600  text-xl">
                   <RevealOnScroll>

                    Futuristic Solution
                   </RevealOnScroll>
                  </h1>
                  <p className="font-semibold">
                  <RevealOnScroll>

                    Using new-age technologies we bring 360-degree Digital.
                  </RevealOnScroll>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{/* <End/> */}</div>
    </div>
  );
}

export default About;
