import React from 'react';
import Hero from '../components/Hero';
import { HomeContainer } from '../styles/pages/Home';

function parallax() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector<HTMLElement>(".parallax");
  // You can adjust the 0.4 to change the speed
	const coords = (scrolled * 0.4) + 'px'
  parallax.style.transform = 'translateY(' + coords + ')';
};

const Home: React.FC = () => {

	return (
		<HomeContainer>
      <Hero />
      <section className='white-banner'>
        <div className='container'>
          <p>Aliamos pessoas, tecnologias e métodos para transformar a Gestão de Projetos das organizações</p>
        </div>
      </section>
      <section id='ms-partnership'>
        <div className='container'>
          <div className='image-block'>
            <img src={`https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}/>
          </div>
          <div className='partner-block'>
            <div className='partner-block-info'>
              
              <h2 className='info-title'>Microsoft<br />Partner</h2>
              
              <ul className='info-list'>
                <li>Gold lorem ipsum</li>
                <li>Gold lorem ipsum</li>
                <li>Silver lorem ipsum</li>
              </ul>
              
            </div>
          </div>
        </div>
      </section>
		</HomeContainer>
	);
  
};

export default Home;
