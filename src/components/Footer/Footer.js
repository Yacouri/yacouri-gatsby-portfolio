import { Link } from "gatsby";
import React from "react";
import { FooterWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { media } from "../../global/media.js";
import {
  faGithub,
  faTwitter,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-section">
        <h1>Yacouri</h1>
        <p>
          Front end web developer
          <br />& self-taught Ui/Ux designer
        </p>
      </div>
      <div className="footer-section">
        <h1>Menu</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="#">Projects</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/#clients">Clients</Link>
          </li>
          <li>
            <Link to="#shared-projects">Shared projects</Link>
          </li>

          <li>
            <Link to="#skills">Skills</Link>
          </li>
          <li>
            <a href="mailto:co.yacouri@gmail.com">Contact me</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h1>Social network</h1>
        <div className="media-icons">
          <a href={media.behance} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faBehance} />
          </a>
          <a href={media.dribbble} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
          <a href={media.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={media.twitter} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright © 2021 Zouhir Yacouri. <br />
          made with <span>❤️</span> by
          <a href={media.twitter} target="_blank" rel="noreferrer">
            Yacouri
          </a>
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
