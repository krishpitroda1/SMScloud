import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/preview.webp'

function Cpas() {
  return (
    <div className=' w-screen pt-10 relative '>
    <h1 className="align-center text-sky-600 pt-10 text-center p-5  font-bold text-3xl">
    Communications Platform as a Service
    </h1>
    <div className="lg:flex pt-0 p-10 md:grid md:grid-cols-2 ">
    <img src={img1} className="w-[500px] h-96 mx-auto my-4 rounded-2xl" alt="" />
   
    <div className="flex flex-col  p-5">
      <p className="pl-5 text-orange-600 font-bold text-3xl">
        CPaas platform
      </p>
      <h1 className="py-3 text-lg p-4 font-semibold sm:text-xl md:text-xl ">
      Communications Platform as a Service, or CPaaS, is one of the fastest-growing communication industries today
   </h1>
    <div className="lg:p-5 md:p-0 sm:p-0">

    
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          CPaaS is a cloud-based collaboration platform that 	aims to make communication easier for businesses and It can be Can be integrated to existing CRM


          </h1>
        </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          CPaaS combines many useful features into one place 	so businesses can stay in touch with their partners, 	vendors, suppliers and customers on the 	communication channel they like

          </h1>
         </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl pr-5">
          Use of Email, SMS, Voice, Video, Chatbot & Analytics 	from the single platform & single vendor

          </h1>
         </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          Expert Consulting to the companies building the 	CPaaS Platform

           </h1>
        </div>
    
      </div>
     </div>
   
  </div>
</div>
  )
}

export default Cpas
