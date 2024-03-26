import React from 'react'
import A2P from './A2P'
import Vn from './Vn'
import img1 from '../assets/a2p.png'
import Voice from './Voice'
function Carrier() {
  return (
    <div className='pt-16'>
       <h1 className=" relative w-screen pt-5 text-sky-600 text-center  font-bold text-4xl">
   Our Carrier Services
    </h1>
<A2P/>
<Voice/>
      <Vn />
    </div>
  )
}

export default Carrier
