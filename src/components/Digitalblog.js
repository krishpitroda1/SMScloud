import React from 'react'
import img from '../assets/msme.webp'
import { useState,useEffect,useRef } from 'react';
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
  },);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function Digitalblog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
 
  return (
    <div className=' relative lg:p-10 md:pt-10 w-screen'>
      <RevealOnScroll>
    <div className=" " >
          <img
            src={img}
            className="w-[50%] h-96 mx-auto my-4 rounded-2xl flex"
            alt=""
          />
          <p className="p-4 pb-0 text-lg font-sans">
          India has a rich history of the Industrial Revolution, and many SSI, MSI, and LSI were founded, expanded upon, and thrived during this period.
          Then, there was a significant cultural and process-oriented transformation in our society. Today, once again when India is at the forefront of Digital Revolutions our businesses will feel the pinch of change.
        </p>
          <p className="p-4  pb-0 text-lg font-sans">
          Digital transformation is helping the business with new, improved model of doing business. It drifts completely away from the established norm. This model leverages the internet and modern technologies, thus facilitating speedy and intelligent execution of business processes and allowing for an exciting customer experience. Many traditional firms have evolved to become digital savvy by using digital innovations to address need of the time. </p>
          <p className="p-4  pb-0  text-lg font-sans">
          As per ibef.org as of the 27th of March 2022, India had more than 7.9 million micro, small, and medium-sized enterprises (MSMEs). The Indian government is working very hard to prepare its citizens for the digital transformation through a number of initiatives. </p>
          <p className="p-4  pb-0  text-lg font-sans">
          These businesses are gearing up for digital revolution. Getting ready for Digital Transformation. However they get tangled in the issues like...  </p>
          <p className="p-4 ml-4 font-bold pb-0  text-lg font-sans">
          – What to transform?
          <br/>
          – From where to start?
          <br/>
       
          – How to transform?
          <br/>
       
          – How long would it take to transform?
          <br/>
       
          – How much is it going to cost?
          <br/>
       
          – What would be impact on the business?
 
          </p>
          <p className="p-4  pb-0  text-lg font-sans">
          Let’s put some of the benefits of digital transformation for any business..  </p>
           <p className="p-4 pb-0 ml-4 text-xl font-sans font-bold">
          – Digital transformation closes the gap between customer expectation and way of delivery by business
          <br/>
          – With Digital Business it is easy to get access to Global Consumers
          <br/>
          – When transitioning to digital it is easy to create content for target market
          <br/>
          – Digital processes and marketing can help business with Global Reach
          <br/>
          – Better Promotional Strategy with Lesser Cost
          <br/>
          – Lower Administration Cost
         <br/>
          – Improved Customer Support
          </p> 
          <p className="p-4 pb-0 text-xl font-sans">
          How to make Digital Transformation a success for any business?</p>
          <p className="p-4 ml-4 font-bold pb-0 text-xl font-sans">
          – It all starts from acceptance from Leadership
          <br/>
        
        – Right Talent and expertise with accountability
        <br/>
        – Expect the Culture Change
        <br/>
        
        – Proper definition of Customer Experience journey (end to end)
        <br/>
        
        – Customer Satisfaction & Evolution Of Products, Services And Processes should be center point of the transformation
        <br/>
        
        – Personalized Service For every Customers with AI and BOTs
        <br/>
        
        – Improve with Employee Feedback
        <br/>
        
        – Implementing Changes And keep Evaluating
        <br/>
        – Consider Transformation as long term process and keep optimizing   </p>
          <p className="p-4 pb-0 text-xl font-sans">
          Few Essential Tools to Support Your Digital Transformation </p>
          <p className="p-4 font-bold ml-4 pb-0 text-xl font-sans">
          – Beautiful Website with Click to Call, Contact Form and Product Deck Downloads with Data Collection
          <br/>
      
          – Email Suite connected with CRM and automation of mailing
          <br/>
      
          – Communication Platform with all communication Channels
          <br/>
      
          – CMS tools
          <br/>
          – Collaboration Tools
          <br/>
      
          – Cloud and common storage with File Transfer Facility
          <br/>
          – Digital Signature & VPN
          <br/>
          – Firewall & Security solutions
          <br/>
          – Project Management Tools
          <br/>
          – Intranet & ERP (based on the size of the business)
          <br/>
      
          – Cloud based Accounting
          <br/>
      
          – Cloud based HRMS and Payroll system
          <br/>
      
          – Digital Marketing & Scheduling tools
          <br/>
      
          – Video conferencing Tools
       </p>
          <p className="p-4 pb-0 text-xl font-sans">
          With 1.15 Billion Mobile Subscribers, 103 unicorns, 73000 DAIIPT Registered startups, 159,170 apps from Indian publishers on Google Play store, 7.9 Million MSMEs who did 71 billion digital payments (in FY 2022) in India are reshaping the Business Processes with digital Transformation.  </p>
          <p className="p-4 font-bold pb-0 text-xl font-sans">
          Get Ready and Go for digITal !
          </p>
       
        </div> 
        </RevealOnScroll>
    </div>
  )
}

export default Digitalblog
