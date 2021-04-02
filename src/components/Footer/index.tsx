import React from 'react';
import { FooterStyles } from './FooterStyles';

import Facebook from '../../assets/img/footer/facebook.svg';
import Instagram from '../../assets/img/footer/instagram.svg';
import Linkedin from '../../assets/img/footer/linkedin.svg';
import Youtube from '../../assets/img/footer/youtube.svg';

import BRIcon from "../../assets/img/icons/braza@2x.svg";
import CNIcon from "../../assets/img/icons/canada@2x.svg";
import PTIcon from "../../assets/img/icons/portugal@2x.svg";

import Roxo from "../../assets/img/quadrados/home/roxo.png";

const Footer: React.FC = () => {
  return (
    <FooterStyles id="footer">
      <div className="container col">
        <div className="title-area">
          <span className="shape chat"></span>
          <span className="title">contate-nos</span>
        </div>
        <div className="footer-container">
          <div className="left-col">
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
          <div className="mid-col">
            <div className="address">
              <div className="icon">
                <BRIcon />
              </div>
              <div className="text">
                <ul>
                  <li>Brasil</li>
                  <li>Av São João, 2375 15º Andar</li>
                  <li>São José dos Campos, São Paulo</li>
                </ul>
              </div>
            </div>
            <div className="address">
              <div className="icon">
                <CNIcon />
              </div>
              <div className="text">
                <ul>
                  <li>Canadá</li>
                  <li>6th Street SW</li>
                  <li>Calgary, Alberta, T2R 0Z7</li>
                </ul>
              </div>
            </div>
            <div className="address">
              <div className="icon">
                <PTIcon />
              </div>
              <div className="text">
                <ul>
                  <li>Portugal</li>
                  <li>Avenida Portugal, 77, Carnaxide</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-col"></div>
          
        </div>
        <div className="detail" style={{left: "20px", bottom: "-280px"}}>
          <img src={Roxo} alt=""/>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer;
