import React from 'react'
import { WhiteBannerStyles } from './WhiteBannerStyles';

const WhiteBanner:React.FC = () => {
  return (
    <WhiteBannerStyles id="white-banner">
    <div className="container">
      <p>
        Aliamos pessoas, tecnologias e métodos <br />
        para transformar a Gestão de Projetos das organizações
      </p>
    </div>
  </WhiteBannerStyles>
  )
}

export default WhiteBanner;
