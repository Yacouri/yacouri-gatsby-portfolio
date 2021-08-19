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
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Skills</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Shared project</Link>
            </li>
          </ul>
        </LinksWrapper>

        <Mailto>
          <a href="mailto:co.yacouri@gmail.com">Contact</a>
        </Mailto>
      </Nav>
    </div>
  );
};

export default Navbar;
