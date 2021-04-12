import Router from "next/router";
import React from "react";
import { Hero, InformacoesAdicionaisContainer } from "../styles/pages/InformacoesAdicionaisContainer";
import { politicaDePrivacidadeData, termosDeUsoData } from "../assets/data/informacoesAdicionais";

import HERO_BG from "../assets/img/quadrados/home/hero.png";

const InformacoesAdicionais = () => {
  const [informacoesAdicionais, setInformacoesAdicionais] = React.useState<string>(null);

  React.useEffect(() => {
    const { asPath } = Router;

    setInformacoesAdicionais(asPath.split("=")[1]);
  }, []);

  return (
    <>
      <Hero>
        <div className="detail">
          <img src={HERO_BG} />
        </div>
        <div className="container">
          {informacoesAdicionais && informacoesAdicionais === "politica-de-privacidade" && 
            <div className="title">
              política de privacidade
            </div>
          }
          {informacoesAdicionais && informacoesAdicionais === "termos-de-uso" && 
            <div className="title">
              termos de uso
            </div>
          }
        </div>
      </Hero>

      {informacoesAdicionais && informacoesAdicionais === "politica-de-privacidade" && 
        <InformacoesAdicionaisContainer>
            <div className="container col">
              {politicaDePrivacidadeData.map(item => 
                <div className="info-block">
                  <h1 className="title">{item.title}</h1>
                  <p className="text">{item.text}</p>
                </div>
              )}
            </div>
        </InformacoesAdicionaisContainer>
      }

      {informacoesAdicionais && informacoesAdicionais === "termos-de-uso" && 
        <InformacoesAdicionaisContainer>
          <div className="container col">
            {termosDeUsoData.map(item => 
              <div className="info-block">
                <h1 className="title">{item.title}</h1>
                <p className="text">{item.text}</p>
              </div>
            )}
          </div>
        </InformacoesAdicionaisContainer>
      }
    </>
  );
};

export default InformacoesAdicionais;
