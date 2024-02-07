import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/vn.jpg'
function Vn() {
  return (
    <div>
      <div className=' w-screen relative pt-7 pb-8'>
    <h1 className="align-center text-sky-600   text-center p-5  font-bold text-3xl ">
      Virtual Number
    </h1>
    <div className="lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
    <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
    <div className="flex flex-col justify-center p-5">
      <p className="text-orange-600 p-5 font-bold text-3xl">
        Virtual Number(VN)
      </p>
      <div className="flex p-5">

      <div className="pr-10">
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          Virtual numbers are temporary phone numbers that can be used to receive SMS messages and voice mails online without registration.
          </h1>
        </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          You can also get an international toll-free number in 120+ countries with advanced call management features .
          </h1>
         </div>
      </div>
    </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default Vn
