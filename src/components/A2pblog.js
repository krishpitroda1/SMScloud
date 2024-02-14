import React from "react";
import img from "../assets/a2p1.png";
import { useEffect, useState,useRef } from "react";

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
function A2pblog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className="">
      <RevealOnScroll>
      <div className=" w-screen relative lg:p-10 md:pt-10 ">
        <img
          src={img}
          className="w-full pt-10 h-96  rounded-2xl flex"
          alt=""
        />
        <p className="p-4 pb-0 text-lg font-sans">
          When we talk about Messaging A2P, MMS and RCS are the major format of
          sending Short Messages.
        </p>
        <p className="p-4  pb-0 text-lg font-sans">
          After RCS / OTT based messaging has started, use of MMS has
          drastically declined
        </p>
        <p className="p-4  pb-0  text-lg font-sans">
          After RCS / OTT started by legacy companies there was the fear A2P
          would be out of use (die) soon. But A2P is still in the race due to
          increase in number of SIM Penetration, Increased Service notification
          by the way of compliance or by market deamnd, Feature phones or “No
          Data” is still the case in many places.
        </p>
        <p className="p-4  pb-0  text-lg font-sans">
          And A2P is still stronger for the ease of use and cost against peers.
        </p>
        <p className="p-4  pb-0  text-lg font-sans">
          To keep the Fastest and easiest medium alive and effective, one should
          keep in mind A2P best practices. With my experience I am jotting down
          few of them as under….
        </p>
        <p className="p-4  pb-0 ml-4 font-bold text-lg font-sans">
          – Define the Goal for each Promotional Campaign first
        </p>
        <p className="p-4 pb-0 text-xl ml-4 font-bold font-sans">
          – Volume – No of Messages sent at a time
        </p>
        <p className="p-4 pb-0 text-xl ml-4 font-bold font-sans">
          – Use of Opt-In and Opt-Out in every promotional message
        </p>
        <p className="p-4 pb-0 text-xl ml-4 font-bold font-sans">
          – Research on Response Time before any Campaign
        </p>
        <p className="p-4 pb-0 text-xl ml-4 font-bold font-sans">
          – Dont use the unauthrised words in the message
        </p>
        <p className="p-4 pb-0 text-xl ml-4 font-bold font-sans">
          – Testing of Campaign
        </p>
        <p className="p-4 pb-0 text-xl ml-4 font-bold font-sans">
          – CTA (Call to Action) in the message for better response
        </p>
        <p className="p-4 pb-0 text-xl ml-4 font-bold font-sans">
          – Say No to SPAM
        </p>
        <p className="p-4 pb-0 text-xl ml-4 font-bold font-sans">
          – Use of Demographies
        </p>
        <p className="p-4 pb-0 text-xl ml-4 font-bold font-sans">
          – Analysis of each campaign and corrective measures
        </p>
        <p className="p-4 pb-0 text-xl ml-4 font-bold font-sans">
          – Use of Affiliates for better reach and response
        </p>
        <p className="p-4 pb-0 text-xl ml-4 font-bold font-sans">
          – Do not plan multiple campaigns on the same data with better response
        </p>
        <p className="p-4 pb-0 text-xl font-sans">
          Though it is tricky to get response for Marketing Manager and they get
          tempted for the “Way Out” from their tight budgets. Yet we need to
          understand it is our duty to preserve this best and most effective
          Marketing Medium
        </p>
      </div>
      </RevealOnScroll>
    </div>
  );
}

export default A2pblog;
