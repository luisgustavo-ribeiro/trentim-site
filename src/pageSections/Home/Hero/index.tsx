import React from "react";
import IHeroProps from "../../../interfaces/IHeroProps";
import { HeroContent } from "./HeroStyles";

import BG_Hero from '../../../assets/img/bg_hero.png';

const tabItems = [
  {
    name: "Suzano",
    url: "https://suzano-site.s3-sa-east-1.amazonaws.com/assets/img/logo-suzano-branco.png",
    text: 'Suzano conseguiu economizar 4.500 horas mensais com a gestão de projetos e processos automatizados pela Trentim.'
  },
  {
    name: "Saint Gobain",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Saint-Gobain_logo.svg/1280px-Saint-Gobain_logo.svg.png",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit doloribus labore libero necessitatibus similique rerum fugit laboriosam itaque?',
  },
  {
    name: "Klabin",
    url: "https://iconape.com/wp-content/files/iz/273704/svg/klabin-logo-logo-icon-png-svg.png",
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, temporibus.',
  },
  {
    name: "Ibema",
    url: "https://www.ibema.com.br/assets/img/logo_main.png",
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quod consequuntur nulla.',
  },
];

const Hero: React.FC<IHeroProps> = (props: IHeroProps) => {
  const [heroActiveItem, setHeroActiveItem] = React.useState<number>(0);

  const showItem = (index: number) => {
    heroActiveItem !== index && setHeroActiveItem(index);
  };

  return (
    <HeroContent>
      <div className='bg-container' style={{backgroundImage: `url(${BG_Hero})`}}></div>
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
            <img src="https://cdn.stocksnap.io/img-thumbs/960w/man-desk_QPJWWR3W2E.jpg" alt=""/>
          </div>
        </div>
      </div>
    </HeroContent>
  );
};

export default Hero;
