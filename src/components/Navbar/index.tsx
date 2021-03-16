import React from "react";
import Logo from "../../assets/logo.svg";
import { NavbarContent } from "./NavbarStyles";
import INavbarProps from "../../interfaces/props/INavbarProps";

export const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
  return (
    <NavbarContent>
      <div className="nav-container">
        <div className="logo">
          <Logo />
        </div>

        <div className="links-container">
          {props.links.map((link) => (
            <span className="nav-link">
              <a href={link.url}>
                {link.title}
              </a>
            </span>
          ))}
        </div>
      </div>
    </NavbarContent>
  );
};

export default Navbar;
