import React from 'react';
import ISectionWithShapeProps from '../../interfaces/ISectionWithShapeProps';
import { SectionWithShapeStyles } from './SectionWithShapeStyles';

const SectionWithShape:React.FC<ISectionWithShapeProps> = (props: ISectionWithShapeProps) => {
  return (
    <>
      
        <SectionWithShapeStyles style={{backgroundColor: props.item.sectionBGColor}}>

          <div className="container">

            {props.item.imagePosition === "left" && 
              <div className="section-container" style={{gridTemplateColumns: "500px 1fr"}}>
                <div className="col left">
                <div className="img-w-shape">
                    <div className={`shape shape-image shape-left ${props.item.shapeName}`} style={{borderColor: props.item.shapeColor, zIndex: props.item.shapeZIndex}}></div>
                    <div className="img-container">
                    <img src={props.item.image} style={{objectPosition: `${props.item.imageX ? props.item.imageX : "top"} ${props.item.imageY ? props.item.imageY : "left"}`, transform: `scale(${props.item.imageScale ? props.item.imageScale: ''})`}}/>
                    </div>
                  </div>
                </div>
                <div className="col right" style={{paddingRight: "80px"}}>
                  <div className="title" style={{ color: props.item.titleColor }}>
                    {props.item.title}
                  </div>
                  <div className="text" style={{color: props.item.textColor}}>
                    {props.item.text}
                  </div>
                </div>
              </div>
            }

            {props.item.imagePosition === "right" && 
              <div className="section-container" style={{gridTemplateColumns: "1fr 500px"}}>
                <div className="col left" style={{paddingRight: "80px"}}>
                  <div className="title" style={{ color: props.item.titleColor }}>
                    {props.item.title}
                  </div>
                  <div className="text" style={{color: props.item.textColor}}>
                    {props.item.text}
                  </div>
                </div>
                <div className="col right">
                  <div className="img-w-shape">
                    <div className={`shape shape-image shape-right ${props.item.shapeName}`} style={{borderColor: props.item.shapeColor, zIndex: props.item.shapeZIndex}}></div>
                    <div className="img-container">
                      <img src={props.item.image} style={{objectPosition: `${props.item.imageX ? props.item.imageX : "top"} ${props.item.imageY ? props.item.imageY : "right"}`, transform: `scale(${props.item.imageScale ? props.item.imageScale: ''})`}}/>
                    </div>
                  </div>
                </div>
              </div>
            }

          </div>

        </SectionWithShapeStyles>
      
    </>
  )
}

export default SectionWithShape;
