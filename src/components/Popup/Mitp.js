import React from "react";
import { Link } from "react-router-dom";
import img1 from "C:/Users/krish/OneDrive/Desktop/sms3/smsloud/src/assets/manageit.png";
import { AiOutlineClose } from "react-icons/ai";
import img3 from "C:/Users/krish/OneDrive/Desktop/sms3/smsloud/src/assets/circle.png";

function Mitp(props) {
  const handleClose = () => {
    console.log("Clicked");
    props.getClick(true);
  };

  return (
    <div>
      <div className="lg:w-[50%] md:w-[70%]  lg:top-[30%] mr-10 lg:left-[30%] z-10 absolute border border-black">
        <h1 className=" text-sky-600  text-center p-5 font-serif font-bold text-3xl  bg-red-200 border-b ">
          Managed Service For IT & Infra
          <span
            id="close"
            className=" text-red-600 rounded-md float-end bg-sky-200 hover:cursor-pointer p-1"
            onClick={() => handleClose()}
          >
            <AiOutlineClose />
          </span>
        </h1>
        <div className="grid md:grid-cols-2 bg-orange-200">
          <img
            src={img1}
            className="w-[500px] mx-auto my-4 rounded-md"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-orange-600  p-5 font-bold text-3xl">
              Managed Service For IT & Infra
            </p>
            <div className="flex p-5 gap-3 ">
              <div className="">
                <div className="flex">
                  <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
                  <h1 className="align-center text-sky-600 font-serif text-xl">
                    Reduced costs and improved efficiency by leveraging the
                    expertise and resources of the vendor
                  </h1>
                </div>
              </div>
            </div>
            <div className="pl-5">
              <Link to="/Manageit">
                <button className="bg-red-400 text-white rounded-lg p-3">
                  read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mitp;
