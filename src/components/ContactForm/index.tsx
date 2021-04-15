import React from "react";
import { ContactFormStyles } from "./ContactFormStyles";

const ContactForm = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [numberOfEmployees, setNumberOfEmployees] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  
  const [emailPref, setEmailPref] = React.useState<string>("");
  const [phonePref, setPhonePref] = React.useState<string>("");
  const [teamsPref, setTeamsPref] = React.useState<string>("");

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
  } 

  function clearForm() {
    
    document.forms[0].querySelectorAll("input[type='text']").forEach( i => {
      const el = i as HTMLInputElement;
      el.value = "";
    });

    document.forms[0].querySelectorAll("input[type=checkbox]").forEach( i => {
      const el = i as HTMLInputElement;
      el.checked ? el.checked = false : '';
    });

    document.forms[0].querySelector("textarea").value = "";
    
    const sel = document.forms[0].querySelector("#numEmployees") as HTMLSelectElement;
    sel.value = "0";

    setName("");
    setEmail("");
    setNumberOfEmployees("");
    setPhone("");
    setSubject("");
    setMessage("");

    setTimeout(() => {
      document.querySelector(".form-message").innerHTML = "";
      
      document.forms[0].querySelectorAll("label").forEach( i => {
        i.classList.remove("has-value");
      });

    }, 1000);

  }

  function sendFormInfo(e) {

    e.preventDefault();

    const data = { 
      name: name,
      email: email,
      numberOfEmployees: numberOfEmployees,
      preferredContactForm: `${emailPref}, ${phonePref}, ${teamsPref}`,
      phone: phone,
      subject: subject,
      message: message,
     };

    fetch('https://prod-18.brazilsouth.logic.azure.com:443/workflows/9eee2a6170fe4747a7c7023774c1b3e6/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=7q7aeJs7rkxOWukIQdrCbvWCq1Ge5He3s-_Ics7Qdu8', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(() => {
      document.querySelector(".form-message").innerHTML = "formulário enviado com sucesso!"
      clearForm();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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
        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="txtName">nome</label>
            <input type="text" id="txtName" onChange={(e) => { checkValue(e); setName(e.target.value); }} />
          </div>
          <div className="form-group">
            <label htmlFor="txtEmail">email</label>
            <input type="text" id="txtEmail" onChange={(e) => { checkValue(e); setEmail(e.target.value); }} />
          </div>
          <div className="form-group">
            <label htmlFor="numEmployees">número de funcionários</label>
            <select id="numEmployees" onChange={(e) => { checkValue(e); handleNumeroDeFuncionarios(e); }}>
              <option value="0"></option>
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
            <input type="text" id="txtPhone" onChange={(e) => { checkValue(e); setPhone(e.target.value); }}/>
          </div>

          <div id="contactPreference">
            <div className="title">forma de contato preferencial</div>
            <ul>
              <li>
                <div className="form-group checkbox">
                  <input type="checkbox" className="styled-checkbox" id="prefEmail" onChange={(e) => e.target.checked ? setEmailPref(e.target.labels[0].innerText) : setEmailPref("")}/>
                  <label htmlFor="prefEmail">email</label>
                </div>
              </li>
              <li>
                <div className="form-group checkbox">
                  <input type="checkbox" className="styled-checkbox" id="prefPhone" onChange={(e) => e.target.checked ? setPhonePref(e.target.labels[0].innerText) : setPhonePref("")}/>
                  <label htmlFor="prefPhone">telefone</label>
                </div>
              </li>
              <li>
                <div className="form-group checkbox">
                  <input type="checkbox" className="styled-checkbox" id="prefTeams" onChange={(e) => e.target.checked ? setTeamsPref(e.target.labels[0].innerText) : setTeamsPref("")}/>
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
              rows={5}
              id="txtMessage"
              onChange={(e) => {
                checkValue(e);
                setMessage(e.target.value);
              }}
            />
          </div>

          <button className="send-button" onClick={(e) => sendFormInfo(e)}>enviar</button>
          <span className="form-message"></span>
        </form>
      </div>
    </ContactFormStyles>
  );
};

export default ContactForm;
