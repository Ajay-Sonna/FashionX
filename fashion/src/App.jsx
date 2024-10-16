import React from "react";
import { Navbar } from "./Components/Navbar";
import Hero from "./Components/Home";
import Feature from "./Components/Category";
import Workflow from "./Components/Styles";
import Pricing from "./Components/Offers";
//import { testimonials } from "./constants";
import Testimonials from "./Components/Reviews";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { scroller } from "react-scroll";

function App() {
 useEffect(()=>{
  scroller.scrollTo("hero",{
    duration:500,
    delay:100,
    smooth:true,
    offset: -70
  });
 })
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <div id="hero">
          <Hero />
        </div>
        <div id="feature">
          <Feature />
        </div>
        <div id="workflow">
          <Workflow />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6"></div>
      <div className="footer">
          <Footer />
        </div>
    </div>
  );
}

export default App;
