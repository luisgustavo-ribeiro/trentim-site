import React from "react";
import { ContactStyle } from "./ContactStyles";

const Contact: React.FC = () => {

  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [numberOfEmployees, setNumberOfEmployees] = React.useState<number>(0);
  const [phone, setPhone] = React.useState<string>('');
  const [subject, setSubject] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  
  const checkIfHasValue = (e) => {
    if (e.target.value !== '') e.target.labels[0].classList.add('has-value');
    if (e.target.value === '' && e.target.labels[0].classList.value === 'has-value') e.target.labels[0].classList.remove('has-value');
  }

  return (
    <ContactStyle id="contact">
      <div className="container">
        <div className="contact-form">
          <div className="form-info">
            <div className="title-area">
              <span className="form chat"></span>
              <span className="title">contato</span>
            </div>
            <div className="subtitle">
              <span>precisando de ajuda com a sua <br/> gestão de projetos?</span>
            </div>
            <div className="extra">
              <span>Entre em contato conosco!</span>
            </div>
          </div>
          <form action="">
            <div className="form-group">
              <label htmlFor="txtName">nome</label>
              <input 
                type="text" 
                id="txtName" 
                onChange={ e => {
                  checkIfHasValue(e);
                  setName(e.target.value);
                }}/>
            </div>
            <div className="form-group">
              <label htmlFor="txtEmail">email</label>
              <input 
                type="text" 
                id="txtEmail"
                onChange={ e => {
                  checkIfHasValue(e);
                  setEmail(e.target.value);
                }}/>
            </div>
            <div className="form-group">
              <label htmlFor="numEmployees">número de funcionários</label>
              <input 
                type="text" 
                id="numEmployees"
                onChange={ e => {
                  checkIfHasValue(e);
                  
                  const number = parseFloat(e.target.value);

                  if(!isNaN(number)) 
                    setNumberOfEmployees(number);
                  
                  if(!isNaN(number) && e.target.nextElementSibling.classList.value.includes('show-error')) {
                    setNumberOfEmployees(number);
                    e.target.nextElementSibling.classList.remove('show-error');
                  }

                  if (isNaN(number) && e.target.value !== "")
                    e.target.nextElementSibling.classList.add('show-error');
                  
                }}/>

                <span className="error-msg">Digite um número válido</span>
            </div>
            <div className="form-group">
              <label htmlFor="txtPhone">telefone</label>
              <input 
                type="text" 
                id="txtPhone" 
                onChange={e => { 
                  checkIfHasValue(e);
                  setPhone(e.target.value);
                }}/>
            </div>

            {/* checkboxes */}

            <div className="form-group">
              <label htmlFor="txtSubject">assunto</label>
              <input 
                type="text" 
                id="txtSubject"
                onChange={e => { 
                  checkIfHasValue(e);
                  setSubject(e.target.value);
                }}/>
            </div>
            <div className="form-group">
              <label htmlFor="txtMessage">como podemos ajudar?</label>
              <input 
                type="text" 
                id="txtMessage"
                onChange={e => { 
                  checkIfHasValue(e);
                  setMessage(e.target.value);
                }}/>
            </div>

            <input className='send-button' type="submit" value="enviar"/>
          </form>
        </div>
        <div className="contact-info">
          <div className="title-area">
            <span className="form person"></span>
            <span className="title">vagas</span>
          </div>
          <span className="subtitle">Seja a transformação, venha para a Trentim!</span>
          <button className="btn-work">vagas</button>
        </div>
      </div>
    </ContactStyle>
  );
};

export default Contact;