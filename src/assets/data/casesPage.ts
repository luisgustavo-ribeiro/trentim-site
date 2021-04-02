import theme from "../../styles/theme";
import SUZ_LOGO from "../img/pages/cases/casePage/suzano/suzano-logo-hero.png";
import SUZ_HERO from "../img/pages/cases/casePage/suzano/SUZ_HERO.jpg";
import SGB_LOGO from "../img/pages/cases/casePage/saintgobain/saintgobain-logo-hero.png";
import SGB_HERO from "../img/pages/cases/casePage/saintgobain/SGB_HERO.jpg";
import BV_LOGO from "../img/pages/cases/casePage/bv/bv-logo-hero.png";
import BV_HERO from "../img/pages/cases/casePage/bv/BV_HERO.jpg";
import IBEMA_LOGO from "../img/pages/cases/casePage/ibema/ibema-logo-hero.png";
import IBEMA_HERO from "../img/pages/cases/casePage/ibema/IBEMA_HERO.jpg";

export const CasesPageData = [
  {
    bgColor: "#FFF",
    logoUrl: SUZ_LOGO,
    title: "Automatização de processos manuais envolvendo SharePoint, Power BI e Power Automate",
    titleColor: `${theme.colors.base.blue2}`,
    text: "Resultou em economia de 4.500h de trabalho mensais – o equivalente a mais de R$ 100.000 reais por mês. Gerou confiabilidade e controle na gestão de projetos da organização.",
    textColor: `${theme.colors.base.gray1}`,
    imgUrl: SUZ_HERO,
    imgAlignment: "right",
    imgPositionX: "center",
    imgPositionY: "center",
    imgScale: 1,
    caseName: "suzano",
  },
  {
    bgColor: `${theme.colors.base.aqua}`,
    logoUrl: SGB_LOGO,
    title: "Capacitação e adoção de Microsoft Teams e Planner para novo modelo de trabalho",
    titleColor: "#FFF",
    text: "Garantiu domínio técnico imediato das tecnologias do novo modelo de gestão adotado pela empresa. Ofereceu aplicação prática voltada ao cenário do cliente.",
    textColor: "#FFF",
    imgUrl: SGB_HERO,
    imgAlignment: "left",
    imgPositionX: "center",
    imgPositionY: "center",
    imgScale: 1,
    caseName: "saintgobain",
  },
  {
    bgColor: "#FFF",
    logoUrl: BV_LOGO,
    title: "Automatização de processos manuais envolvendo SharePoint, Power BI e Power Automate.",
    titleColor: `${theme.colors.base.blue2}`,
    text: "Resultou em economia de 4.500h de trabalho mensais – o equivalente a mais de R$ 100.000 reais por mês. Gerou confiabilidade e controle na gestão de projetos da organização.",
    textColor: `${theme.colors.base.gray1}`,
    imgUrl: BV_HERO,
    imgAlignment: "right",
    imgPositionX: "center",
    imgPositionY: "center",
    imgScale: 1,
    caseName: "bv",
  },
  {
    bgColor: "#FFF",
    logoUrl: IBEMA_LOGO,
    title: "Automatização de processos manuais envolvendo SharePoint, Power BI e Power Automate.",
    titleColor: `${theme.colors.base.blue2}`,
    text: "Resultou em economia de 4.500h de trabalho mensais – o equivalente a mais de R$ 100.000 reais por mês. Gerou confiabilidade e controle na gestão de projetos da organização.",
    textColor: `${theme.colors.base.gray1}`,
    imgUrl: IBEMA_HERO,
    imgAlignment: "right",
    imgPositionX: "center",
    imgPositionY: "center",
    imgScale: 1,
    caseName: "ibema",
  },
]