import React from 'react';
import { FooterStyles } from './FooterStyles';

import Facebook from '../../assets/img/footer/facebook.svg';
import Instagram from '../../assets/img/footer/instagram.svg';
import Linkedin from '../../assets/img/footer/linkedin.svg';
import Youtube from '../../assets/img/footer/youtube.svg';

import RoxoFooter from "../../assets/img/quadrados/roxo-footer.png";

const Footer: React.FC = () => {
  return (
    <FooterStyles id="footer">
      <div className="container">
        <div className="footer-container">
          <div className="left-col">
            <div className="title-area">
              <span className="shape chat"></span>
              <span className="title">contate-nos</span>
            </div>
            <ul id="address-info">
              <li>Telefone +55 12 3042-0108</li>
              <li>E-mail contato@trentim.com</li>
              <li>Whatsapp +55 12 99172-5779</li>
            </ul>

            <div className="social-media">
              <div className="social-icon"><Facebook /></div>
              <div className="social-icon"><Instagram /></div>
              <div className="social-icon"><Linkedin /></div>
              <div className="social-icon"><Youtube /></div>
            </div>

            <div className='termos'>
              <a href="#">Política de privacidade</a>
              <span style={{margin: '0 4px'}}>|</span>
              <a href="#">Termos de uso</a>
            </div>
          </div>
          <div className="mid-col"></div>
          <div className="right-col"></div>
          
        </div>
        <div className="detail" style={{left: "20px", bottom: "-280px"}}>
          <img src={RoxoFooter} alt=""/>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer;
