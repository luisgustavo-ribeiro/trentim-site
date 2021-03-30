import React from "react";
import { HomeContainer } from "../styles/pages/Home";
import Hero from "../pageSections/Home/Hero";
import ProcessSection from "../pageSections/Home/Process";
import Contact from "../pageSections/Home/Contact";
import Blog from "../pageSections/Home/Blog";
import Newsletter from "../pageSections/Home/Newsletter";

import {  
  Azul1,
  Azul2,
  BrancoContato,
  BrancoNewsLetter,
  Laranja1,
  Laranja2,
  Laranja3,
  Roxo,
  VerdeClaro1,
  VerdeClaro2,
  Verde1,
  Verde2,
  Verde3,
  Vermelho1,
  Vermelho2,
  VermelhoBlog1,
  VermelhoBlog2
} from "../assets/img/quadrados/home"

// import RightDetail from "../assets/img/quadrados/azul2-home.png";
import { SmoothScrollProvider } from "../contexts/SmoothScrollContext";

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
              <img src={Azul1} />
            </div>
            <div className="detail" style={{ right: "20px", bottom: "-101px" }}>
              <img src={Azul2} />
            </div>
          </div>
        </section>        

        <section id="ms-partnership">
          <div className="container">
            <div className="image-block">
              <img
                src={`https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
              />
            </div>
            <div className="partner-block">
              <div className="partner-block-info">
                <h2 className="info-title">
                  Microsoft
                  <br />
                  Partner
                </h2>

                <ul className="info-list">
                  <li>Gold lorem ipsum</li>
                  <li>Gold lorem ipsum</li>
                  <li>Silver lorem ipsum</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*  <ProcessSection />

        <Contact />

        <Blog />

        <Newsletter /> */}

      </HomeContainer>
      
    </SmoothScrollProvider>
  );
};

export default Home;
