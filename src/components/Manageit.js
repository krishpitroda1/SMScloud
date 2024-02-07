import React from 'react'
import img3 from "../assets/circle.png";
import img1 from '../assets/manageit.png'
function Manageit() {
  return (
    <div>
      <div className=' w-screen m-5 pt-7 relative '>
    <h1 className="align-center text-sky-600 text-center p-5 pt-10 font-bold text-3xl ">
    Managed Service For IT & Infra
    </h1>
    <div className="lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0 ">
    <img src={img1} className="w-[500px] mx-auto my-4 rounded-2xl" alt="" />
    <div className="flex flex-col justify-center mr-5">
      <p className="text-orange-600 font-bold text-3xl pt-10">
      Managed Service For IT & Infra
     </p>
      <h1 className="py-3 text-lg font-semibold sm:text-xl md:text-xl  p-5">
      Managed service for IT and infrastructure is the practice of outsourcing some or all of the tasks related to the planning, implementation, maintenance, and upgrade of the IT systems and networks of an organization to a third-party vendor   </h1>
    <div className="grid grid-flow-row p-5">

      <div className='flex pt-4'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl">
          Reduced costs and improved efficiency by leveraging the expertise and resources of the vendor
          </h1>
        </div>
        <div className='flex pt-4'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl ">
        Increased scalability and flexibility to meet the changing needs and demands of the organization  </h1>
         </div>
    
      
        <div className='flex pt-4'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl ">
          Improved security and compliance by adhering to the standards and regulations of the industry
          </h1>
          </div>
        <div className='flex pt-4'>
          <img src={img3} className="h-8 w-8 rounded-lg" alt="" />
          <h1 className="align-center text-sky-600  text-xl pb-5 pr-5">
          Focus on core business activities and innovation by freeing up the internal IT staff from routine tasks

           </h1>
        </div>
    

    </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default Manageit
