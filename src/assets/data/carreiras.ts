import theme from '../../styles/theme';
import HeroCarreirasIMG from "../../assets/img/pages/carreiras/hero-carreiras.png";
import Desenvolvimento from "../../assets/img/pages/carreiras/desenvolvimento_e_inovacao.jpg";
import CarreiraW from "../../assets/img/pages/carreiras/carreira_w.jpg";
import EquipeAutentica from "../../assets/img/pages/carreiras/equipe_atentica.jpg";
import Pertencimento from "../../assets/img/pages/carreiras/pertencimento.jpg";
import AtencaoAosClientes from "../../assets/img/pages/carreiras/atencao_aos_clientes.jpg";

export const firstSectionData = {
  sectionBGColor: "#FFF",
  shapeName: "square",
  shapeColor: `${theme.colors.base.cyan}`,
  shapeZIndex: 0,
  mediaUrl: "531942120",
  mediaPosition: 'right',
  imageX: "-40px", 
  imageY:"-80px", 
  imageScale: 1.2,
  title: "somos trentim",
  titleColor: `${theme.colors.base.cyan}`,
  text: "No último ano nós dobramos de tamanho por aqui, de 20 para 40 trentinions. E para cada um deles esse pertencimento tem um significado.\n\n\nConheça um pouco mais de nós!",
  textColor: `${theme.colors.base.gray1}`
};

export const videoSectionData = [
  {
    id: 1,
    url: '531948233'
  },
  {
    id: 2,
    url: '532027253'
  },
  {
    id: 3,
    url: '532047832'
}]

export const carreirasData = [{
  sectionBGColor: "#FFF",
  shapeName: "circle",
  shapeColor: `${theme.colors.base.green}`,
  shapeZIndex: 1,
  mediaUrl: Desenvolvimento,
  mediaPosition: 'right',
  imageX: "-40px", 
  imageY:"-80px", 
  imageScale: 1.2,
  imageXMobile: "-30px", 
  imageYMobile:"-80px", 
  imageScaleMobile: 1.2,
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
  mediaUrl: CarreiraW,
  mediaPosition: 'left',
  imageX: "-110px", 
  imageY:"70px", 
  imageScale: 1.9,
  title: "plano de carreira: modelo w",
  titleColor: "#FFF",
  text: "Ter um plano profissional é realmente motivante. Nosso modelo de carreira em W oferece mais flexibilidade para o seu sucesso. Nesse formato você pode optar por áreas diferentes de sua formação, seja gerencial, funcional ou técnica.",
  textColor: "#FFF"
},
{
  sectionBGColor: "#FFF",
  shapeName: "lemon",
  shapeColor: `${theme.colors.dark.yellow}`,
  shapeZIndex: 1,
  mediaUrl: EquipeAutentica,
  mediaPosition: 'right',
  imageX: "0px", 
  imageY:"-280px", 
  imageScale: 1,
  imageXMobile: "center", 
  imageYMobile:"center", 
  imageScaleMobile: 1,
  title: "equipe autêntica e disruptiva",
  titleColor: `${theme.colors.dark.yellow}`,
  text: "Aqui na TRENTIM temos muito espaço para criatividade. Nossa equipe é composta por profissionais prestigiados e premiados, com características notáveis. Sua opinião e participação é sempre bem-vinda para nós!",
  textColor: `${theme.colors.base.gray1}`
},
{
  sectionBGColor: `${theme.colors.base.orange}`,
  shapeName: "square",
  shapeColor: "#FFF",
  shapeZIndex: 1,
  mediaUrl: Pertencimento,
  mediaPosition: 'left',
  imageX: "center", 
  imageY:"center", 
  imageScale: 1,
  title: "pertencimento e união",
  titleColor: "#FFF",
  text: "Seja em São Paulo ou no Pará, no Brasil ou no Canadá, não importa a distância, nos mantemos sempre conectados. Nossos trentinions são nosso maior bem e nos fazem ser quem somos.",
  textColor: "#FFF"
},
{
  sectionBGColor: "#FFF",
  shapeName: "postIt",
  shapeColor: `${theme.colors.base.red}`,
  shapeZIndex: 1,
  mediaUrl: AtencaoAosClientes,
  mediaPosition: 'right',
  imageX: "center", 
  imageY:"center", 
  imageScale: 1,
  title: "atenção e dedicação aos nossos clientes",
  titleColor: `${theme.colors.base.red}`,
  text: "Trabalhamos a gestão e a inovação orientada a resultados. Nosso objetivo é sempre oferecer a mudança de realidade e o sucesso dos nossos clientes através da tecnologia e nós amamos o que fazemos.",
  textColor: `${theme.colors.base.gray1}`
}];

export const heroData = {
  imageUrl: HeroCarreirasIMG,
  title: "junte-se ao time!",
  text: "sobre carreira orientada a resultados por aqui o foco em resultado é sempre prioridade, tanto nos clientes como nas nossas equipes."
}