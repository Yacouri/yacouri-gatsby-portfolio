import React from "react";
import { colors } from "../../global/colors";
import { Container, Row, SectionInfo } from "../../global/style";
import TomatoLines from "../../images/tomato-lines.png";
import Shared from "../../images/shared-projects.png";
import PageTitle from "../PageTitle/PageTitle";
import { Projects } from "./style";
import Project from "./Project";
import {
  faDribbble,
  faBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SharedProjects = () => {
  return (
    <Container
      id="shared-projects"
      bgImage={TomatoLines}
      bgColor={colors.lightTomato}
    >
      <section>
        <PageTitle title="Shared projects" color={colors.tomato} />
        <Row gap100>
          <SectionInfo>
            <img src={Shared} alt="shared projects" />
          </SectionInfo>
          <SectionInfo>
            <h2 className="title">Dev & Design</h2>
            <p className="caption">
              Here i share open sourced development projects <br />& designs on
              different platforms.
            </p>
            <Projects>
              <Project
                department="Design"
                media="Dribbble"
                link="https://dribbble.com/yacouri"
                icon={faDribbble}
                bgColor={colors.dribbble}
                color={colors.lightDribbble}
              />
              <Project
                department="Design"
                media="Behance"
                link="https://www.behance.net/zouhiryacouri"
                icon={faBehance}
                bgColor={colors.behance}
                color={colors.lightBehance}
              />
              <Project
                department="Design"
                media="Dribbble"
                link="https://github.com/yacouri"
                icon={faGithub}
                bgColor={colors.github}
                color={colors.lightGithub}
              />
            </Projects>
          </SectionInfo>
        </Row>
      </section>
    </Container>
  );
};

export default SharedProjects;
