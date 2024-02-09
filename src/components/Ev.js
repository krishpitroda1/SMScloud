import React ,{ useState ,useEffect} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from '../assets/Events/e1.jpeg'
import p2 from '../assets/Events/e2.jpg'
import p3 from '../assets/Events/e3.jpg'
import p4 from '../assets/Events/e4.jpg'
import p5 from '../assets/Events/e5.png'
import p6 from '../assets/Events/e6.jpg'
import p7 from '../assets/Events/e7.jpg'
import p8 from '../assets/Events/e9.jpg'
import p9 from '../assets/Events/e8.jpeg'
import p10 from '../assets/Events/e10.jpeg'
import p11 from '../assets/Events/e11.png'
import p12 from '../assets/Events/e12.png'
import p13 from '../assets/Events/e13.png'
import p14 from '../assets/Events/e14.png'
import p15 from '../assets/Events/e15.jpg'
import p16 from '../assets/Events/e16.jpeg'
import p17 from '../assets/Events/e17.png'
import p18 from '../assets/Events/e18.jpg'



function Ev() {
  const[color,setColor]=useState('blue')
  const toggleColor = () => {
    color === 'blue' ? setColor('red') : setColor('blue')
  }
  useEffect(() => {
    const timer = setInterval(toggleColor, 1000)
    return () => clearInterval(timer)
  }, [color])
    const data=[
      {
        id:"1",
        src:{p1}
      },
      {
        id:'2',
        src:'.src/assests/Events/p2.jpg'
      }
    ]
    const settings = {
    
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 200,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div>
        <h1 className={`text-${color}-600 p-5 font-bold transition-colors duration-500 ease-in-out  hover:text-indigo-700 text-3xl  text-center pt-5 `}> Events Participation  </h1>
      <div className='p-5 rounded-lg lg:pr-10'>
    <div className='relative justify-center items-center align-middle text-center  bg-gray-800 shadow-slate-800 shadow-md  w-full'>
     {/* <div className='carousel'> */}
      <div className='w-3/4 m-auto p-5'>
      <div className='p-5 '>
       <Slider {...settings}>
          <div className='p-3  rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p1} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3  rounded-xl'>
           <div className='flex justify-center items-center'>
              <img src={p2} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3  rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p3} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p4} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3  rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p5} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p6} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p7} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p8} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p9} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p10} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p11} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p12} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p13} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p14} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p15} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p16} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p17} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
          <div className='p-3 rounded-xl'>
           <div className=' flex justify-center items-center'>
              <img src={p18} className='h-40 rounded-lg w-full'/>
            </div>
          
          </div>
    
 
       </Slider>
      </div> 

    </div>
      {/* </div> */}
    </div>
    </div>
    </div>
   
  )
}

export default Ev
