import React from "react";
import { HomeContainer } from "../styles/pages/Home";
import Hero from "../sections/Hero";
import WhiteBanner from "../sections/WhiteBanner";
import MSPartnership from "../sections/MSPartnership";
import ProcessSection from "../sections/Process";
import Contact from "../sections/Contact";


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

    </HomeContainer>
  );
};

export default Home;
