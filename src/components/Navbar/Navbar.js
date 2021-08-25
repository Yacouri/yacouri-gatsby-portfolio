import { Link } from "gatsby";
import React, { useState } from "react";
import { LinksWrapper, Logo, Mailto, Nav } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [display, setDisplay] = useState(true);
  const [icon, setIcon] = useState(faBars);
  const toggleMenu = () => {
    setDisplay(!display);
    return display ? setIcon(faBars) : setIcon(faTimes);
  };
  return (
    <Nav>
      <Logo>
        <h1>Yacouri.</h1>
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
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#skills">Skills</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="#clients">Clients</Link>
          </li>
          <li>
            <Link to="#shared-projects">Shared project</Link>
          </li>
        </ul>
      </LinksWrapper>
      <Mailto visibility={display}>
        <a href="mailto:co.yacouri@gmail.com">co.yacouri@gmail.com</a>
      </Mailto>
    </Nav>
  );
};

export default Navbar;
