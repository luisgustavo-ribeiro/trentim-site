import React from 'react';
import ISectionWithShapeProps from '../../interfaces/ISectionWithShapeProps';
import { SectionWithShapeStyles } from './SectionWithShapeStyles';

const SectionWithShape:React.FC<ISectionWithShapeProps> = (props: ISectionWithShapeProps) => {

  const [dimensions, setDimensions] = React.useState({
    height: 0,
    width: 0,
  });

  React.useEffect(() => {

    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
  
    <SectionWithShapeStyles style={{backgroundColor: props.item.sectionBGColor}}>

      <div className="container">
        {dimensions.width > 768.99 && 
          <>
            {props.mediaPosition === "left" && 
              <div className="section-container" style={{gridTemplateColumns: "500px 1fr"}}>
                <div className="col left">
                <div className="media-w-shape">
                  <div className={`shape shape-image shape-${props.shapePosition} ${props.item.shapeName}`} style={{borderColor: props.item.shapeColor, zIndex: props.item.shapeZIndex}}></div>
                    <div className="media-container">
                      {props.mediaType === "img" && 
                        <img src={props.item.mediaUrl} style={{objectPosition: `${props.item.imageX ? props.item.imageX : "top"} ${props.item.imageY ? props.item.imageY : "left"}`, transform: `scale(${props.item.imageScale ? props.item.imageScale: ''})`}}/>
                      }
                      {props.mediaType === "video" && 
                        <iframe width="100%" height="290" src={`https://player.vimeo.com/video/${props.item.mediaUrl}?title=0&byline=0&portrait=0`}></iframe>
                      }
                    </div>
                  </div>
                </div>
                <div className="col right" style={{paddingRight: "80px"}}>
                  <div className="title" style={{ color: props.item.titleColor }}>
                    {props.item.title}
                  </div>
                  <div className="text" style={{color: props.item.textColor}}>
                    <p>{props.item.text}</p>
                  </div>
                </div>
              </div>
            }

            {props.mediaPosition === "right" && 
              <div className="section-container" style={{gridTemplateColumns: "1fr 500px"}}>
                <div className="col left" style={{paddingRight: "80px"}}>
                  <div className="title" style={{ color: props.item.titleColor }}>
                    {props.item.title}
                  </div>
                  <div className="text" style={{color: props.item.textColor}}>
                    <p>{props.item.text}</p>
                  </div>
                </div>
                <div className="col right">
                  <div className="media-w-shape">
                    <div className={`shape shape-image shape-${props.shapePosition} ${props.item.shapeName}`} style={{borderColor: props.item.shapeColor, zIndex: props.item.shapeZIndex}}></div>
                    <div className="media-container">
                      {props.mediaType === "img" && 
                        <img src={props.item.mediaUrl} style={{objectPosition: `${props.item.imageX ? props.item.imageX : "top"} ${props.item.imageY ? props.item.imageY : "right"}`, transform: `scale(${props.item.imageScale ? props.item.imageScale: ''})`}}/>
                      }
                      {props.mediaType === "video" && 
                        <iframe width="100%" height="290" src={`https://player.vimeo.com/video/${props.item.mediaUrl}?title=0&byline=0&portrait=0`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                    
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
          </>
        }

        {dimensions.width < 768.99 && 
          <div className="section-container mobile">
            <div className="block-media">
              <div className="media-w-shape">
                <div className={`shape shape-image shape-${props.shapePosition} ${props.item.shapeName}`} style={{borderColor: props.item.shapeColor, zIndex: props.item.shapeZIndex}}></div>
                <div className="media-container">
                  {props.mediaType === "img" && 
                    <img src={props.item.mediaUrl} style={{objectPosition: `${props.item.imageXMobile ? props.item.imageXMobile : "top"} ${props.item.imageYMobile ? props.item.imageYMobile : "left"}`, transform: `scale(${props.item.imageScaleMobile ? props.item.imageScaleMobile: ''})`}}/>
                  }
                  {props.mediaType === "video" && 
                    <iframe width="100%" height="100%" src={`https://player.vimeo.com/video/${props.item.mediaUrl}?title=0&byline=0&portrait=0`}></iframe>
                  }
                </div>
              </div>
            </div>
            <div className="block-text">
              <div className="title" style={{ color: props.item.titleColor }}>
                {props.item.title}
              </div>
              <div className="text" style={{color: props.item.textColor}}>
                <p>{props.item.text}</p>
              </div>
            </div>
        </div>
        }

      </div>

    </SectionWithShapeStyles>
    
  )
}

export default SectionWithShape;
