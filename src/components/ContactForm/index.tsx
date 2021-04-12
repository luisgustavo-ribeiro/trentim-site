import React from "react";
import { ContactFormStyles } from "./ContactFormStyles";

const ContactForm = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [numberOfEmployees, setNumberOfEmployees] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  function checkValue(e) {
    if (e.target.value !== "") e.target.labels[0].classList.add("has-value");
    if (
      e.target.value === "" &&
      e.target.labels[0].classList.value === "has-value"
    )
      e.target.labels[0].classList.remove("has-value");
  }

  function handleNumeroDeFuncionarios(e) {
    
    const index = e.nativeEvent.target.selectedIndex;
    const label = e.nativeEvent.target[index].text;

    setNumberOfEmployees(label);
    console.log(label);
  }

  return (
    <ContactFormStyles>
      <div className="contact-form">
        <div className="form-info">
          <div className="title-area">
            <span className="shape chat"></span>
            <span className="title">contato</span>
          </div>
          <div className="subtitle">
            <span>
              precisando de ajuda com a sua <br /> gestão de projetos?
            </span>
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
              onChange={(e) => {
                checkValue(e);
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="txtEmail">email</label>
            <input
              type="text"
              id="txtEmail"
              onChange={(e) => {
                checkValue(e);
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numEmployees">número de funcionários</label>
            <select id="numEmployees" onChange={(e) => {
                checkValue(e);
                handleNumeroDeFuncionarios(e)
              }}>
              <option value=""></option>
              <option value="1">1 a 10</option>
              <option value="2">10 a 50</option>
              <option value="3">50 a 100</option>
              <option value="4">100 a 500</option>
              <option value="5">mais de 500</option>
            </select>

            <span className="error-msg">Digite um número válido</span>
          </div>
          <div className="form-group">
            <label htmlFor="txtPhone">telefone</label>
            <input
              type="text"
              id="txtPhone"
              onChange={(e) => {
                checkValue(e);
                setPhone(e.target.value);
              }}
            />
          </div>

          <div id="contactPreference">
            <div className="title">forma de contato preferencial</div>
            <ul>
              <li>
                <div className="form-group checkbox">
                  <input
                    type="checkbox"
                    className="styled-checkbox"
                    id="prefEmail"
                  />
                  <label htmlFor="prefEmail">email</label>
                </div>
              </li>
              <li>
                <div className="form-group checkbox">
                  <input
                    type="checkbox"
                    className="styled-checkbox"
                    id="prefPhone"
                  />
                  <label htmlFor="prefPhone">telefone</label>
                </div>
              </li>
              <li>
                <div className="form-group checkbox">
                  <input
                    type="checkbox"
                    className="styled-checkbox"
                    id="prefTeams"
                  />
                  <label htmlFor="prefTeams">teams</label>
                </div>
              </li>
            </ul>
          </div>

          <div className="form-group">
            <label htmlFor="txtSubject">assunto</label>
            <input
              type="text"
              id="txtSubject"
              onChange={(e) => {
                checkValue(e);
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="txtMessage">como podemos ajudar?</label>
            <textarea
              rows={8}
              id="txtMessage"
              onChange={(e) => {
                checkValue(e);
                setMessage(e.target.value);
              }}
            />
          </div>

          <input className="send-button" type="submit" value="enviar" />
        </form>
      </div>
    </ContactFormStyles>
  );
};

export default ContactForm;
