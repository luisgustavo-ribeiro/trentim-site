import React from 'react';
import { ProcessStyle } from './ProcessStyle';

import ProcessDivider from '../../assets/img/process_divider.svg';

const process = [
  {
    form: "square",
    text: "Pensando em organizações que sofrem com prazos e orçamentos de projetos desenvolvemos uma abordagem baseada no nível de maturidade. Tornamos a gestão de projetos mais ágil e eficiente criando ciclos de melhoria contínua por meio de tecnologia, capacitação, melhoria de processos e aplicação de metodologias."
  },
  {
    form: "postIt",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestias quasi, nulla magnam assumenda delectus commodi nostrum sint dolore nisi!"
  },
  {
    form: "lemon",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusamus harum, exercitationem nulla sapiente soluta molestias molestiae beatae aliquam architecto, dolores perferendis officia, cupiditate rem!"
  },
  {
    form: "chat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad sequi, harum earum corporis totam dignissimos similique pariatur molestiae architecto dolore nihil porro vitae, maxime dolorem quas corrupti illo facere?"
  },
  {
    form: "circle",
    text: "Pensando em organizações que sofrem com prazos e orçamentos de projetos desenvolvemos uma abordagem baseada no nível de maturidade. Tornamos a gestão de projetos mais ágil e eficiente criando ciclos de melhoria contínua por meio de tecnologia, capacitação, melhoria de processos e aplicação de metodologias."
  },
]

const ProcessSection: React.FC = () => {

  const [processActiveItem, setProcessActiveItem] = React.useState<number>(0);

  const showProcess = (index: number) => {
    processActiveItem !== index && setProcessActiveItem(index);
  };

  return (
    <ProcessStyle id='process'>

      <div className="container col">
        <div className="section-title">
          <span className="form postIt"></span>
          <span style={{padding: '0 0 12px'}}>nosso processo</span>
        </div>
        <div className="section-subtitle">conheça as etapas do nosso processo de transformação</div>
        <div className="process-forms">
          <div className='forms-container'>
            {process.map((item, index) =>
              <>
                <div className={`form ${item.form} ${processActiveItem === index ? 'open' : ''}`} onClick={() => showProcess(index)}></div>
                {index < process.length - 1 ? <span style={{display: 'flex'}}> <ProcessDivider /> </span> : ''}
              </>
            )}            
          </div>                          
          <div className='text-container'>
            {process.map((item, index) =>             
              <div className={`text ${processActiveItem === index ? 'open' : ''}`}>
                <p>{item.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>

    </ProcessStyle>
  )
}

export default ProcessSection

