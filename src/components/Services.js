import React from 'react'
import Enterprise from './Enterprise'
import Operator from './Operator'
import Technology from './Technology'
import { useEffect} from 'react'
import Carrier from './Carrier'

import End from './End'
import Analytics from './Analytics'
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className='relative'>
      <Analytics className='w-screen'/>
      {/* <Enterprise className=''/>
      <Operator/>
      <Technology/>
      <Carrier/> */}
      {/* <End/> */}
    </div>
  )
}

export default Services
