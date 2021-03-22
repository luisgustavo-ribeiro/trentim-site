import React from "react";
import { NewsletterStyles } from "./NewsletterStyles";

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
      </div>
    </NewsletterStyles>
  );
};

export default Newsletter;
