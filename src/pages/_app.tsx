import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SmoothScrollProvider } from "../contexts/SmoothScrollContext";

import "../styles/fabric-icons.css";

const links = [
  { title: "Cases", url: "/cases" },
  { title: "Soluções", url: "/solucoes" },
  // { title: "Seguimentos", url: "/" },
  { title: "Carreiras", url: "/carreiras" },
  // { title: "Blog", url: "/" },
  // { title: "Cliente", url: "/" },
];

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div data-scroll-container>
      <ThemeProvider theme={theme} data-scroll-section>
        <Navbar links={links} />
        <GlobalStyle />
        <SmoothScrollProvider options={{ smooth: true, multiplier: 1 }}>
          <div id="pageContent">
            <Component {...pageProps} />
          </div>
        </SmoothScrollProvider>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
