import React from 'react';
import { CasesPageData } from '../assets/data/casesPage';
import SectionCases from '../components/SectionCases';

const Cases = () => {
  return (
    <div>
      {CasesPageData.map(item =>
        <SectionCases item={item} />
      )}
    </div>
  )
}

export default Cases
