import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {

  const links = [
    { title: 'Cases',        url: 'http://www.google.com' },
    { title: 'Soluções',     url: 'http://www.google.com' },
    { title: 'Seguimentos',  url: 'http://www.google.com' },
    { title: 'Carreiras',    url: 'http://www.google.com' },
    { title: 'Blog',         url: 'http://www.google.com' },
    { title: 'Cliente',      url: 'http://www.google.com' },
  ]

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar links={links}/>
		</div>
	);
};

export default Home;
