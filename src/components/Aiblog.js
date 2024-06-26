import React from "react";
import img from "../assets/ai.jpg";
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
function Aiblog() {
  return (
    <div>
      
      <div className=" w-screen aib relative  lg:p-10 md:pt-10">
        <RevealOnScroll>     <h1 className="text-5xl pt-10  font-bold text-center">Aiblog</h1>
        <img
          src={img}
          className="w-[90%] lg:h-[500px]  mx-auto my-5 rounded-2xl flex"
          alt=""
        />

        <div>
        <RevealOnScroll>

        <p className="p-4 pb-0 text-lg ">
               A2P SMS is plain and simple, yet most widely used due to it
          simplicity. Many a times it is chosen as a compliance guideline or as
          a most cost effective and efficient medium. The very important feature
          of A2P SMS is – it is neutral and run under GSMA / ITU guidelines.
        
        </p>
        <p className="p-4  pb-0 text-lg ">
          With RCS and OTTs influx A2P SMS feels heat as those platforms are
          more sophisticated and there is AI (Artificial Intelligence)
          integration enabled.
        </p>
        <p className="p-4  pb-0  text-lg ">
          For A2P SMS – AI can be added at the platform level (at the operator
          end) to avoid spam, virus and unnecessary interconnect charges. It can
          also prevent the use of grey routes abusing P2P channels.
        </p>
        <p className="p-4  pb-0  text-lg ">
          Use of AI for SMS at the user level can be done using some primary
          application like 2FA, some apps to identify the spam / frauds, data
          collection on Virtual Long Numbers or ShortCodes etc. There could be
          realtime interaction and post message analysis on the collected data.
        </p>
        <p className="p-4  pb-0  text-lg ">
          As mobile messaging becomes highly prevalent Brands wants to analyse
          the data collected during conversation using A2P SMS (and other sort
          of messaging) and make it interactive using AI. Brands want their
          customers to remain in constant touch with conversational messaging.
        </p>
        <p className="p-4  pb-0  text-lg ">
          Around 2016 Chatbot came into the existence, though the technology was
          very old but integration with OTTs, RCS and A2P SMS helped Brands to
          make the conversation interactive. Chatbots have been successful till
          some extent. The need of more human like interaction led to further
          progress of Chatbots.
        </p>
        <p className="p-4 pb-0 text-xl ">
          Around 2019 NLP (Natural Language Processing) was introduced for
          Contextual understanding and action. NLP was only possible with AI.
          NLP was very good till some level and further the success was depended
          on the cultural Affinity, language recognition and demographics of the
          user.
        </p>
        <p className="p-4 pb-0 text-xl ">
          Between 2020-2021 new ways made Conversational AI or Applied AI
          possible with the use of multiple technologies behind automated
          messaging and speech-enabled applications and offered human-like
          interactions between Apps and users by reading Text, Identifying the
          language, analysing the context and responding with the right answer
          (or options to choose from).
        </p>
        <p className="p-4 pb-0 text-xl ">
          Today we see Google’s RCS, WhatsApp Business Messaging, Telegram and
          other services have already made Conversational AI possible. Many
          Software companies are also developing their plugins as AddOns to OTT
          with extended features and analytics using AI.
        </p>
        <p className="p-4 pb-0 text-xl ">
          This is how now AI is used in Conversation and analytics helping
          Brands to minimize support & marketing team and adding ease to the end
          clients. ( everyone knows how tedious and boring to hold a customer
          care phone line versus using a chat bot with bank ) !!
        </p>
        <p className="p-4 pb-0 text-xl ">
          We strongly believe that the easiest (and probably most cost
          effective) way for Brands is to integrate AI with NLP at the A2P
          Platform level to analyse their B2C users’ data and make it more
          interactive by integration with other technologies. ( we are heading
          to CPaaS now ).
        </p>
        <p className="p-4 pb-0 text-xl ">
          AS per PRN News Wire : The global conversational AI market size was
          valued at $5.78 billion in 2020 and is projected to reach $32.62
          billion by 2030. The forecasted compound annual growth rate (CAGR) is
          20.0% from 2021 to 2030. This data helps us to understand the
          usability and acceptance of AI with messaging in the coming years.
        </p>
        <p className="p-4 pb-0 text-xl ">
          Though, with the PRN News wire data, everyone would feel like to build
          AI solution and get a pie out of that. Yes that should be the way. But
          it requires lot of efforts to train it, and apply it to the everyday
          conversations happening on the messaging apps and make consumers to
          learn how to use it effectively
        </p>
        <p className="p-4 pb-0 text-xl ">
          And the effect of wrong communication is known to everyone 😊 !!!
        </p>
        <p className="p-4 pb-0 text-xl ">
          Brands and Developers should always consider major issues faced with
          AI integration ...
        </p>
        <p className="p-4 pb-0 text-xl font-bold ">– Security</p>
        <p className="p-4 ml-4 pb-0 text-xl ">
          The biggest issue is about security of the device when you are
          integrating with various platforms. There are very high chances of
          spoofing of data at any level. For example, any financial data
          analysis might jeopardise the security of the user.
        </p>
        <p className="p-4 pb-0 text-xl font-bold ">
          – Integration with multi channel
        </p>
        <p className="p-4 pb-0 ml-4 text-xl ">
          For the ease of use SMS / Messaging has to be integrated with Voice,
          Email and other complex OTT channels which is not a difficult task,
          but when users want them to work in synchronicity, it becomes
          challenge and bringing the analysis on a single dashboard is most
          difficult.
        </p>
        <p className="p-4 pb-0 text-xl font-bold ">
          – Interactive Platform
        </p>
        <p className="p-4 pb-0 ml-4 text-xl ">
          AI Platform or solution must overcome few interactive issues to become
          successful and user-friendly.
        </p>
        <p className="p-4 pb-0  ml-4 font-bold text-xl ">
          Time : in Messaging 10 ms response is also late. Need lightning fast
          response from AI
        </p>
        <p className="p-4 pb-0 ml-4 font-bold text-xl ">
          Dialect : Language and Dialect keeps changing
        </p>
        <p className="p-4 pb-0 ml-4 font-bold text-xl ">
          Use of Short forms and Slangs : Another major challenges
        </p>
        <p className="p-4 pb-0 text-xl font-bold ">
          – Content Based Rules
        </p>
        <p className="p-4 pb-0 ml-4 text-xl ">
          Depending on the content setting up the rule (again that is highly
          dependent on business process or culture)
        </p>
        <p className="p-4 pb-0 text-xl font-bold ">– Privacy</p>
        <p className="p-4 pb-0 ml-4 text-xl ">
          There should be enough arrangement not to track user and the AI data
          has to be kept safe as per GDPR laws
        </p>
        <p className="p-4 pb-0 text-xl font-bold ">– Scalability</p>
        <p className="p-4 pb-0 text-xl ml-4 ">
          Another major point to be considered for the higher number of
          interaction
        </p>
        <p className="p-4 pb-0 text-xl font-bold ">– Dashboard</p>
        <p className="p-4 pb-0 ml-4 text-xl ">
          This has to be most intuitive and user-friendly aspect for better user
          engagement
        </p>
        <p className="p-4 pb-0 text-xl ml-4 ">
          This has to be most intuitive and user-friendly aspect for better user
          engagement
        </p>
        </RevealOnScroll>
        </div>
        </RevealOnScroll>
   
      </div>
    </div>
  );
}

export default Aiblog;
