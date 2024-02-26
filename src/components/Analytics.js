import React from "react";
import img from "../assets/services.png";
import Wap from "./Popup/Wap";
import A2p from "./Popup/A2p";
import Voicep from "./Popup/Voicep";
import Cpaasp from "./Popup/Cpaasp";
import Msp from "./Popup/Msp";
import Mitp from "./Popup/Mitp";
import Esimp from "./Popup/Esimp";
import Hlrp from "./Popup/Hlrp";
import Vnp from "./Popup/Vnp";
import Smscp from "./Popup/Smscp";
import Crp from "./Popup/Crp";
import Cloudp from "./Popup/Cloudp";
import { useState,useEffect,useRef } from "react";
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

function Analytics() {
  // const [showWa, setshowWa] = useState(false);
  // Current Popup

  const [currentPopup, setCurrentPopup] = useState(<></>);

  // Which popup to render
  const setPopup = (popupName) => {
    switch (popupName) {
      case "Wap":
        setCurrentPopup(<Wap getClick={getCloseClick} />);
        break;
      case "A2p":
        setCurrentPopup(<A2p getClick={getCloseClick} />);
        break;
      case "Voicep":
        setCurrentPopup(<Voicep getClick={getCloseClick} />);
        break;
      case "Cpaasp":
        setCurrentPopup(<Cpaasp getClick={getCloseClick} />);
        break;
      case "Crp":
        setCurrentPopup(<Crp getClick={getCloseClick} />);
        break;
      case "Hlrp":
        setCurrentPopup(<Hlrp getClick={getCloseClick} />);
        break;
      case "Smscp":
        setCurrentPopup(<Smscp getClick={getCloseClick} />);
        break;
      case "Vnp":
        setCurrentPopup(<Vnp getClick={getCloseClick} />);
        break;
      case "Mitp":
        setCurrentPopup(<Mitp getClick={getCloseClick} />);
        break;
      case "Msp":
        setCurrentPopup(<Msp getClick={getCloseClick} />);
        break;
      case "Crp":
        setCurrentPopup(<Crp getClick={getCloseClick} />);
        break;
      case "Esimp":
        setCurrentPopup(<Esimp getClick={getCloseClick} />);
        break;
      case "Smscp":
        setCurrentPopup(<Smscp getClick={getCloseClick} />);
        break;
      case "Cloudp":
        setCurrentPopup(<Cloudp getClick={getCloseClick} />);
        break;
      default:
      // code block
    }
  };

  const getCloseClick = (closeClicked) => {
    if (closeClicked) {
      console.log("Back: ", closeClicked);
      setCurrentPopup(<></>);
    }
  };

  return (
    <div>
      <div className="w-screen mb-24 pt-14 overflow-x-hidden grid gap-6 ">
        <p className="w-screen text-center text-gray-500 p-5 font-bold text-3xl">
          Our Services
        </p>

        <div className="justify-between md:pl-0  lg:flex mx-auto gap-6">
          <div className="flex-col gap-5 ">
            <ul className="list-disc text-red-400 text-lg p-5">
              <p className="text-sky-700 font-bold text-xl">EnterPrise</p>
              <div className="pl-9 ">
                {/* className={`dropdown-link hover text-sky-600 hover:${()=>setshowWa(!show)}`} */}
                <li
                  className=" hover:font-bold hover:scale-110"
                  onClick={() => setPopup("Wap")}
                >
                  WA for Buisness
                </li>
                <li
                  className="  hover:font-bold hover:scale-110 "
                  onClick={() => setPopup("A2p")}
                >
                 <p className="">A2P SMS
</p>                 </li>
                <li
                  className="  hover:font-bold hover:scale-110"
                  onClick={() => setPopup("Voicep")}
                >
                  Voice
                </li>
                <li
                  className=" hover:font-bold hover:scale-110"
                  onClick={() => setPopup("Cpaasp")}
                >
                  CPaaS
                </li>
                {currentPopup}
              </div>
            </ul>
            <ul className="list-disc text-gray-600 text-lg p-5">
              <p className="text-sky-700 font-bold text-xl">Carrier</p>
              <div className="pl-9">
                <li
                  className="hover:font-bold hover:scale-110 "
                  onClick={() => setPopup("A2p")}
                >
                  A2P SMS
                </li>
                {/* <li
                  className="hover:font-bold hover:scale-110"
                  onClick={() => setPopup("Hlrp")}
                >
                  HLR
                </li> */}
                <li
                  className="hover:font-bold hover:scale-110 "
                  onClick={() => setPopup("Voicep")}
                >
                  Voice
                </li>
                <li
                  className="hover:font-bold hover:scale-110 "
                  onClick={() => setPopup("Vnp")}
                >
                  Virtual Numbers
                </li>
              </div>
            </ul>
          </div>
          <div className="content-center pt-7 ">
            <img src={img} className="h-96 w-auto" alt="" />
          </div>
          <div className="flex-col gap-5">
            <div className="flex-col gap-5">
              <ul className="list-disc text-green-600 text-lg p-5">
                <p className="text-sky-700 font-bold text-xl">Operator</p>
                <div className="pl-9">
                  <li
                    className="hover:font-bold hover:scale-110"
                    onClick={() => setPopup("A2p")}
                  >
                      0Hop SMS Connectivity
                  </li>
                  <li
                    className="hover:font-bold hover:scale-110 "
                    onClick={() => setPopup("Msp")}
                  >
                    Managed services
                  </li>

                
                  <li
                    className="hover:font-bold hover:scale-110"
                    onClick={() => setPopup("Smscp")}
                  >
                    SMSC Firewall
                  </li>
                  {/* <li
                    className="hover:font-bold hover:scale-110 "
                    onClick={() => setPopup("Crp")}
                  >
                    CR in Existing SMSC
                  </li> */}
                    <li
                    className="hover:font-bold hover:scale-110 "
                    onClick={() => setPopup("Mitp")}
                  >
                  VAS
                  </li>
                </div>
              </ul>

              <ul className="list-disc text-blue-600 text-lg p-5">
                <p className="text-sky-700 font-bold text-xl">Technology</p>
                <div className="pl-9">
                  <li
                    className="hover:font-bold hover:scale-110 "
                    onClick={() => setPopup("Cloudp")}
                  >
                    Cloudskool++
                  </li>
                  <li
                    className="hover:font-bold hover:scale-110 "
                    onClick={() => setPopup("Cpaasp")}
                  >
                    CPaaS
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------mobile view---------------------------------------- */}
      <div className="w-screen lg:hidden hidden bg-black mb-24 pt-14 overflow-x-hidden">
        <p className="text-white w-screen text-center bg-sky-400 p-5 font-bold text-3xl">
          Our Services
        </p>

        <div className="justify-between pl-32 lg:pl-32 md:pl-4 md:grid-cols-1 mx-auto flex gap-6">
          <div className="flex-col gap-5">
            <ul className="list-disc text-red-400 text-lg p-5">
              <p className="text-sky-700 font-bold text-xl">EnterPrise</p>
              <div className="pl-9 ">
                {/* className={`dropdown-link hover text-sky-600 hover:${()=>setshowWa(!show)}`} */}
                <li
                  className=" hover:font-bold hover:scale-110"
                  onClick={() => setPopup("Wap")}
                >
                  WA for Buisness
                </li>
                <li
                  className="  hover:font-bold hover:scale-110"
                  onClick={() => setPopup("A2p")}
                >
                  A2P SMS
                </li>
                <li
                  className="  hover:font-bold hover:scale-110"
                  onClick={() => setPopup("Voicep")}
                >
                  Voice
                </li>
                <li
                  className=" hover:font-bold hover:scale-110"
                  onClick={() => setPopup("Cpaasp")}
                >
                  CPaaS
                </li>
                {currentPopup}
              </div>
            </ul>
            <ul className="list-disc text-red-400 text-lg p-5">
              <p className="text-sky-700 font-bold text-xl">Carrier</p>
              <div className="pl-9">
                <li className="dropdown-link " onClick={() => setPopup("A2p")}>
                  A2P SMS
                </li>
                {/* <li className="dropdown-link " onClick={() => setPopup("Hlrp")}>
                  HLR
                </li> */}
                <li
                  className="dropdown-link "
                  onClick={() => setPopup("Voicep")}
                >
                  Voice
                </li>
                <li className="dropdown-link " onClick={() => setPopup("Vnp")}>
                  Virtual Numbers
                </li>
              </div>
            </ul>
          </div>
          <div className="content-center pt-7">
            <img src={img} className="h-96 w-auto" alt="" />
          </div>
          <div className="">
            <div className="flex-col gap-5">
              <ul className="list-disc text-red-400 text-lg p-5">
                <p className="text-sky-700 font-bold text-xl">Operator</p>
                <div className="pl-9">
                  <li
                    className="dropdown-link "
                    onClick={() => setPopup("A2p")}
                  >
                    A2P SMS
                  </li>
                  <li
                    className="dropdown-link "
                    onClick={() => setPopup("Msp")}
                  >
                    Managed services 
                  </li>

                  <li
                    className="dropdown-link "
                    onClick={() => setPopup("Smscp")}
                  >
                    SMSC Firewall
                  </li>
                  <li
                    className="dropdown-link "
                    onClick={() => setPopup("Crp")}
                  >
                    CR in Existing SMSC
                  </li>
                </div>
              </ul>

              <ul className="list-disc text-red-400 text-lg p-5">
                <p className="text-sky-700 font-bold text-xl">Technology</p>
                <div className="pl-9">
                  <li
                    className="dropdown-link "
                    onClick={() => setPopup("Cloudp")}
                  >
                    Cloudskool++
                  </li>
                  <li
                    className="dropdown-link "
                    onClick={() => setPopup("Cpaasp")}
                  >
                    CPaaS
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
