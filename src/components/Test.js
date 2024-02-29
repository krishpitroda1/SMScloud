import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
export default function App() {
  const data = [
    {
      name: "abc",
      img: "https://media.licdn.com/dms/image/D4D03AQFm0iO0GGhXbA/profile-displayphoto-shrink_800_800/0/1689083752439?e=1712188800&v=beta&t=ajLcqon4GmavLbNk-0ZmPcjepDeutV1zUYaaqFGv4w",
      review:
        "SMSCloud Hub provides one of if not the best school platform that we ever saw being provided with 24/7 support in the Mozambican Market allowing our growth in the school software segment",
    },
    {
      name: "abc",
      img: "https://media.licdn.com/dms/image/D4D03AQFm0iO0GGhXbA/profile-displayphoto-shrink_800_800/0/1689083752439?e=1712188800&v=beta&t=ajLcqon4GmavLbNk-0ZmPcjepDeutV1zUYaaqFGv4w",
      review:
        "SMSCloud Hub provides one of if not the best school platform that we ever saw being provided with 24/7 support in the Mozambican Market allowing our growth in the school software segment",
    },
    {
      name: "abc",
      img: "https://media.licdn.com/dms/image/D4D03AQFm0iO0GGhXbA/profile-displayphoto-shrink_800_800/0/1689083752439?e=1712188800&v=beta&t=ajLcqon4GmavLbNk-0ZmPcjepDeutV1zUYaaqFGv4w",
      review:
        "SMSCloud Hub provides one of if not the best school platform that we ever saw being provided with 24/7 support in the Mozambican Market allowing our growth in the school software segment",
    },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-screen pt-10">
      <RevealOnScroll>

      </RevealOnScroll>
      <div className="divs overflow-hidden bg-sky-900">
        <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
            <RevealOnScroll>

             <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
              Loved by business and individuals across the globe
            </p> 
            </RevealOnScroll>
          </div> */}
 <p className=" text-gray-500  text-center p-5 pb-0 -ml-7   font-bold  text-3xl">
         Clients' Feedback
      </p>
     
          <div className="m-5 p-5">
            <Slider {...settings}>
              <div className="flex  p-3">
                <div className="flex flex-col border border-black rounded-xl">
                  <div className="flex-auto h-64 p-4 md:p-6">

                    <p className="text-base italic md:text-lg text-white">
                   <RevealOnScroll>
                      "SMSCloud Hub provides one of if not the best school
                      platform that we ever saw being provided with 24/7 support
                      in the Mozambican Market allowing our growth in the school
                      software segment."
                   </RevealOnScroll>
                    </p>
                  </div>

                  <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                          src="https://media.licdn.com/dms/image/D4D03AQFCUjqGL2uj4Q/profile-displayphoto-shrink_800_800/0/1693931754329?e=1712188800&v=beta&t=CN07UEYcc9Ck_ay29gpWuEmmGW-Q9SNWvakv2UO921Y"
                          alt="Image Description"
                        />
                      </div>

                      <div className="grow ms-3">
                        <p className="text-sm sm:text-base font-semibold text-gray-800 ">
                          Hugo Rebeiro
                        </p>
                        <p className="text-xs text-gray-400">
                          Click Mobile
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-3">
                <div className="flex flex-col border border-black h-full rounded-xl">
                  <div className="flex-auto h-64 p-4 md:p-6">

                    <p className="text-base italic md:text-lg text-white">
                    <RevealOnScroll>
                      "We Tubelight Communication working with SMS Cloud Hub for
                      a long time now, the routes, service and support have been
                      constant and we see working with them successfully in the
                      future as well".
                    </RevealOnScroll>
                    </p>
                  </div>

                  <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 ">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                          src="https://media.licdn.com/dms/image/D4D03AQFm0iO0GGhXbA/profile-displayphoto-shrink_800_800/0/1689083752439?e=1714003200&v=beta&t=lF6NcokYFwkXWdTM5TU2_w-t5Hr8WcHvdtYqd-o7bTw"
                          alt="Image Description"
                        />
                      </div>

                      <div className="grow ms-3">
                        <p className="text-sm sm:text-base font-semibold text-gray-800">
                          Praveen Singh
                        </p>
                        <p className="text-xs text-gray-400">
                          Tubelight Communication
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-3">
                <div className="flex flex-col border border-black h-full rounded-xl ">
                  <div className="flex-auto h-64 p-4 md:p-6">

                    <p className="text-base italic md:text-lg text-white">
                  <RevealOnScroll>
                      "We have been working with SMSCloud Hub since more than a
                      year now and the cooperation with their Commercial Team
                      has been extremely successful. They immediately understand
                      our needs and provide in a short time the optimal solution
                      to our requests both in terms of service quality and costs."
                  </RevealOnScroll>
                    </p>
                  </div>

                  <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 ">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                          src="https://media.licdn.com/dms/image/C4D03AQG06MMsmAA4DQ/profile-displayphoto-shrink_400_400/0/1657991464854?e=1712188800&v=beta&t=8plQ1IvFzcKv6aejyExIbKJFK82dRDDEQ2K5U1AfgSc"
                          alt="Image Description"
                        />
                      </div>

                      <div className="grow ms-3">
                        <p className="text-sm sm:text-base font-semibold text-gray-800">
                          Antonio Catanzariti
                        </p>
                        <p className="text-xs text-gray-400">
                          Imerald (FZE)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-3">
                <div className="flex border border-black flex-col rounded-xl ">
                  <div className="flex-auto h-64 p-4 md:p-6">

                    <p className="text-base italic md:text-lg text-white">
                   <RevealOnScroll>
                      "Choosing SMSCloud Hub as our aggregator was the best
                      decision we made for our business. Their platform
                      seamlessly connects us with multiple telecom operators,
                      simplifying our messaging operations and enabling us to
                      reach our customers more effectively."
                   </RevealOnScroll>
                    </p>
                  </div>

                  <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                          src="https://th.bing.com/th/id/OIP.ROJLMWQcPybcPj5Pn70_oAHaHa?rs=1&pid=ImgDetMain"
                          alt="Image Description"
                        />
                      </div>

                      <div className="grow ms-3">
                        <p className="text-sm sm:text-base font-semibold text-gray-800 ">
                          Erasmus Okrut
                        </p>
                        <p className="text-xs text-gray-400">
                          Intervas Limited
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-3">
                <div className="flex border border-black flex-col rounded-xl">
                  <div className="flex-auto h-64 p-4 md:p-6">

                    <p className="text-base italic md:text-lg text-white">
                  <RevealOnScroll>
                     "The five months we spent working with the SMSCLOUD
                      organization were a great asset to our company. Even
                      though they are a new firm in the SMS industry, but we
                      have a solid working relationship and the business is
                      expanding every month."  
                  </RevealOnScroll>
                    </p>
                  </div>

                  <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                          src="https://media.licdn.com/dms/image/D4E03AQHtnGIPYEOdeA/profile-displayphoto-shrink_800_800/0/1700205289234?e=1712188800&v=beta&t=QE1LqnphwmZQFfNk3FMZrk4j-Yjsy1nKbyNDUv5DOhg"
                          alt="Image Description"
                        />
                      </div>

                      <div className="grow ms-3">
                        <p className="text-sm sm:text-base font-semibold text-gray-800 ">
                          Maryana Nasr
                        </p>
                        <p className="text-xs text-gray-400">
                          Callync
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>   
        </div>
      </div>
    </div>
  );
}
