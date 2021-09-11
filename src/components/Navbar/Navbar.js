import { Link } from "gatsby";
import React, { useState } from "react";
import { LinksWrapper, Logo, Mailto, Nav, Theming } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Moon, Sun } from "react-feather";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const [icon, setIcon] = useState(faBars);
  const [themeIcon, setThemeIcon] = useState()
  const toggleMenu = () => {
    setDisplay(!display);
    return display ? setIcon(faBars) : setIcon(faTimes);
  };
  // const toggleTheme = () => {

  // };
  return (
    <Nav>
      <Logo>
        <h1>
          <Link to="/">
            Yacouri<span>.</span>
          </Link>
        </h1>
        <div className="menu">
          <FontAwesomeIcon icon={icon} onClick={() => toggleMenu()} />
        </div>
      </Logo>
      <LinksWrapper visibility={display}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#skills">Skills</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/#clients">Clients</Link>
          </li>
          <li>
            <Link to="/#shared-projects">Shared project</Link>
          </li>
        </ul>
      </LinksWrapper>
      <Theming>
        <Moon strokeWidth="1.5" />
        <span>Dark</span>
      </Theming>
    </Nav>
  );
};

export default Navbar;
