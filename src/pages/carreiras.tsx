import React from "react";
import SectionWithShape from "../components/SectionWithShape";
import HeroCarreiras from "../pageSections/Carreiras/Hero";
import { CarreirasContainer } from "../styles/pages/Carreiras";
import theme from "../styles/theme";

import Desenvolvimento from "../assets/img/pages/carreiras/desenvolvimento_e_inovacao.jpg";

const Carreiras: React.FC = () => {
  
  const carreirasData = [{
    sectionBGColor: "#FFF",
    shapeName: "circle",
    shapeColor: `${theme.colors.base.green}`,
    shapeZIndex: 1,
    image: Desenvolvimento,
    imagePosition: 'right',
    imageX: "-40px", 
    imageY:"-80px", 
    imageScale: 1.2,
    imageZIndex: 0,
    title: "desenvolvimento e inovação contínua",
    titleColor: `${theme.colors.base.green}`,
    text: "Quando o assunto é aprendizado nós não medimos esforços. Oferecemos suporte e incentivo para que você se desenvolva profissionalmente e incremente seus conhecimentos acerca da área que deseja atuar.",
    textColor: `${theme.colors.base.gray1}`
  },
  {
    sectionBGColor: `${theme.colors.dark.lime}`,
    shapeName: "person",
    shapeColor: "#FFF",
    shapeZIndex: 1,
    image: Desenvolvimento,
    imagePosition: 'left',
    imageX: "-40px", 
    imageY:"-80px", 
    imageScale: 1.2,
    imageZIndex: 0,
    title: "plano de carreira: modelo w",
    titleColor: "#FFF",
    text: "Ter um plano profissional é realmente motivante. Nosso modelo de carreira em W oferece mais flexibilidade para o seu sucesso. Nesse formato você pode optar por áreas diferentes de sua formação, seja gerencial, funcional ou técnica.",
    textColor: "#FFF"
  },
  {
    sectionBGColor: "#FFF",
    shapeName: "lemon",
    shapeColor: `${theme.colors.base.yellow}`,
    shapeZIndex: 1,
    image: Desenvolvimento,
    imagePosition: 'right',
    imageX: "-40px", 
    imageY:"-80px", 
    imageScale: 1.2,
    imageZIndex: 0,
    title: "equipe autêntica e disruptiva",
    titleColor: `${theme.colors.base.yellow}`,
    text: "Aqui na TRENTIM temos muito espaço para criatividade. Nossa equipe é composta por profissionais prestigiados e premiados, com características notáveis. Sua opinião e participação é sempre bem-vinda para nós!",
    textColor: `${theme.colors.base.gray1}`
  },
  {
    sectionBGColor: `${theme.colors.base.orange}`,
    shapeName: "square",
    shapeColor: "#FFF",
    shapeZIndex: 1,
    image: Desenvolvimento,
    imagePosition: 'left',
    imageX: "-40px", 
    imageY:"-80px", 
    imageScale: 1.2,
    imageZIndex: 0,
    title: "pertencimento e união",
    titleColor: "#FFF",
    text: "Seja em São Paulo ou no Pará, no Brasil ou no Canadá, não importa a distância, nos mantemos sempre conectados. Nossos trentinions são nosso maior bem e nos fazem ser quem somos.",
    textColor: "#FFF"
  }
];

  return (
    <CarreirasContainer>
      
      <HeroCarreiras />
      {carreirasData.map(carreira => 
        <SectionWithShape item={carreira} imagePosition={carreira.imagePosition} />
      )}

    </CarreirasContainer>
  );
};

export default Carreiras;
