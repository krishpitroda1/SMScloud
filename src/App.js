import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { useEffect } from "react";
import Blogs from "./components/Blogs";
import A2pblog from "./components/A2pblog";
import Aiblog from "./components/Aiblog";
import { useLocation } from "react-router-dom";
import Digitalblog from "./components/Digitalblog";
import Hop from "./components/0Hop";
import Test from "./components/Test";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Ccc from "./components/Ccc";
import Enterprise from "./components/Enterprise";
import Operator from "./components/Operator";
import Technology from "./components/Technology";
import Carrier from "./components/Carrier";
import Smsc from "./components/Smsc";
import Privacy from "./components/Privacy";
import Services from "./components/Services";
import Carrers from "./components/Carrers";
import End from './components/End';
import WA from "./components/WA";
import A2P from "./components/A2P";
import Error from "./components/Error";
import Cpas from "./components/Cpas";
import Jobs from "./components/Jobs";
import Life from "./components/Life";
import Voice from "./components/Voice";
import Vn from "./components/Vn";
// import Particles from "./components/Particle";
import Cloudskool from "./components/Cloudskool";
import Managehubs from "./components/Managehubs";
import { Route, Routes } from "react-router-dom";
import Vas from "./components/Vas";
import Events from "./components/Events";
import ParticleBackground from "./components/ParticlesBackground";
import HashLoader from "react-spinners/HashLoader";
 import { useState} from "react";
import { keyframes } from "styled-components";
 
function App() {
  const override={
    display: "block",
    margin: "0 auto",
    position:'absolute',
    width:"100%",
    height:"100vh",
    }
   


  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#0ea5f9");
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
    },2000)
  },[])

  useEffect(() => {


    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
   <div>
    {
      loading ? <HashLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader" 
    />: 
    <div>
    <Navbar />
   <ParticleBackground/>
    <div className="container mt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Test" element={<Test/>} />
        <Route path="/0Hop" element={<Hop/>} />
        <Route path="/Vas" element={<Vas/>}/>
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/Services" element={<Services/>}  />
        <Route path="/Carrers" element={<Carrers/>}/>
        <Route path="/A2P" element={<A2P/>}/> 
        <Route path="/Enterprise" element={<Enterprise/>}/>
        <Route path="/Operator" element={<Operator/>} />
        <Route path="/Technology" element={<Technology/>}/>
        <Route path="/Carrier" element={<Carrier/>}/>
        <Route path="/WA" element={<WA/>} />
        <Route path="/Jobs" element={<Jobs/>} />
        <Route path="/Life" element={<Life/>} />
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Managehubs" element={<Managehubs/>}/>
        {/* <Route path="/Manageit" element={<Manageit/>} /> */}
        <Route path="/Voice" element={<Voice/>} />
        <Route path="/Aiblog" element={<Aiblog/>} />
        <Route path="/A2pblog" element={<A2pblog/>} />
        <Route path="/Digitalblog" element={<Digitalblog/>} />
        <Route path="/Privacy" element={<Privacy/>} />
        <Route path="/Smsc" element={<Smsc/>} />
        <Route path="/Cpas" element={<Cpas/>}/>
        <Route path="/Ccc" element={<Ccc/>}/>
        <Route path="/Vn" element={<Vn/>}/>
        <Route path="/Cloudskool" element={<Cloudskool/>}/>
        <Route path="*" element={<Error/>} />
         </Routes>
    </div>
    <End className="absolute"/>
  </div>

    }
    </div>
  
  );
}

export default App;
