import React from "react";
import SectionWithShape from "../components/SectionWithShape";
import Hero from "../components/Hero";
import { CarreirasContainer } from "../styles/pages/Carreiras";
import { heroData, firstSectionData, videoSectionData, carreirasData } from "../assets/data/carreiras";

const Carreiras: React.FC = () => {

  return (
    <CarreirasContainer>
      
      <Hero 
        imageUrl={heroData.imageUrl}
        title={heroData.title}
        text={heroData.text}
      />

      <SectionWithShape 
        item={firstSectionData}
        mediaType="video"
        mediaPosition={firstSectionData.mediaPosition}
        shapePosition="left"
      />

      <section id='carreiras-videos'>
        <div className="container">
          <div className="video-section">
            {videoSectionData.map(video => 
              <iframe key={video.id} src={`https://player.vimeo.com/video/${video.url}?title=0&byline=0&portrait=0`} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            )}
          </div>
        </div>
      </section>

      {carreirasData.map((carreira, index) => 
        <SectionWithShape 
          key={index}
          item={carreira} 
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
        </div>
      </section>

    </CarreirasContainer>
  );
};

export default Carreiras;
