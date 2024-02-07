import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/hlr.jpeg'

function Hlr() {
  return (
   <div className=' w-screen pt-7 relative pb-8'>
    <h1 className="align-center text-sky-600  pt-10 text-center p-5  font-bold text-3xl">
      Home Location Register
    </h1>
    <div className="lg:flex md:grid md:grid-cols-2 lg:pl-3 p-5">
    <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
    <div className="flex flex-col justify-center">
      <p className="text-orange-600 p-5 font-bold text-3xl">
     Home Location Register(HLR)
      </p>
      <h1 className="py-3 font-semibold text-lg p-5 sm:text-xl md:text-xl">
      home location register (HLR) is a database containing pertinent data regarding subscribers authorized to use a global system for mobile communications (GSM) network.
    </h1>
      <div className="flex p-5">

      <div className="pr-10">
        <div className='flex'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          HLR includes the international mobile subscriber identity (IMSI) and the mobile station international subscriber directory number (MSISDN) of each subscription. </h1>
        </div>
        <div className='flex pt-5'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          HLR includes services requested by or rendered to the corresponding subscriber, the general packet radio service settings of the subscriber, the current location of the subscriber and call divert settings.
          </h1>
         </div>
      </div>
    </div>

    </div>
  </div>
</div>
    )
}

export default Hlr
