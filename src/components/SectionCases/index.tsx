import React from 'react';
import ISectionCasesProps from '../../interfaces/ISectionCasesProps';
import { SectionCasesStyles } from './SectionCasesStyles';

const SectionCases:React.FC<ISectionCasesProps> = (props: ISectionCasesProps) => {

  return (
    <SectionCasesStyles style={{ backgroundColor: props.item.bgColor }}>
      <div className="container">
        {
          props.item.imgAlignment === "left" && 
            <div className="columns img-left">
              <div className="col left">
                <div className="block image">
                  <img src={props.item.imgUrl} />
                </div>
              </div>
              <div className="col right">
                <div className="block info">
                  <div className="logo-container">
                    <img src={props.item.logoUrl}/>
                  </div>
                  <span className="title" style={{color: props.item.titleColor}}>
                    {props.item.title}
                  </span>
                  <p className="text" style={{color: props.item.textColor}}>
                    {props.item.text}
                  </p>
                  <a href={`/case?=${props.item.caseName}`}>Ver case</a>
                </div>
              </div>              
            </div>
        }
        {
          props.item.imgAlignment === "right" && 
            <div className="columns img-right">
              <div className="col left">
                <div className="block info">
                  <div className="logo-container">
                    <img src={props.item.logoUrl}/>
                  </div>
                  <span className="title" style={{color: props.item.titleColor}}>
                    {props.item.title}
                  </span>
                  <p className="text" style={{color: props.item.textColor}}>
                    {props.item.text}
                  </p>
                </div>
              </div>
              <div className="col right">
                <div className="block image">
                  <img src={props.item.imgUrl} />
                </div>
              </div>
            </div>
        }
      </div>
    </SectionCasesStyles>
  )
}

export default SectionCases;
