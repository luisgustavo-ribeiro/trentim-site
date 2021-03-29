import React from 'react';
import SectionCases from '../components/SectionCases';
import theme from "../styles/theme";

const casesData = [
  {
    bgColor: "#FFF",
    logoUrl: "https://loja.suzano.com.br/_ui/responsive/theme-suzanoNew/images/logo-suzano-horizontal.png",
    title: "Automatização de processos manuais envolvendo SharePoint, Power BI e Power Automate",
    titleColor: `${theme.colors.base.blue2}`,
    text: "Resultou em economia de 4.500h de trabalho mensais – o equivalente a mais de R$ 100.000 reais por mês. Gerou confiabilidade e controle na gestão de projetos da organização.",
    textColor: `${theme.colors.base.gray1}`,
    imgUrl: "https://s2.glbimg.com/MHpuCB75IM5ABASXrlRsFIvfD34=/0x0:750x500/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2016/10/26/suzano.jpg",
    imgAlignment: "right",
    imgPositionX: "center",
    imgPositionY: "center",
    imgScale: 1,
  },
  {
    bgColor: `${theme.colors.base.aqua}`,
    logoUrl: "https://www.saint-gobain.com.br/sites/sgbr.master/themes/sgbr/bootstrap_instant/assets/img/logo-pt-br.png",
    title: "Capacitação e adoção de Microsoft Teams e Planner para novo modelo de trabalho",
    titleColor: "#FFF",
    text: "Garantiu domínio técnico imediato das tecnologias do novo modelo de gestão adotado pela empresa. Ofereceu aplicação prática voltada ao cenário do cliente.",
    textColor: "#FFF",
    imgUrl: "https://s2.glbimg.com/MHpuCB75IM5ABASXrlRsFIvfD34=/0x0:750x500/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2016/10/26/suzano.jpg",
    imgAlignment: "left",
    imgPositionX: "center",
    imgPositionY: "center",
    imgScale: 1,
  },
  {
    bgColor: "#FFF",
    logoUrl: "https://loja.suzano.com.br/_ui/responsive/theme-suzanoNew/images/logo-suzano-horizontal.png",
    title: "Automatização de processos manuais envolvendo SharePoint, Power BI e Power Automate.",
    titleColor: `${theme.colors.base.blue2}`,
    text: "Resultou em economia de 4.500h de trabalho mensais – o equivalente a mais de R$ 100.000 reais por mês. Gerou confiabilidade e controle na gestão de projetos da organização.",
    textColor: `${theme.colors.base.gray1}`,
    imgUrl: "https://s2.glbimg.com/MHpuCB75IM5ABASXrlRsFIvfD34=/0x0:750x500/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2016/10/26/suzano.jpg",
    imgAlignment: "right",
    imgPositionX: "center",
    imgPositionY: "center",
    imgScale: 1,
  },
  {
    bgColor: "#FFF",
    logoUrl: "https://loja.suzano.com.br/_ui/responsive/theme-suzanoNew/images/logo-suzano-horizontal.png",
    title: "Automatização de processos manuais envolvendo SharePoint, Power BI e Power Automate.",
    titleColor: `${theme.colors.base.blue2}`,
    text: "Resultou em economia de 4.500h de trabalho mensais – o equivalente a mais de R$ 100.000 reais por mês. Gerou confiabilidade e controle na gestão de projetos da organização.",
    textColor: `${theme.colors.base.gray1}`,
    imgUrl: "https://s2.glbimg.com/MHpuCB75IM5ABASXrlRsFIvfD34=/0x0:750x500/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2016/10/26/suzano.jpg",
    imgAlignment: "right",
    imgPositionX: "center",
    imgPositionY: "center",
    imgScale: 1,
  },
]

const Cases = () => {
  return (
    <div>
      {casesData.map(item =>
        <SectionCases item={item} />
      )}
    </div>
  )
}

export default Cases
