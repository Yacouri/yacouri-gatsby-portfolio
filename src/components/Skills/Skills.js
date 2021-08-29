import React from "react";
import { colors } from "../../global/colors";
import { Container, Row, SectionInfo } from "../../global/style";
import PageTitle from "../PageTitle/PageTitle";
import GeekProgrammer from "../../images/geek-programmer.png";
import { ServiceCardWrapper } from "./style";
import PinkBall from "../../images/pink-ball.png";
import GradientBall from "../../images/gradient-ball.png";
import PinkSpiral from "../../images/pink-spiral.png";
import Rectangles from "../../images/3d-rectangles.png";
import Card from "./Card";
import YellowLines from "../../images/yellow-lines.png";
import Reveal from "react-reveal-animation";

const Skills = () => {
  return (
    <Container id="skills" bgImage={YellowLines}>
      <section>
        <PageTitle title="Skills" color={colors.pink} />
        <Row gap100>
          <Reveal effect="fadeInUp">
            <SectionInfo>
              <img src={GeekProgrammer} alt="geek-programmer" />
            </SectionInfo>
          </Reveal>
          <Reveal effect="fadeInUp">
            <SectionInfo>
              <h2 className="title">SKills & Services</h2>
              <p className="caption">
                I will help you to take your business online <br />
                & i will lead you through the process while
                <br />
                growing your business.
              </p>
              <ServiceCardWrapper>
                <Card img={PinkBall} title="Static website development" />
                <Card img={PinkSpiral} title="Dynamic website development" />
                <Card img={Rectangles} title="User interface Design" />
                <Card img={GradientBall} title="User Experience" />
              </ServiceCardWrapper>
            </SectionInfo>
          </Reveal>
        </Row>
      </section>
    </Container>
  );
};

export default Skills;
