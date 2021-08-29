import React from "react";
import { Container, Row, SectionInfo } from "../../global/style";
import { ButtonsWrapper } from "./style";
import WorkingDesk from "../../images/working-desk.png";
import { Zoom } from "react-reveal-animation";
import { Link } from "gatsby";
import CV from '../../pdf/Zouhir_Yacouri_CV.pdf'

const Home = () => {
  return (
    <Container h80 mt100>
      <section>
        <Zoom>
          <Row>
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
                <a href={CV} className="download-cv" download>Download CV</a>
                <Link to="#about" className="discover">Discover</Link>
              </ButtonsWrapper>
            </SectionInfo>
            <SectionInfo className="img-section">
              <img src={WorkingDesk} alt="working-desktop" />
            </SectionInfo>
          </Row>
        </Zoom>
      </section>
    </Container>
  );
};

export default Home;
