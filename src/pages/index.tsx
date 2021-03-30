import React from "react";
import { HomeContainer } from "../styles/pages/Home";
import Hero from "../pageSections/Home/Hero";
import WhiteBanner from "../pageSections/Home/WhiteBanner";
import MSPartnership from "../pageSections/Home/MSPartnership";
import ProcessSection from "../pageSections/Home/Process";
import Contact from "../pageSections/Home/Contact";
import Blog from "../pageSections/Home/Blog";
import Newsletter from "../pageSections/Home/Newsletter";

import LeftDetail from "../assets/img/quadrados/azul1-home.png";
import RightDetail from "../assets/img/quadrados/azul2-home.png";
import { SmoothScrollProvider } from "../contexts/SmoothScrollContext";

// function parallax() {
//   const scrolled = window.pageYOffset;
//   const parallax = document.querySelector<HTMLElement>(".parallax");
//   // You can adjust the 0.4 to change the speed
//   const coords = scrolled * 0.4 + "px";
//   parallax.style.transform = "translateY(" + coords + ")";
// }

const Home: React.FC = () => {
  return (
    <SmoothScrollProvider options={{ smooth: true, multiplier: 0.5 }}>
      
      <HomeContainer data-scroll-section>

        <Hero />

        <section id="white-banner">
          <div className="container">
            <p>
              Aliamos pessoas, tecnologias e métodos <br />
              para transformar a Gestão de Projetos das organizações
            </p>
            <div
              className="detail"
              style={{ left: "20px", bottom: "-51px" }}
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-0.4"
            >
              <img src={LeftDetail} />
            </div>
            <div className="detail" style={{ right: "20px", bottom: "-101px" }}>
              <img src={RightDetail} />
            </div>
          </div>
        </section>        

        <MSPartnership />

        <ProcessSection />

        <Contact />

        <Blog />

        <Newsletter />

      </HomeContainer>
      
    </SmoothScrollProvider>
  );
};

export default Home;
