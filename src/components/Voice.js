import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/voice.jpeg'
const Voice = () => {
  return (
    <div className=' w-screen relative pt-7 pb-8'>
    <h1 className="align-center text-sky-600 pt-10 text-center p-5  font-bold text-3xl">
      Voice Messaging
    </h1>
    <div className=" lg:flex md:grid md:grid-cols-2 p-5 " >
    <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
    <div className="flex flex-col justify-center">
      <p className="text-orange-600 p-5 font-bold text-3xl pl-7">
        Voice Messaging
      </p>
      <h1 className="text-lg font-semibold  pl-8 sm:text-xl md:text-xl">
      A voice message is a type of message that you can send or receive using your voice. It is different from a voice call, which is a live conversation between two or more people.   </h1>
    <div className="flex p-5">

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

    </div>
  </div>
</div>
  )
}

export default Voice
