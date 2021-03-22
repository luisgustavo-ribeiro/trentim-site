import React from "react";
import { BlogStyles } from "./BlogStyles";

const cardsData = [
  {image: 'https://cdn.stocksnap.io/img-thumbs/960w/laptop-working_HB4IJY3TPI.jpg', title: 'Project for the Web e Power Plataform: Conexão e Benefícios', text: 'O Project for the Web foi desenvolvido pela Microsoft visando ser de fácil uso para planejadores de projetos e suas equipes.' },
  {image: 'https://cdn.stocksnap.io/img-thumbs/960w/laptop-working_HB4IJY3TPI.jpg', title: 'Project for the Web e Power Plataform: Conexão e Benefícios', text: 'O Project for the Web foi desenvolvido pela Microsoft visando ser de fácil uso para planejadores de projetos e suas equipes.' },
  {image: 'https://cdn.stocksnap.io/img-thumbs/960w/laptop-working_HB4IJY3TPI.jpg', title: 'Project for the Web e Power Plataform: Conexão e Benefícios', text: 'O Project for the Web foi desenvolvido pela Microsoft visando ser de fácil uso para planejadores de projetos e suas equipes.' },
]

const Blog = () => {
  return (
    <BlogStyles id="blog">
      <div className="container col">
        <div className="title-area">
          <span className="form chat"></span>
          <span className="title">trends</span>
        </div>
        <div className="cards-container">
          {cardsData.map((card) => 
            <div className='card'>
              <div className="img-container">
                <img src={card.image} alt=""/>
              </div>
              <div className="title">
                {card.title}
              </div>
              <div className="text">
                {card.text}
              </div>
              <div className="button-container">
                <button className="button">continuar lendo</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </BlogStyles>
  );
};

export default Blog;
