import React from 'react'
import A2P from './A2P'
import Hlr from './Hlr'
import Esim from './Esim'
import Vn from './Vn'
function Carrier() {
  return (
    <div className='pt-16'>
       <h1 className=" relative w-screen  text-gray-600 text-center  font-bold text-3xl">
    Carrier Services
    </h1>
      <A2P/>
      <Hlr/>
      <Esim />
      <Vn />
    </div>
  )
}

export default Carrier
