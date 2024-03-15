import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa6";
function Navbar() {
  const [nav, setNav] = useState(true);
  const handlenav = () => {
    setNav(!nav);
  };
  const [showMenu, setShowMenu] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [showEnterPrise, setShowEnterPrise] = useState(false);
  const [showOperator, setShowOperator] = useState(false);
  const [showCarrier, setShowCarrier] = useState(false);
  const [showTech, setShowTech] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 740) setNav(true);
    });
  });

  return (
    <div className="w-screen top-0 fixed  z-50 ">
      {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer=""></script> */}
      <div className="navbar shadow-lg w-full px-14 md:px-0 justify-between text-black">
        <div className="hidden md:flex md:justify-around w-full text-black">
          {/* Your content goes here */}
          <Link className="py-7" to="/About">
            <p className="font-semibold text-lg">About Us</p>
          </Link>

          <p className="dropdown-link py-7 px-3 hidden md:block ">
            <Link className="flex font-semibold text-lg droptext relative" to="/Services">
               Services
               <svg
              className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            </Link>
           
            
            <div className="dropdown hidden absolute mt-4 left-[100px] p-12 pr-3 text-lg bg-white shadow-xl rounded-lg">
              <ul className="text-black">
                <li className="flex gap-10">
                  <div className="horizontalLine relative pe-4">
                    <p className="text-sky-600 text-2xl font-bold ">
                      <p >Enterprise</p>
                    </p>
                    <ul>
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/WA">WA for buisness</Link>
                      </li>
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/A2P">A2P SMS</Link>
                      </li>
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/Voice" className="flex">
                        {/* <FaMicrophone className="h-5 "/> */}
                        <p className="">
                          
                           Voice
                          </p> 
                        </Link>
                      </li>
                      <li className="hover:text-sky-600 hover:hover:font-bold">
                        <Link to="/Cpas">CPaaS</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="horizontalLine relative pe-4">
                    <p className="text-sky-600 text-2xl font-bold ">
                      <p>Operator</p>
                    </p>
                    <ul>
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/0Hop">0Hop SMS Connectivity</Link>
                      </li>
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/Managehubs">
                          Managed Services 
                        </Link>
                      </li>
                      {/* <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/Manageit">
                          Managed Services for IT & Infra
                        </Link>
                      </li> */}
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/Smsc">SMSC Firewall</Link>
                      </li>
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/Vas">VAS</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="horizontalLine relative pe-4">
                    <p className="text-sky-600 text-2xl font-bold ">
                      <p>Carrier</p>
                    </p>
                    <ul>
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/A2P">A2P SMS</Link>
                      </li>
                      {/* <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/Hlr">HLR</Link>
                      </li> */}
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/Voice">Voice</Link>
                      </li>
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/Vn">Virtual Numbers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="relative pe-4">
                    <p className="text-sky-600 text-2xl font-bold ">
                      <p>Technology</p>
                    </p>
                    <ul>
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/Cloudskool">CloudSkool++</Link>
                      </li>
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/Cpas">CPaaS Platform</Link>
                      </li>
                      <li className="hover:text-sky-600 hover:font-bold">
                        <Link to="/Ccc">CCC</Link>
                      </li>
                   
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </p>

          {/* Add more content as needed */}
        </div>
        <div className="logo p-5">
          {/* Your logo component or image goes here */}
          <Link to="/">
            <img src={Logo} alt="Logo"  />
          </Link>
        </div>
        <div className="p-5 text-black justify-around w-full hidden md:flex">
          <div className="dropdown-link py-7 px-3 hidden md:block">
            <p className="flex droptext relative cursor-pointer font-semibold text-lg">
              Resources
              <svg
                className="dropdown-icon flex-shrink-0 ms-2 w-4 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <div className="dropdown top-9 hidden absolute hover:block rounded-lg p-8 w-12 text-md shadow-xl bg-white">
                <ul className="">
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Carrers">Careers</Link>
                  </li>
                  <li className="hover:text-sky-600 hover:font-bold  py-2 block">
                    <Link to="/Blogs">Blogs</Link>
                  </li>
                  {/* <li className="hover:text-sky-600 hover:font-bold">
                    <Link to="/Events">Events</Link>
                  </li> */}
                </ul>
              </div>
            </p>
          </div>

          <Link to="/Contacts" className="py-7 hidden md:block">
            <p className="font-semibold text-lg">Contact Us</p>
          </Link>
        </div>
        {/* <button className="">

        <AiOutlineMenu size={"20px"} className=" block md:hidden" />
        </button> */}
        <div
          onClick={handlenav}
          className="block hover:cursor-pointer md:hidden"
        >
          {!nav ? <></> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* -----------------------------------------------------------------mobile view ----------------------------------------------------------------------------- */}

      {/* <div className={!nav ? 'fixed left-0 top-0 w-[50%] border-r h-full border-r-gray-900  ease-in-out duration-500' : "fixed left-[-150%]"}>*/}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[80%] z-10 border-r h-full  overflow-y-scroll border-r-gray-900 bg-white  ease-in-out duration-500 "
            : "fixed left-[-150%]"
        }
      >
        <div className="flex flex-row justify-between items-center pe-5  ">
          <Link to="/" onClick={() => setNav(true)}>
            <img
              src={Logo}
              alt="SMSCloud Hub"
              className="lg:cursor-pointer h-14 m-4 w-24"
            />
          </Link>
          <div
            onClick={handlenav}
            className=" hover:cursor-pointer block lg:hidden "
          >
            <AiOutlineClose size={20} />
          </div>
        </div>
        <ul className="lg:flex pt-24items-center gap-8 p-2 font-[Poppins] ">
          <li className="border-b  border-gray-600">
            <Link
              to="/About"
              className="py-7 inline-block hover:text-orange-600"
            >
              About Us
            </Link>
          </li>
          <li className="border-b  border-gray-600 py-7">
            <Link
              className="dropdown-link py-7   md:block hover:text-orange-400"
              to="/Services"
              onClick={() => setShowMenu(!showMenu)}
            >
              <p className="flex droptext relative">
                Services
                <svg
                  className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </p>
            </Link>
          </li>
          <div className={`relative ml-10 ${showMenu ? "block" : "hidden"}`}>
            <li className="border-b  border-gray-600">
              <p
                className="py-7 dropdown-link inline-block hover:text-orange-600"
                onClick={() => setShowEnterPrise(!showEnterPrise)}
              >
                <p className="flex">
                  Enterprise
                  <svg
                    className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </p>
              </p>
            </li>
            <div
              className={`relative ml-14 ${
                showEnterPrise ? "block" : "hidden"
              }`}
            >
              <li className="border-b relative  border-gray-600">
                <Link
                  to="/WA"
                  className="py-7  inline-block hover:text-orange-600"
                >
                  WA for Buisness
                </Link>
              </li>
              <li className="border-b  border-gray-600">
                <Link
                  to="/A2P"
                  className="py-7  inline-block hover:text-orange-600"
                >
                  A2P SMS
                </Link>
              </li>
              <li className="border-b  border-gray-600">
                <Link
                  to="/Voice"
                  className="py-7  inline-block hover:text-orange-600"
                >
                  Voice
                </Link>
              </li>
              <li className="border-b  border-gray-600">
                <Link

                  to="/Cpas"
                  className="py-7  inline-block hover:text-orange-600"
                >
                  CPaaS
                </Link>
              </li>
            </div>
            <li className="border-b  border-gray-600">
              <Link
                to="/Carrers"
                className="py-7 inline-block dropdown-link hover:text-orange-600"
                onClick={() => setShowOperator(!showOperator)}
              >
                <p className="flex droptext relative">
                  Operator
                  <svg
                    className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </p>
              </Link>
            </li>
            <div
              className={`relative ml-14 ${showOperator ? "block" : "hidden"}`}
            >
              <li className="border-b border-gray-600">
                <Link
                  to="/0Hop"
                  className="py-7 inline-block hover:text-orange-600"
                >
                  0Hop SMS Connectivity
                </Link>
              </li>
              <li className="border-b border-gray-600">
                <Link
                  to="/Managehubs"
                  className="py-7 inline-block hover:text-orange-600"
                >
                  Managed Services
                </Link>
              </li>
              {/* <li className="border-b border-gray-600">
                <Link
                  to="/Manageit"
                  className="py-7 inline-block hover:text-orange-600"
                >
                  Managed Services for IT & Infra
                </Link>
              </li> */}
              <li className="border-b border-gray-600">
                <Link
                  to="/Smsc"
                  className="py-7 inline-block hover:text-orange-600"
                >
                  SMSC Firewall
                </Link>
              </li>
              <li className="border-b border-gray-600">
                <Link
                  to="/Vas"
                  className="py-7 inline-block hover:text-orange-600"
                >
                  VAS
                </Link>
              </li>

            </div>
            <li className="border-b  border-gray-600">
              <Link
                to="/Carrier"
                className="py-7  dropdown-link inline-block hover:text-orange-600"
                onClick={() => setShowCarrier(!showCarrier)}
              >
                <p className="flex droptext relative">
                
                  Carrier
                  <svg
                    className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </p>
              </Link>
            </li>
            <div
              className={`relative ml-14 ${showCarrier ? "block" : "hidden"}`}
            >
              <li className="border-b  border-gray-600">
                <Link
                  to="/A2P"
                  className="py-7  inline-block hover:text-orange-600"
                >
                  A2P SMS
                </Link>
              </li>
              {/* <li className="border-b  border-gray-600">
                <Link
                  to="/Hlr"
                  className="py-7  inline-block hover:text-orange-600"
                >
                  HLR
                </Link>
              </li> */}
              <li className="border-b  border-gray-600">
                <Link
                  to="/Voice"
                  className="py-7  inline-block hover:text-orange-600"
                >
                  Voice
                </Link>
              </li>
              <li className="border-b  border-gray-600">
                <Link
                  to="/Vn"
                  className="py-7  inline-block hover:text-orange-600"
                >
                  Virtual Numbers
                </Link>
              </li>
            </div>
            <li className="border-b  border-gray-600">
              <p
                to="/Technology"
                className="py-7 dropdown-link  inline-block hover:text-orange-600"
                onClick={() => setShowTech(!showTech)}
              >
                <p className="flex droptext relative">
                  Technology
                  <svg
                    className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </p>
              </p>
            </li>
            <div className={`relative ml-14 ${showTech ? "block" : "hidden"}`}>
              <li className="border-b  border-gray-600">
                <Link
                  to="/Cloudskool"
                  className="py-7  inline-block hover:text-orange-600"
                >
                  CloudSkool++
                </Link>
              </li>
              <li className="border-b  border-gray-600">
                <Link
                  to="/Cpas"
                  className="py-7  inline-block hover:text-orange-600"
                >
                  CPaaS Platform
                </Link>
              </li>
              <li className="border-b  border-gray-600">
                <Link
                  to="/Ccc"
                  className="py-7  inline-block hover:text-orange-600"
                >
                  CCC
                </Link>
              </li>
           
            </div>
          </div>
          <li className="border-b  border-gray-600">
            <div className="dropdown-link py-7 md:block hover:text-orange-400">
              <p
                className="flex droptext relative cursor-pointer"
                onClick={() => setShowRes(!showRes)}
              >
                Resources
                <svg
                  className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </p>
            </div>
          </li>
          <div className={`relative ml-10 ${showRes ? "block" : "hidden"}`}>
            <li className="border-b  border-gray-600">
              <Link
                to="/Carrers"
                className="py-7  inline-block hover:text-orange-600"
              >
                Carrers
              </Link>
            </li>
     
            <li className="border-b  border-gray-600">
              <Link
                to="/Blogs"
                className="py-7 inline-block hover:text-orange-600"
              >
                Blogs
              </Link>
            </li>
          </div>
          <li className="border-b  border-gray-600">
            <Link
              to="/Contacts"
              className="py-7 inline-block hover:text-orange-600"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
    //  </div>
  );
}

export default Navbar;
