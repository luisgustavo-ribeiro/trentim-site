import React from "react";
import { HeroContent } from "./HeroStyles";
import HeroBG from "../../assets/img/quadrados/home/hero.png";
import SUZ_LOGO from "../../assets/img/clientlogos/cor/Suzano-horizontal.png";
import SGB_LOGO from "../../assets/img/clientlogos/cor/Saint-Gobain.png";
import IBEMA_LOGO from "../../assets/img/clientlogos/cor/Ibema-horizontal.png";
import BV_LOGO from "../../assets/img/clientlogos/cor/Bureal-Veritas.png";

const tabItems = [
  {
    name: "Suzano",
    text: 'Redução de 4.500 horas mensais com a gestão moderna de projetos',
    logo: SUZ_LOGO,
    url: '/case?=suzano'
  },
  {
    name: "Saint-Gobain",
    text: 'Capacitação intensiva em ferramentas de colaboração para adotar novo modelo de trabalho imediatamente',
    logo: SGB_LOGO,
    url: '/case?=saintgobain'
  },
  {
    name: "Bureau Veritas",
    text: 'Aplicativo de Gestão de Mudanças reduz custo e tempo em projetos',
    logo: BV_LOGO,
    url: '/case?=bv'
  },
  {    
    name: "Ibema",
    text: 'Gestão de projeto de Recursos Humanos sem gastar uma única hora de trabalho',
    logo: IBEMA_LOGO,
    url: '/case?=ibema'
  },
];

const HeroHome: React.FC = () => {
  const [heroActiveItem, setHeroActiveItem] = React.useState<number>(0);

  const showItem = (index: number) => {
    heroActiveItem !== index && setHeroActiveItem(index);
  };

  return (
    <HeroContent>
      <div className="hero-banner">
        <div className='bg-container' style={{backgroundImage: `url(${HeroBG})`}}></div>
          <div className="container">
            <div className="hero-title">
              <div className="title">
                <span className="shape square"></span>
                <span className="title">trentim</span>
              </div>
              <div className="hero-subtitle">
                <p>Aliamos pessoas, tecnologias e métodos para <br/>
                transformar a Gestão de Projetos das organizações</p>
            </div>
            </div>
            
        </div>
      </div>
      <section className="white-banner">
        <div className="container">
          <div className="hero-cases">            
            <div className="box-info">
              {tabItems.map((item, index) => 
                <div className={`info ${heroActiveItem === index ? 'active' : ''}`} key={index}>
                  <div className="title">{item.name}</div>
                  <div className="text">{item.text}</div>
                  <a href={item.url} className="btn-case">Veja o case clicando aqui!</a>
                </div>
              )}
              </div>
              <div className="box-logos">
                {tabItems.map((item, index) => 
                  <div className={`logo ${heroActiveItem === index ? 'active' : ''}`} key={index} onClick={() => setHeroActiveItem(index)}>
                    <img src={item.logo} alt=""/>
                  </div>
                )}
              </div>
            </div>          
        </div>
      </section>

    </HeroContent>
  );
};

export default HeroHome;
