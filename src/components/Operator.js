import React from 'react'
import Managehubs from './Managehubs'
import Manageit from './Manageit'
import Smsc from './Smsc'
import Cr from './Cr'
import A2P from './A2P'
function Operator() {
  return (
    <div className='pt-16'>
        <h1 className="relative w-screen  text-gray-600 text-center  font-bold text-3xl ">
       Our Operator Services
        </h1>
      <A2P/>
      <Manageit/>
      <Managehubs/>
      <Smsc/>
      <Cr/>
    </div>
  )
}

export default Operator
