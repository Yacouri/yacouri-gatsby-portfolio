import React from "react";
import { Container, Row, SectionInfo } from "../../global/style";
import { ButtonsWrapper } from "./style";
import WorkingDesk from "../../images/working-desk.png";
import Reveal from "react-reveal-animation";

const Home = () => {
  return (
    <Container h80 mt100>
      <section>
        <Row>
          <Reveal effect="fadeInUp">
            <SectionInfo>
              <h1>
                <span>Front end</span>
                <br />
                web developer
                <br />& Ui/Ux designer
              </h1>
              <p className="home-caption">
                Looking forward to build a good career
                <br />
                and making great experiences.
              </p>
              <ButtonsWrapper>
                <button className="download-cv">Download CV</button>
                <button className="discover">Discover</button>
              </ButtonsWrapper>
            </SectionInfo>
          </Reveal>
          <Reveal effect="fadeInUp">
          <SectionInfo className="img-section">
            <img src={WorkingDesk} alt="working-desktop" />
          </SectionInfo>
          </Reveal>
        </Row>
      </section>
    </Container>
  );
};

export default Home;
