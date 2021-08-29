import React from "react";
import { colors } from "../../global/colors";
import { Container, Row, SectionInfo } from "../../global/style";
import PageTitle from "../PageTitle/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TomatoLines from "../../images/tomato-lines.png";
import { media } from "../../global/media";
import {
  faGithub,
  faTwitter,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import Yacouri from "../../images/yacouri.png";
import { Zoom } from "react-reveal-animation";

const About = () => {
  return (
    <Container id="about" bgColor={colors.lightYellow} bgImage={TomatoLines}>
      <section>
        <PageTitle title="About me" color={colors.yellow} />
        <Zoom>
          <Row gap100>
            <SectionInfo>
              <h2 className="title">Who am i & What i'm doing</h2>
              <p className="caption">
                Hello there, my name is Zouhir Yacouri 22 Years old <br />
                im a front end web developer <br />& self-taught Ui/Ux designer
                as well.
              </p>
              <p className="caption ">
                Currently i’m working as a freelancer <br />
                i help startups to take their businesses online <br />&
                assisting them to scale.
              </p>
              <h2 className="title-two">Social networks</h2>
              <div className="social-icons">
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
            </SectionInfo>
            <SectionInfo className="img-section">
              <img src={Yacouri} alt="Zouhir Yacouri" />
            </SectionInfo>
          </Row>
        </Zoom>
      </section>
    </Container>
  );
};

export default About;
