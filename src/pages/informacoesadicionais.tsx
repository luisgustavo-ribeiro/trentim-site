import Router from "next/router";
import React from "react";
import { InformacoesAdicionaisContainer } from "../styles/pages/InformacoesAdicionaisContainer";
import { InformacoesAdicionaisData } from "../assets/data/informacoesAdicionais";
import Hero from "../components/Hero";

// ADICIONAR POLITICA DE PRIVACIDADE E TERMOS DE USO

const InformacoesAdicionais = () => {
  const [informacoesAdicionais, setInformacoesAdicionais] = React.useState<string>(null);

  React.useEffect(() => {
    const { asPath } = Router;

    setInformacoesAdicionais(asPath.split("=")[1]);
  }, []);

  return (
    <>
      {informacoesAdicionais && informacoesAdicionais === "politica-de-privacidade" && 
        <>

          <InformacoesAdicionaisContainer>
              <div className="container col">
                {InformacoesAdicionaisData.map(item => 
                  <div className="info-block">
                    <h1 className="title">{item.title}</h1>
                    <p className="text">{item.text}</p>
                  </div>
                )}
              </div>
          </InformacoesAdicionaisContainer>
        </>
      }
      {informacoesAdicionais && informacoesAdicionais === "termos-de-uso" && 
        <>

          <InformacoesAdicionaisContainer>
            <div className="container"></div>
          </InformacoesAdicionaisContainer>
        </>
      }
    </>
  );
};

export default InformacoesAdicionais;
