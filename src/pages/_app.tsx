import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme'; 
import Navbar from '../components/Navbar';

const links = [
  { title: 'Cases',        url: 'http://www.google.com' },
  { title: 'Soluções',     url: 'http://www.google.com' },
  { title: 'Seguimentos',  url: 'http://www.google.com' },
  { title: 'Carreiras',    url: 'http://www.google.com' },
  { title: 'Blog',         url: 'http://www.google.com' },
  { title: 'Cliente',      url: 'http://www.google.com' },
];

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
    <ThemeProvider theme={theme}>
      <Navbar links={links}/>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp; 
