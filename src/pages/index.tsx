import React from "react";
import { HomeContainer } from "../styles/pages/Home";
import HeroHome from "../components/HeroHome";

import HeroBG from "../assets/img/quadrados/home/hero.png";
import Azul1 from "../assets/img/quadrados/home/azul1.png";
import Azul2 from "../assets/img/quadrados/home/azul2.png";
import BrancoContato from "../assets/img/quadrados/home/branco_contato.png";
import BrancoNewsLetter from "../assets/img/quadrados/home/branco_newsletter.png";
import Laranja1 from "../assets/img/quadrados/home/laranja1.png";
import Laranja2 from "../assets/img/quadrados/home/laranja2.png";
import Laranja3 from "../assets/img/quadrados/home/laranja3.png";
import Roxo from "../assets/img/quadrados/home/roxo.png";
import VerdeClaro1 from "../assets/img/quadrados/home/verde_claro1.png";
import VerdeClaro2 from "../assets/img/quadrados/home/verde_claro2.png";
import Verde1 from "../assets/img/quadrados/home/verde1.png";
import Verde2 from "../assets/img/quadrados/home/verde2.png";
import Verde3 from "../assets/img/quadrados/home/verde3.png";
import Vermelho1 from "../assets/img/quadrados/home/vermelho1.png";
import Vermelho2 from "../assets/img/quadrados/home/vermelho2.png";
import VermelhoBlog1 from "../assets/img/quadrados/home/vermelho1_blog.png";
import VermelhoBlog2 from "../assets/img/quadrados/home/vermelho2_blog.png";

import ProcessDivider from "../assets/img/process_divider.svg";

import { SmoothScrollProvider } from "../contexts/SmoothScrollContext";
import Footer from "../components/Footer";


const processData = [
  {
    form: "square",
    text: "Pensando em organizações que sofrem com prazos e orçamentos de projetos desenvolvemos uma abordagem baseada no nível de maturidade. Tornamos a gestão de projetos mais ágil e eficiente criando ciclos de melhoria contínua por meio de tecnologia, capacitação, melhoria de processos e aplicação de metodologias."
  },
  {
    form: "postIt",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestias quasi, nulla magnam assumenda delectus commodi nostrum sint dolore nisi!"
  },
  {
    form: "lemon",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusamus harum, exercitationem nulla sapiente soluta molestias molestiae beatae aliquam architecto, dolores perferendis officia, cupiditate rem!"
  },
  {
    form: "chat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad sequi, harum earum corporis totam dignissimos similique pariatur molestiae architecto dolore nihil porro vitae, maxime dolorem quas corrupti illo facere?"
  },
  {
    form: "circle",
    text: "Pensando em organizações que sofrem com prazos e orçamentos de projetos desenvolvemos uma abordagem baseada no nível de maturidade. Tornamos a gestão de projetos mais ágil e eficiente criando ciclos de melhoria contínua por meio de tecnologia, capacitação, melhoria de processos e aplicação de metodologias."
  },
];

const blogCardsData = [
  {image: 'https://cdn.stocksnap.io/img-thumbs/960w/laptop-working_HB4IJY3TPI.jpg', title: 'Project for the Web e Power Plataform: Conexão e Benefícios', text: 'O Project for the Web foi desenvolvido pela Microsoft visando ser de fácil uso para planejadores de projetos e suas equipes.' },
  {image: 'https://cdn.stocksnap.io/img-thumbs/960w/laptop-working_HB4IJY3TPI.jpg', title: 'Project for the Web e Power Plataform: Conexão e Benefícios', text: 'O Project for the Web foi desenvolvido pela Microsoft visando ser de fácil uso para planejadores de projetos e suas equipes.' },
  {image: 'https://cdn.stocksnap.io/img-thumbs/960w/laptop-working_HB4IJY3TPI.jpg', title: 'Project for the Web e Power Plataform: Conexão e Benefícios', text: 'O Project for the Web foi desenvolvido pela Microsoft visando ser de fácil uso para planejadores de projetos e suas equipes.' },
];

const Home: React.FC = () => {

  const [processActiveItem, setProcessActiveItem] = React.useState<number>(0);
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [numberOfEmployees, setNumberOfEmployees] = React.useState<number>(0);
  const [phone, setPhone] = React.useState<string>('');
  const [subject, setSubject] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  
  const showProcess = (index: number) => {
    processActiveItem !== index && setProcessActiveItem(index);
  };

  const checkIfHasValue = (e) => {
    if (e.target.value !== '') e.target.labels[0].classList.add('has-value');
    if (e.target.value === '' && e.target.labels[0].classList.value === 'has-value') e.target.labels[0].classList.remove('has-value');
  }  

  return (
    
      
      <HomeContainer>

        <HeroHome />

        <section id="white-banner">
          <div className="container">
            <p>
              Aliamos pessoas, tecnologias e métodos <br />
              para transformar a Gestão de Projetos das organizações
            </p>
            <div className="detail" style={{ left: "20px", bottom: "-51px" }} data-scroll data-scroll-position="top" data-scroll-speed="-0.2">
              <img src={Azul1} />
            </div>
            <div className="detail"  style={{ right: "20px", bottom: "-101px" }} data-scroll data-scroll-position="top" data-scroll-speed="-0.3">
              <img src={Azul2} />
            </div>
          </div>
        </section>        

        <section id="ms-partnership">
          <div className="container">
            <div className="image-block">
              <img
                src={`https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
              />
            </div>
            <div className="partner-block">
              <div className="partner-block-info">
                <h2 className="info-title">
                  Microsoft
                  <br />
                  Partner
                </h2>

                <ul className="info-list">
                  <li>Gold lorem ipsum</li>
                  <li>Gold lorem ipsum</li>
                  <li>Silver lorem ipsum</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id='process'>
          <div className="container col">
            <div className="detail" style={{top: '-251px', left: "20px"}} data-scroll data-scroll-position="top" data-scroll-speed="-0.1">
              <img src={Verde1} />
            </div>
            <div className="detail" style={{top: '-201px', right: '274px'}} data-scroll data-scroll-position="top" data-scroll-speed="-0.3">
              <img src={Verde2} />
            </div>
            <div className="detail" style={{top: '-151px', right: '20px'}} data-scroll data-scroll-position="top" data-scroll-speed="-0.4">
              <img src={Verde3} />
            </div>
            <div className="title-area">
              <span className="shape postIt"></span>
              <span className="title">nosso processo</span>
            </div>
            <div className="section-subtitle">conheça as etapas do nosso processo de transformação</div>
            <div className="process-forms">
              <div className="process-track">
                <div className='forms-container'>
                  {processData.map((item, index) =>
                    <>
                      <div className={`shape ${item.form} ${processActiveItem === index ? 'open' : ''}`} onClick={() => showProcess(index)}></div>
                      {index < processData.length - 1 ? <span style={{display: 'flex'}}> <ProcessDivider /> </span> : ''}
                    </>
                  )}            
                </div>
              </div>                      
              <div className='text-container'>
                {processData.map((item, index) =>             
                  <div className={`text ${processActiveItem === index ? 'open' : ''}`}>
                    <p>{item.text}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="detail" style={{bottom: '-205px', left: '20px'}} data-scroll data-scroll-position="top" data-scroll-speed="-0.3">
              <img src={VerdeClaro1} />
            </div>
            <div className="detail" style={{bottom: '-205px', right: '20px'}} data-scroll data-scroll-position="top" data-scroll-speed="-0.1">
              <img src={VerdeClaro2} />
            </div>
          </div>

        </section>

        <section id="contact">
          <div className="container">
            <div className="contact-form">
              <div className="form-info">
                <div className="title-area">
                  <span className="shape chat"></span>
                  <span className="title">contato</span>
                </div>
                <div className="subtitle">
                  <span>precisando de ajuda com a sua <br/> gestão de projetos?</span>
                </div>
                <div className="extra">
                  <span>Entre em contato conosco!</span>
                </div>
              </div>
              <form action="">
                <div className="form-group">
                  <label htmlFor="txtName">nome</label>
                  <input 
                    type="text" 
                    id="txtName" 
                    onChange={ e => {
                      checkIfHasValue(e);
                      setName(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                  <label htmlFor="txtEmail">email</label>
                  <input 
                    type="text" 
                    id="txtEmail"
                    onChange={ e => {
                      checkIfHasValue(e);
                      setEmail(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                  <label htmlFor="numEmployees">número de funcionários</label>
                  <input 
                    type="text" 
                    id="numEmployees"
                    onChange={ e => {
                      checkIfHasValue(e);

                      const number = parseFloat(e.target.value);
                    
                      if(!isNaN(number)) 
                        setNumberOfEmployees(number);

                      if(!isNaN(number) && e.target.nextElementSibling.classList.value.includes('show-error')) {
                        setNumberOfEmployees(number);
                        e.target.nextElementSibling.classList.remove('show-error');
                      }
                    
                      if (isNaN(number) && e.target.value !== "")
                        e.target.nextElementSibling.classList.add('show-error');

                    }}/>

                    <span className="error-msg">Digite um número válido</span>
                </div>
                <div className="form-group">
                  <label htmlFor="txtPhone">telefone</label>
                  <input 
                    type="text" 
                    id="txtPhone" 
                    onChange={e => { 
                      checkIfHasValue(e);
                      setPhone(e.target.value);
                    }}/>
                </div>
                  
                {/* checkboxes */}
                  
                <div className="form-group">
                  <label htmlFor="txtSubject">assunto</label>
                  <input 
                    type="text" 
                    id="txtSubject"
                    onChange={e => { 
                      checkIfHasValue(e);
                      setSubject(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                  <label htmlFor="txtMessage">como podemos ajudar?</label>
                  <input 
                    type="text" 
                    id="txtMessage"
                    onChange={e => { 
                      checkIfHasValue(e);
                      setMessage(e.target.value);
                    }}/>
                </div>
                  
                <input className='send-button' type="submit" value="enviar"/>
              </form>
            </div>
            <div className="contact-info">
              <div className="title-area">
                <span className="shape person"></span>
                <span className="title">vagas</span>
              </div>
              <span className="subtitle">Seja a transformação, venha para a Trentim!</span>
              <button className="btn-work">vagas</button>
            </div>
            <div className="detail" style={{bottom: '100px', right: "20px"}} data-scroll data-scroll-position="top" data-scroll-speed="-0.01">
              <img src={BrancoContato} alt=""/>
            </div>
            <div className="detail" style={{bottom: "-113px", left: "20px"}} data-scroll data-scroll-position="top" data-scroll-speed="-0.4">
              <img src={Laranja1} />
            </div>
            <div className="detail" style={{bottom: "-117px", right: "210px"}} data-scroll data-scroll-position="top" data-scroll-speed="-0.3">
              <img src={Laranja2} />
            </div>
            <div className="detail" style={{bottom: "-173px", right: "20px"}} data-scroll data-scroll-position="top" data-scroll-speed="-0.1">
              <img src={Laranja3} />
            </div>
          </div>
        </section>

        <section id="blog">
          <div className="container col">
            <div className="detail" style={{top: "50px", left: "20px"}} data-scroll data-scroll-position="top" data-scroll-speed="-0.5">
              <img src={VermelhoBlog1} alt=""/>
            </div>
            <div className="detail" style={{top: "220px", right: "20px"}} data-scroll data-scroll-position="top" data-scroll-speed="-0.1">
              <img src={VermelhoBlog2} alt=""/>
            </div>
            <div className="title-area">
              <span className="shape chat"></span>
              <span className="title">trends</span>
            </div>
            <div className="cards-container">
              {blogCardsData.map((card) => 
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
        </section>
        
        <section id="newsletter">
          <div className="container">
            <div className="newsletter-container">
              <div className="title-area">
                <div className="shape chat"></div>
                <div className="title">newsletter</div>
              </div>
              <div className="newsletter-info">
                <span className="text">
                  Tendências, artigos e notícias sobre
                  <br />
                  gestão de projetos, assine nossa news!
                </span>
                <form action="">
                  <input
                    type="text"
                    name=""
                    id="emailForNewsletter"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input className="button-newsletter" type="submit" value="receber newsletter" />
                </form>
              </div>
            </div>
            <div className="detail" style={{top: "50%", transform: "translateY(-50%)", right: "20px"}}>
              <img src={BrancoNewsLetter} alt=""/>
            </div>
            <div className="detail" style={{bottom: "3px", left: "300px"}} data-scroll data-scroll-position="top" data-scroll-speed="-0.5">
              <img src={Vermelho1} alt=""/>
            </div>
            <div className="detail" style={{bottom: "3px", right: "20px"}} data-scroll data-scroll-position="top" data-scroll-speed="-0.5">
              <img src={Vermelho2} alt=""/>
            </div>
          </div>
        </section>

      </HomeContainer>
      
  );
};

export default Home;
