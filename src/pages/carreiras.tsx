import React from "react";
import SectionWithShape from "../components/SectionWithShape";
import Hero from "../components/Hero";
import { CarreirasContainer } from "../styles/pages/Carreiras";
import { heroData, firstSectionData, videoSectionData, carreirasData } from "../assets/data/carreiras";

import AzulClaro1 from "../assets/img/quadrados/carreiras/azul-claro-carreiras.png";
import VerdeClaro1 from "../assets/img/quadrados/carreiras/verde-claro-carreiras.png";
import BrancoVagas from "../assets/img/quadrados/carreiras/branco-fundo-roxo-carreiras.png";

const Carreiras: React.FC = () => {

  const [dimensions, setDimensions] = React.useState({ height: 0, width: 0 });

  React.useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <CarreirasContainer>
      
      <Hero 
        imageUrl={heroData.imageUrl}
        title={heroData.title}
        text={heroData.text}
      />

      <div className="shape-sv-carreiras">
        <SectionWithShape 
          item={firstSectionData}
          shapeType="single"
          mediaType="video"
          mediaPosition={firstSectionData.mediaPosition}
          shapePosition="left"
        />
      </div>
      
      <section id='carreiras-videos'>
        {dimensions.width > 1024.99 &&
          <div className="container" style={{zIndex: 0}}>
            <div className="sq-details" data-scroll data-scroll-position="top" data-scroll-speed="-0.3">
              <img src={AzulClaro1} alt="" />
            </div>
          </div>
        }
        <div className="container">
          <div className="video-section">
            {videoSectionData.map(video => 
              <iframe key={video.id} src={`https://player.vimeo.com/video/${video.url}?title=0&byline=0&portrait=0`} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            )}
          </div>
        </div>

        {dimensions.width > 1024.99 &&
          <div className="container" style={{zIndex: 0}}>
            <div className="sq-details" data-scroll data-scroll-position="top" data-scroll-speed="-0.3" style={{top: "-160px"}}>
              <img src={VerdeClaro1} alt="" style={{ marginLeft: "auto" }}/>
            </div>
          </div>
        }
      </section>


      {carreirasData.map((carreira, index) => 
        <SectionWithShape 
          key={index}
          item={carreira} 
          shapeType="single"
          mediaType="img"
          mediaPosition={carreira.mediaPosition} 
          shapePosition={carreira.mediaPosition}
        />
      )}

      <section id="carreiras-vagas">
        <div className="container">
          <div className="bloco-vagas">
            <div className="title">vagas</div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit blanditiis, a.</p>
            </div>
            <a href="http://trent.im/vagas">vagas</a>
          </div>
          <div className="sq-details">
            <img src={BrancoVagas} alt="" style={{marginLeft: "auto" }}/>
          </div>
        </div>
      </section>

    </CarreirasContainer>
  );
};

export default Carreiras;
