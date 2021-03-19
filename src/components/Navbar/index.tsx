import React from "react";
import Logo from "../../assets/logo.svg";
import { NavbarContent } from "./NavbarStyles";
import INavbarProps from "../../interfaces/INavbarProps";

export const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
  return (
    <NavbarContent>
      <div className="nav-container container">
        <div className="logo">
          <Logo />
        </div>

        <div className="links-container">
          {
            props.links.map((link, index) => 
              <span className="nav-link" key={index}>
                <a href={link.url}>
                  {link.title}
                </a>
              </span>
            )
          }
        </div>
      </div>
    </NavbarContent>
  );
};

export default Navbar;
