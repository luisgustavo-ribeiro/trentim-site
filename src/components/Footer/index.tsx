import React from 'react';
import { FooterStyles } from './FooterStyles';

import Facebook from '../../assets/img/footer/facebook.svg';
import Instagram from '../../assets/img/footer/instagram.svg';
import Linkedin from '../../assets/img/footer/linkedin.svg';
import Youtube from '../../assets/img/footer/youtube.svg';

import BRIcon from "../../assets/img/icons/braza@2x.svg";
import CNIcon from "../../assets/img/icons/canada@2x.svg";
import PTIcon from "../../assets/img/icons/portugal@2x.svg";

import MS_GOLD from "../../assets/img/footer/ms-gold-partner-logo.gif";
import GPTW from "../../assets/img/footer/GPTW.png";
import EF_PMI from "../../assets/img/footer/EF_PMI.png";
import PMI from "../../assets/img/footer/PMI.png";

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
              <div className="social-icon">
              <a href="https://www.facebook.com/trentimbr" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              </div>
              <div className="social-icon">
              <a href="https://www.instagram.com/trentim.br/" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
              </div>
              <div className="social-icon">
              <a href="https://www.linkedin.com/company/trentim" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              </div>
              <div className="social-icon">
              <a href="https://www.youtube.com/c/trentim/" target="_blank" rel="noopener noreferrer">
                <Youtube />
              </a>
              </div>
            </div>

            <div className='termos'>
              <a href="/informacoesadicionais?=politica-de-privacidade">Política de privacidade</a>
              <span style={{margin: '0 4px'}}>|</span>
              <a href="/informacoesadicionais?=termos-de-uso">Termos de uso</a>
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
          <div className="right-col">
            <div className="ms-gold">
              <img src={MS_GOLD} alt=""/>
            </div>
            <div className="gptw">
              <img src={GPTW} alt=""/>
            </div>
            <div className="pmi">
              <img src={EF_PMI} alt=""/>
              <img src={PMI} alt=""/>
            </div>
          </div>
          
        </div>
        <div className="detail" style={{position: "absolute", left: "20px", bottom: "-220px"}}>
          <img src={Roxo} alt=""/>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer;
