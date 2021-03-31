import React from 'react'
import Router from 'next/router';
import Cases from "../assets/data/cases";
import { CompanyCaseStyles } from '../styles/pages/CompanyCaseStyles';

const CompanyCase:React.FC = () => {

  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    const {asPath} = Router;

    setItem(Cases[`${asPath.split("=")[1]}`]);
    
  }, []);

  return (
    <CompanyCaseStyles>
      <div className="container col">
          {item && 
            item.map(c => 
              <div className="case-item-container">              
                {c.imagePosition === "left" && 
                  <>
                    <div className="block image">
                      <img src={c.imgUrl} alt=""/>
                    </div>
                    <div className="block info">
                      <span className="title">
                        {c.title}
                      </span>
                      <p>{c.text}</p>
                    </div>
                  </>
                }
                {c.imagePosition === "right" && 
                  <>
                    <div className="block info">
                      <span className="title">
                        {c.title}
                      </span>
                      <p>{c.text}</p>
                    </div>
                    <div className="block image">
                      <img src={c.imgUrl} alt=""/>
                    </div>
                  </>
                }
              </div>
            )
          }
      </div>
    </CompanyCaseStyles>
  )
}

export default CompanyCase;
