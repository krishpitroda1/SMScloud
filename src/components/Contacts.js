import React,{useRef} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useEffect,useState } from 'react';
import mail from '../assets/mail.png'
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
              scrollObserver.unobserve(entry.target);
          }
      });

      scrollObserver.observe(ref.current);

      return () => {
          if (ref.current) {
              scrollObserver.unobserve(ref.current);
          }
      };
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function Contacts() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sf5lyrk', 'template_xlud5qs', form.current, '-5PwbfIUXfNKA7-Sv')
      .then((result) => {
          console.log(result.text);
          alert("email send successfully ")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  
    <div className='w-screen pt-7 relative justify-items-center  overflow-x-hidden'>
      <h1 class="pt-10 text-center text-3xl font-bold text-gray-500 sm:text-4xl h-20 p-5">
        Contact us
      </h1>
    <div>
      <RevealOnScroll>
        <div class="">
  <div class="p-5 pt-2">
    <div class=" ">
      
      <p class="text-xl text-sky-600 text-center pt-0 p-5">
        We'd love to talk about how we can help you
      </p>
    </div>

    <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16 pb-10">
      <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 divs">
        <h2 class="mb-8 text-xl font-semibold text-gray-600 ">
          Fill in the form
        </h2>

        <form ref={form} onSubmit={sendEmail} className=''>
          <div class="grid gap-4">
             <div class="">
              <div>
                <label>Name</label>
                <input type="text" name="user_name" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder=" Name" required/>
              </div> 
             </div>

             <div>
              <label>Email</label>
              <input type="email" name="user_email" autocomplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" required/>
            </div> 

            <div>
              <label>Phone Number</label>
              <input type='tel' name="phone_no" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Phone Number"  pattern="^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$" required/>
            </div> 

             <div>
              <label>Details</label>
              <textarea  name="details" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Details" required></textarea>
            </div>
          </div>
          <div class="mt-4 grid">
            <input type="submit" value='Send Inquiry' class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 text-white hover:bg-blue-700 disabled:opacity-0 disabled:pointer-events-none dark:focus:outline-none" />
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-white">
              We'll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div> 
      <div class="divide-y divide-gray-200 dark:divide-gray-800">
        <RevealOnScroll><div class="flex gap-x-7 py-6">
         <FaWhatsapp className='flex-shrink-0 w-6 h-6 mt-1.5 text-green-600' />
          <div class="grow">
            <h3 class="font-semibold text-sky-600">Whatsapp</h3>
            <p class="mt-1 text-sm text-gray-500">Message On Whatsapp for answers to anything you might ask.</p>
            <p class="mt-1 text-sm text-gray-500">Please Do Message on (+91)9924494266 for Whatsapp</p>
           
          </div>

        </div>
        </RevealOnScroll>
        <RevealOnScroll>        <div class=" flex gap-x-7 py-6">
        <FaLinkedin className='flex-shrink-0 w-6 h-6 mt-1.5 text-sky-600'/>
          <div class="grow">
          
            <h3 class="font-semibold text-sky-600">
            <Link class=" hover:text-gray-800 " to="https://www.linkedin.com/company/smscloudhub/">
              Linkedin
            </Link>
          
              </h3>
            <p class="mt-1 text-sm text-gray-500">Connnect With our company on Linkedin</p>
             </div>
        </div></RevealOnScroll>

        
        <div class=" flex gap-x-7 py-6">
         <img src={mail} alt="" className='h-7 w-7 flex-shrink mt-1.5' />
          <div class="grow">
            <h3 class="font-semibold text-sky-600">Contact us by email</h3>
            <p class="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p>
            <p class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 " >
              info@smscloudhub.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</RevealOnScroll>


</div>
<div className='p-5'>

     <h1 className="text-gray-500 text-center  font-bold text-4xl ">
          Our Location
        </h1>
    <div className='pl-0 lg:pr-8'>

     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.30011784394395!2d72.49662934555259!3d22.989018459114877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bf4765fe993%3A0xa21cf89753936894!2sSMSCloud%20Hub!5e0!3m2!1sen!2sin!4v1704867816876!5m2!1sen!2sin "height={'600px'} className=' block justify-center p-5 w-full border border-black items-center rounded-xl  ' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" key={"g"}></iframe>
    </div>
</div>

    </div>
  )
}

export default Contacts
