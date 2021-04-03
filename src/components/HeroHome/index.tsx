import React from "react";
import { HeroContent } from "./HeroStyles";
import HeroBG from "../../assets/img/quadrados/home/hero.png";
import SUZ_HERO from "../../assets/img/pages/cases/casePage/suzano/SUZ_HERO.jpg"; 
import SUZ_LOGO from "../../assets/img/pages/cases/casePage/suzano/suzano-logo-hero.png";
import SGB_HERO from "../../assets/img/pages/cases/casePage/saintgobain/SGB_HERO.jpg";
import SGB_LOGO from "../../assets/img/pages/cases/casePage/saintgobain/saintgobain-logo-hero.png";
import IBEMA_HERO from "../../assets/img/pages/cases/casePage/ibema/IBEMA_HERO.jpg";
import IBEMA_LOGO from "../../assets/img/pages/cases/casePage/ibema/ibema-logo-hero.png";
import BV_HERO from "../../assets/img/pages/cases/casePage/bv/BV_HERO.jpg";
import BV_LOGO from "../../assets/img/pages/cases/casePage/bv/bv-logo-hero.png";

const tabItems = [
  {
    hero: SUZ_HERO,
    name: "Suzano",
    text: 'Redução de 4.500 horas mensais com a plataforma de gestão moderna de projetos',
    url: SUZ_LOGO,
  },
  {
    hero: SGB_HERO,
    name: "Saint-Gobain",
    text: 'Transformação Digital com capacitação intensiva dos colaboradores',
    url: SGB_LOGO,
  },
  {
    hero: BV_HERO,
    name: "Bureau Veritas",
    text: 'Aplicativo de Gestão de Mudanças reduz custo e tempo em projetos',
    url: BV_LOGO,
  },
  {
    hero: IBEMA_HERO,
    name: "Ibema",
    text: 'Solução de Gestão de Projetos sem gastar uma única hora de trabalho',
    url: IBEMA_LOGO,
  },
];

const HeroHome: React.FC = () => {
  const [heroActiveItem, setHeroActiveItem] = React.useState<number>(0);

  const showItem = (index: number) => {
    heroActiveItem !== index && setHeroActiveItem(index);
  };

  return (
    <HeroContent>
      <div className='bg-container' style={{backgroundImage: `url(${HeroBG})`}}></div>
      <div className="container">
        <div className="hero-items">
          <div className="hero-left-col">
            <div className="hero-carousel">
              {
                tabItems.map((tabItem, index) => 
                  <div key={index} className={`hero-carousel-content ${index === heroActiveItem ? 'open' : ''}`}>
                    <div className='content-img'>
                      <img src={tabItem.url} alt={tabItem.name} />
                    </div>
                    <div className='content-info'>
                      <p>{tabItem.text}</p>
                    </div>
                  </div>
                )
              }
              <div className="hero-carousel-items-track">
                <div className="hero-carousel-items">
                  {tabItems.map((item, index) => 
                      <div className="carousel-logo-container" onClick={() => showItem(index)}>
                        <img src={item.url} alt={item.name} />
                      </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right-col">
            <img src={tabItems[heroActiveItem].hero} alt=""/>
          </div>
        </div>
      </div>
    </HeroContent>
  );
};

export default HeroHome;
