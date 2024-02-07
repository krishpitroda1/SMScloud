import React from 'react'
import WA from './WA'
import A2P from './A2P'
import Voice from './Voice'
import Cpas from './Cpas'
import End from './End'
function Enterprise() {
  return (
    <div className='pt-16'>
       <h1 className="relative w-screen  text-gray-600 text-center  font-bold text-3xl ">
      Our Enterprise Services
    </h1>
      <WA/>
      <A2P/>
      <Voice/>
      <Cpas/>
      {/* <End/> */}
    </div>
  )
}

export default Enterprise
