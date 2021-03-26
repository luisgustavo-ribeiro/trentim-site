import React from 'react';
import ISectionWithFormProps from '../../interfaces/ISectionWithFormProps';
import { SectionWithFormStyles } from './SectionWithFormStyles';

const SectionWithForm:React.FC<ISectionWithFormProps> = (props: ISectionWithFormProps) => {
  return (
    <SectionWithFormStyles>
      <div className="section-container">
        <div className="col left"></div>
        <div className="col right"></div>
      </div>
    </SectionWithFormStyles>
  )
}

export default SectionWithForm;
