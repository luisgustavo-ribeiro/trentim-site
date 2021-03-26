import React from "react";
import { HomeContainer } from "../styles/pages/Home";
import Hero from "../pageSections/Home/Hero";
import WhiteBanner from "../pageSections/Home/WhiteBanner";
import MSPartnership from "../pageSections/Home/MSPartnership";
import ProcessSection from "../pageSections/Home/Process";
import Contact from "../pageSections/Home/Contact";
import Blog from "../pageSections/Home/Blog";
import Newsletter from "../pageSections/Home/Newsletter";

// function parallax() {
//   const scrolled = window.pageYOffset;
//   const parallax = document.querySelector<HTMLElement>(".parallax");
//   // You can adjust the 0.4 to change the speed
//   const coords = scrolled * 0.4 + "px";
//   parallax.style.transform = "translateY(" + coords + ")";
// }

const Home: React.FC = () => {
  return (
    <HomeContainer>
      
      <Hero />
      
      <WhiteBanner />

      <MSPartnership />

      <ProcessSection />

      <Contact />

      <Blog />

      <Newsletter />      
      
    </HomeContainer>
  );
};

export default Home;
