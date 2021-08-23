import { Link } from "gatsby";
import React from "react";
import { LinksWrapper, Logo, Mailto, Nav } from "./style";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Logo>
          <h1>Yacouri.</h1>
        </Logo>

        <LinksWrapper>
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
              <Link to="#shared-projects">Shared project</Link>
            </li>
          </ul>
        </LinksWrapper>

        <Mailto>
          <a href="mailto:co.yacouri@gmail.com">co.yacouri@gmail.com</a>
        </Mailto>
      </Nav>
    </div>
  );
};

export default Navbar;
