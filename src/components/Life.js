import React ,{useState,useEffect,useRef} from 'react'
import img from '../assets/event1.jpg'
import img1 from '../assets/event2.jpg'
import img2 from '../assets/event3.jpg'
import img3 from '../assets/event4.jpg'
import img4 from '../assets/events4.jpg'
import img5 from '../assets/img2.jpg'
import img6 from '../assets/event7.jpg'
import img7 from '../assets/events6.jpg'
import img8 from '../assets/event6.jpg'
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

function Life() {
  return (
    <div>
 <div class="w-screen px-4 relative mt-7 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto pb-8">
 <RevealOnScroll>
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
  <RevealOnScroll>
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-sky-400">Life @ SMSCloud Hub</h2>
    <p class="mt-1 text-gray-600 dark:text-gray-400">Learn How to Celebrate the Most Amazing and Unique Days of the Year with Style and Fun</p>
    </RevealOnScroll>
  </div>
  <RevealOnScroll>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src={img} alt="Image Description"/>
     
      </div>

      <div class="my-6">
        <h3 class="text-xl font-semibold text-sky-800 ">
          Amazing celebration of Christmas
        </h3>
        <p class="mt-5 text-gray-800">
        Our office Christmas party was a success! We had a great time celebrating our accomplishments, exchanging gifts, and enjoying some delicious food and drinks. #OfficeFun
        </p>
      </div>
    
    </a>
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src={img1} alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-sky-800">
        A Perfect Day for a Picnic with Our Team </h3>
        <p class="mt-5 text-gray-600">
        We are more than just coworkers, we are friends! Our office picnic was a testament to our strong and positive work culture.
        </p>
      </div>
     
    </a>
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl h-[320px]" src={img5} alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-sky-800">
          Independenceday celebration
        </h3>
        <p class="mt-5 text-gray-600">
        Celebrating 75 years of freedom and progress with the best people in the industry. Happy Independence Day to my awesome co-workers!
      </p>
      </div>
    
    </a>
  
       <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src={img4} alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-sky-800">
        Congratulations on getting an award in your team! 🎉
        </h3>
        <p class="mt-5 text-gray-600">
        The Benefits of Working in a High-Performing Team      
        </p>
      </div>
    
    </a>
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl h-[320px]" src={img2} alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-sky-800">
        How a Restaurant Party Made Us Appreciate Our Work Culture and Colleagues </h3>
        <p class="mt-5 text-gray-600 ">
        A Taste of Excellence: How We Enjoyed a Delicious Meal and Great Conversation at Our Office Party</p>
      </div>
       </a>
   
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src={img3} alt="Image Description"/>
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-sky-800 ">
          Done Succesfully meeting
        </h3>
        <p class="mt-5 text-gray-600 dark:text-gray-400">
        It was a result of a successful meeting where we showcased our value proposition and addressed their pain points.  </p>
      </div>
    
    </a>
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src={img8} alt="Image Description"/>
     
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-sky-800 ">
        Fun Friday: The Best Way to End the Week on a High Note
        </h3>
        <p class="mt-5 text-gray-800">
        How We Unwind and Connect After a Busy Week at SMSCloud Hub
        </p>
      </div>
    
    </a>
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src={img7} alt="Image Description"/>
     
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-sky-800 ">
        A Farewell to Our Interns
        </h3>
        <p class="mt-5 text-gray-800">
        What We Learned from Them and What They Learned from Us.Congratulating Our Interns on Their Achievements
        </p>
      </div>
    
    </a>
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl h-[320px]" src={img6} alt="Image Description"/>
     
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-sky-800 ">
        The Benefits of Running a Marathon as a Team
        </h3>
        <p class="mt-5 text-gray-800">
        How We Ran a Marathon Together and Strengthened Our Team Spirit  </p>
      </div>
    
    </a>
  </div>
  </RevealOnScroll>
</RevealOnScroll>
</div>
    </div>
  )
}

export default Life
