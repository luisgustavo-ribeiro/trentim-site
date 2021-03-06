import theme from "../../styles/theme";
import assessment from "../img/pages/solucoes/assesment.jpg";
import modernPMO from "../img/pages/solucoes/modernPMO.jpg";
import aaservice from "../img/pages/solucoes/as-a-services.jpg";
import learn from "../img/pages/solucoes/as-a-services.jpg";
import subscription from "../img/pages/solucoes/learn.jpg";

export const solutionsData = [
  {
    title: "diagnóstico consultivo",
    subtitle: "assessment",
    titleColor: `${theme.colors.base.lime}`,
    text: "por onde começar? Se você não sabe qual a melhor tecnologia, ferramenta e metodologia de gestão de projetos adotar, recomendamos o Trentim Assessment, um programa de consultoria rápido (4 semanas), cujo objetivo é conhecer seus processos, necessidades e nível de maturidade tecnológica e apontar caminhos de melhoria.",    
    mediaPosition: "right",
    mediaUrl: assessment,
    inlineShapeName: "lime",
    filledShapeName: "postIt",
    inlineShapeColor: `${theme.colors.base.lime}`,
    filledShapeColor: `${theme.colors.light.lime}`,
    shapesSize: "100px",
  },
  {
    title: "ferramentas e aplicações",
    subtitle: "modernPMO",
    titleColor: `${theme.colors.base.blue2}`,
    text: "por onde começar? Se você não sabe qual a melhor tecnologia, ferramenta e metodologia de gestão de projetos adotar, recomendamos o Trentim Assessment, um programa de consultoria rápido (4 semanas), cujo objetivo é conhecer seus processos, necessidades e nível de maturidade tecnológica e apontar caminhos de melhoria.",    
    mediaPosition: "left",
    mediaUrl: modernPMO,
    inlineShapeName: "square",
    filledShapeName: "postIt",
    inlineShapeColor: `${theme.colors.base.blue2}`,
    filledShapeColor: `${theme.colors.light.cyan}`,
    shapesSize: "100px",
  },
  {
    title: "gestão executiva",
    subtitle: "PMO as a Service",
    titleColor: `${theme.colors.base.blue}`,
    text: "para organizações que já possuem projetos acontecendo, mas sofrem com problemas de headcount de profissionais especializados em gestão de projetos, o PMO as a Service é a melhor solução. Nele alocamos em sua empresa profissionais que são supervisionados pelo time de PMO da Trentim, esse modelo evita problemas comuns da forma tradicional de alocação, como continuidade e complementariedade de habilidades.",
    mediaPosition: "right",
    mediaUrl: aaservice,
    inlineShapeName: "person",
    filledShapeName: "postIt",
    inlineShapeColor: `${theme.colors.base.blue}`,
    filledShapeColor: `${theme.colors.light.blue}`,
    shapesSize: "100px",
    box: {
      title: "desenvolvimento especializado",
      subtitle: "BusinessApps as a Service",
      titleColor: `${theme.colors.light.blue}`,
      text: "e em casos que a necessidade é de profissionais especialistas nas tecnologias Microsoft temos o BusinessApps as a Service, com ele alocamos profissionais qualificados tanto para o desenvolvimento de aplicações de negócio, como para o apoio e trabalho em conjunto com a equipe interna da sua empresa. As alocações são a partir de uma semana para profissionais de nível pleno ou sênior.",
    }
  },
  {
    title: "conscientização e treinamento",
    subtitle: "Learn",
    titleColor: `${theme.colors.dark.pink}`,
    text: "acreditamos que todo processo de transformação também envolve a capacitação times para usarem adequadamente as ferramentas, seguirem os processos, etc, por isso também temos o Trentim Learn, um programa de treinamentos pocket, baseado em roteiros de aprendizagem pensados para gerar maturidade tecnológica (ferramentas) e técnica (metodologias).",
    mediaPosition: "left",
    mediaUrl: learn,
    inlineShapeName: "circle",
    filledShapeName: "person",
    inlineShapeColor: `${theme.colors.dark.pink}`,
    filledShapeColor: `${theme.colors.light.pink}`,
    shapesSize: "100px",
  },
  {
    title: "suporte e acompanhamento",
    subtitle: "Subscription",
    titleColor: `${theme.colors.dark.orange}`,
    text: "finalmente, depois que tudo estiver rodando, nossos clientes sempre precisam de apoio, para isso oferecemos o Subscription, um serviço de suporte ativo e reativo, com atendimento por tickets e baseado em horas que podem ser usadas para resolver eventuais dificuldades, esclarecer dúvidas, desenvolver pequenas melhorias e realizar breves treinamentos.",
    mediaPosition: "right",
    mediaUrl: subscription,
    inlineShapeName: "person",
    filledShapeName: "square",
    inlineShapeColor: `${theme.colors.dark.orange}`,
    filledShapeColor: `${theme.colors.light.orange}`,
    shapesSize: "100px",
  },
]