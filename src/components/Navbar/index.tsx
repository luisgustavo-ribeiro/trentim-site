import React from "react";
import Logo from "../../assets/logo.svg";
import { Navigation } from "./NavbarStyles";
import INavbarProps from "../../interfaces/INavbarProps";
import useOutsideClick from "../../hooks/useOutsideClick";

export const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
  const [dimensions, setDimensions] = React.useState({
    height: 0,
    width: 0,
  });

  const ref = React.useRef();

  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);

  function toggleMobileNav() {

    setMenuToggle(!menuToggle);

    console.log(menuToggle);

    if (!menuToggle) {
      document.querySelector("#pageContent").classList.add("menu-open");
      document.querySelector("#nav").classList.add("menu-open");
      document.querySelector(".nav-toggle").classList.add("menu-open");
    }

    if(menuToggle) {
      document.querySelector("#pageContent").classList.remove("menu-open");
      document.querySelector("#nav").classList.remove("menu-open");
      document.querySelector(".nav-toggle").classList.remove("menu-open");
    }
  }

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

  useOutsideClick(ref, () => {
    if(menuToggle)
      toggleMobileNav();
  });
  
  return (
    <>
      <button className="nav-toggle" onClick={() => toggleMobileNav()} data-scroll-sticky>
        <span className="shape square"></span>
      </button>
      <Navigation id="nav" {...(dimensions.width < 768 ? 'data-scroll-sticky': true)} ref={ref}>
        
        <div className="container">
          <div className="nav-container">
            <div className="logo">
              <a href="/">
                <Logo />
              </a>
            </div>

            <div className="links-container">
              {props.links.map((link, index) => (
                <span className="nav-link" key={index}>
                  <a href={link.url}>{link.title}</a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Navigation>
    </>
  );
};

export default Navbar;
