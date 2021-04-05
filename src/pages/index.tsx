import React from "react";
import { HomeContainer } from "../styles/pages/Home";
import HeroHome from "../components/HeroHome";
import MSPartnership from "../assets/img/pages/home/ms-partnership.jpg";

import Azul1 from "../assets/img/quadrados/home/azul1.png";
import Azul2 from "../assets/img/quadrados/home/azul2.png";
import BrancoContato from "../assets/img/quadrados/home/branco_contato.png";
import BrancoNewsLetter from "../assets/img/quadrados/home/branco_newsletter.png";
import Laranja1 from "../assets/img/quadrados/home/laranja1.png";
import Laranja2 from "../assets/img/quadrados/home/laranja2.png";
import Laranja3 from "../assets/img/quadrados/home/laranja3.png";
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
import ContactForm from "../components/ContactForm";

const processData = [
  {
    form: "square",
    text:
      "Pensando em organizações que querem projetos mais ágeis, flexíveis e eficientes, temos uma abordagem baseada no nível de maturidade, criando ciclos de melhoria contínua.",
  },
  {
    form: "postIt",
    text:
      "Conhecer. Nesse momento buscamos entender as suas necessidades e o resultado que espera obter. Aproveitamos para te mostrar como funciona o nosso ecossistema de soluções.",
  },
  {
    form: "lemon",
    text:
      "Traçar o caminho. Aceitamos o desafio e buscamos possibilidades para alcançar o seu objetivo. Apresentamos nossa solução e definimos juntos a melhor opção para o seu cenário.",
  },
  {
    form: "chat",
    text:
      "Transformar. Depois de tudo especificado é hora de iniciarmos a execução do projeto. Nossa equipe acompanha de perto esse processo para garantir o resultado esperado.",
  },
  {
    form: "circle",
    text:
      "Evoluir. O sucesso obtido abre portas para atingirmos novos níveis de maturidade na sua organização. Estaremos prontos para subir mais um degrau na sua transformação em gestão de projetos.",
  },
];

const blogCardsData = [
  {
    image:
      "https://cdn.stocksnap.io/img-thumbs/960w/laptop-working_HB4IJY3TPI.jpg",
    title: "Project for the Web e Power Plataform: Conexão e Benefícios",
    text:
      "O Project for the Web foi desenvolvido pela Microsoft visando ser de fácil uso para planejadores de projetos e suas equipes.",
  },
  {
    image:
      "https://cdn.stocksnap.io/img-thumbs/960w/laptop-working_HB4IJY3TPI.jpg",
    title: "Project for the Web e Power Plataform: Conexão e Benefícios",
    text:
      "O Project for the Web foi desenvolvido pela Microsoft visando ser de fácil uso para planejadores de projetos e suas equipes.",
  },
  {
    image:
      "https://cdn.stocksnap.io/img-thumbs/960w/laptop-working_HB4IJY3TPI.jpg",
    title: "Project for the Web e Power Plataform: Conexão e Benefícios",
    text:
      "O Project for the Web foi desenvolvido pela Microsoft visando ser de fácil uso para planejadores de projetos e suas equipes.",
  },
];

const Home: React.FC = () => {
  const [processActiveItem, setProcessActiveItem] = React.useState<number>(0);
  const [newsletterEmail, setNewsletterEmail] = React.useState<string>("");

  const showProcess = (index: number) => {
    processActiveItem !== index && setProcessActiveItem(index);
  };

  const contactFormEnter = (e) => {
    if (e.target.id === "contact") {
      e.target.classList.add("contact-hovered");

      setTimeout(() => {
        e.target.querySelector(".send-button").classList.add("contact-hovered");
      }, 10000);
    }
  };

  const contactFormLeave = (e) => {
    if (e.target.id === "contact") {
      e.target.classList.remove("contact-hovered");
      e.target
        .querySelector(".send-button")
        .classList.remove("contact-hovered");
    }
  };

  return (
    <HomeContainer>
      <HeroHome />

      <section id="white-banner">
        <div className="container">
          <p>
            Aliamos pessoas, tecnologias e métodos <br />
            para transformar a Gestão de Projetos das organizações
          </p>
          <div className="sq-details" style={{ bottom: "-110px" }}>
            <div
              className="detail"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-0.2"
            >
              <img src={Azul1} />
            </div>
            <div
              className="detail"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-0.3"
            >
              <img src={Azul2} />
            </div>
          </div>
        </div>
      </section>

      <section id="ms-partnership">
        <div className="container">
          <div className="image-block">
            <img src={MSPartnership} />
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

      <section id="process">
        <div className="container col">
          <div className="sq-details" style={{ top: "-230px" }}>
            <div
              className="detail"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-0.1"
            >
              <img src={Verde1} />
            </div>
            <div
              className="detail"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-0.2"
            >
              <img src={Verde2} />
            </div>
            <div
              className="detail"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-0.1"
            >
              <img src={Verde3} />
            </div>
          </div>
          <div className="title-area">
            <span className="shape postIt"></span>
            <span className="title">nosso processo</span>
          </div>
          <div className="section-subtitle">
            conheça as etapas do nosso processo de transformação
          </div>
          <div className="process-forms">
            <div className="process-track">
              <div className="forms-container">
                {processData.map((item, index) => (
                  <>
                    <div
                      className={`shape ${item.form} ${
                        processActiveItem === index ? "open" : ""
                      }`}
                      onClick={() => showProcess(index)}
                    ></div>
                    {index < processData.length - 1 ? (
                      <span style={{ display: "flex" }}>
                        {" "}
                        <ProcessDivider />{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="text-container">
              {processData.map((item, index) => (
                <div
                  className={`text ${
                    processActiveItem === index ? "open" : ""
                  }`}
                >
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="sq-details" style={{ bottom: "-250px" }}>
            <div
              className="detail"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-0.1"
            >
              <img src={VerdeClaro1} />
            </div>
            <div
              className="detail"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-0.2"
            >
              <img src={VerdeClaro2} />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        onMouseEnter={(e) => contactFormEnter(e)}
        onMouseLeave={(e) => contactFormLeave(e)}
      >
        <div className="container">
          <ContactForm />
          <div className="contact-info">
            <div className="title-area">
              <span className="shape person"></span>
              <span className="title">vagas</span>
            </div>
            <span className="subtitle">
              Seja a transformação, venha para a Trentim!
            </span>
            <a href="http://trent.im/vagas" className="btn-work">
              vagas
            </a>
          </div>

          <div
            className="detail"
            style={{ position: "absolute", bottom: "150px", right: "0px" }}
            data-scroll
            data-scroll-position="top"
            data-scroll-speed="-0.01"
          >
            <img src={BrancoContato} alt="" />
          </div>

          <div
            className="sq-details"
            style={{ bottom: "-120px" }}
            data-scroll
            data-scroll-position="top"
            data-scroll-speed="-0.3"
          >
            <div className="detail">
              <img src={Laranja1} />
            </div>
            <div className="detail">
              <img src={Laranja2} />
            </div>
            <div className="detail">
              <img src={Laranja3} />
            </div>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="container col">
          <div
            className="sq-details"
            style={{ top: "120px" }}
            data-scroll
            data-scroll-position="top"
            data-scroll-speed="-0.2"
          >
            <div className="detail">
              <img src={VermelhoBlog1} alt="" />
            </div>
            <div className="detail">
              <img src={VermelhoBlog2} alt="" />
            </div>
          </div>
          <div className="title-area">
            <span className="shape chat"></span>
            <span className="title">trends</span>
          </div>
          <div className="cards-container">
            {blogCardsData.map((card) => (
              <div className="card">
                <div className="img-container">
                  <img src={card.image} alt="" />
                </div>
                <div className="title">{card.title}</div>
                <div className="text">{card.text}</div>
                <div className="button-container">
                  <button className="button">continuar lendo</button>
                </div>
              </div>
            ))}
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
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <input
                  className="button-newsletter"
                  type="submit"
                  value="receber newsletter"
                />
              </form>
            </div>
          </div>
          <div
            className="detail"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "20px",
            }}
          >
            <img src={BrancoNewsLetter} alt="" />
          </div>
          <div className="sq-details" style={{ bottom: "-10px" }}>
            <div
              className="detail"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-0.5"
            >
              <img src={Vermelho1} alt="" />
            </div>
            <div
              className="detail"
              data-scroll
              data-scroll-position="top"
              data-scroll-speed="-0.5"
            >
              <img src={Vermelho2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </HomeContainer>
  );
};

export default Home;
