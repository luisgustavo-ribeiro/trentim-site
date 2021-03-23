import React from "react";
import { NewsletterStyles } from "./NewsletterStyles";

import BrancoNews from "../../assets/img/quadrados/branco-newsletter-home.png";
import VermelhoBL from "../../assets/img/quadrados/vermelho1-home.png";
import VermelhoBR from "../../assets/img/quadrados/vermelho2-home.png";

const Newsletter = () => {
  const [email, setEmail] = React.useState<string>("");

  return (
    <NewsletterStyles id="newsletter">
      <div className="container">
        <div className="newsletter-container">
          <div className="title-area">
            <div className="form chat"></div>
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
        <div className="detail" style={{top: "50%", transform: "translateY(-50%)", right: "20px"}}><img src={BrancoNews} alt=""/></div>
        <div className="detail" style={{bottom: "-203px", left: "300px"}}><img src={VermelhoBL} alt=""/></div>
        <div className="detail" style={{bottom: "-203px", right: "20px"}}><img src={VermelhoBR} alt=""/></div>
      </div>
    </NewsletterStyles>
  );
};

export default Newsletter;
