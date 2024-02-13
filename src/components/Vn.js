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
          A virtual number is a telephone number that assigned to an account and then routed through the internet to a physical phone line
   </h1>
        </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          This can be useful for a variety of reasons, such as having multiple lines for a business or managing calls made to different departments or locations without giving out individual phone numbers
 </h1>
         </div>
         <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          A toll free number allows your customers to reach you without incurring any long distance charges. This can be a great way to increase customer satisfaction and loyalty
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
