import React from 'react';
import { CasesPageData } from '../assets/data/casesPage';
import Hero from '../components/Hero';
import SectionCases from '../components/SectionCases';
import CasesHero from "../assets/img/pages/cases/hero-cases.jpg";

const Cases = () => {
  return (
    <>
      
      <Hero 
        imageUrl={CasesHero}
        title="Casos de sucesso:"
        imagePositionX="center"
        imagePositionY="center"
        subtitle="integrando tecnologia e gestão de projetos"
        text="Descubra como temos transformado a gestão de projetos em empresas líderes no Brasil, e saiba como nossos clientes têm obtido grandes resultados através de nossas soluções."
      />

      {CasesPageData.map(item =>
        <SectionCases item={item} />
      )}

    </>
  )
}

export default Cases
