import React from "react";
import { colors } from "../../global/colors";
import { Container, Row, SectionInfo } from "../../global/style";
import VioletLines from "../../images/violet-lines.png";
import VrIcons from "../../images/vr-icons.png";
import PageTitle from "../PageTitle/PageTitle";
import { StartupWrapper } from "./style";
import Leavik from "../../images/leavik.png";
import Decobois from "../../images/decobois.png";
import Jobathome from "../../images/jobathome.png";
import Herseyshop from "../../images/herseyshop.png";

const Startups = () => {
  return (
    <Container id="clients" bgImage={VioletLines} bgColor={colors.lightViolet}>
      <section>
        <PageTitle title="Startups" color={colors.primary} />
        <Row>
          <SectionInfo>
            <h2 className="title">Worked with</h2>
            <p className="caption">
              Here are some satisfied clients that <br />i have been working
              with ⭐
            </p>
            <StartupWrapper>
              <div>
                <img src={Leavik} alt="leavik" />
              </div>
              <div>
                <img src={Decobois} alt="decobois" />
              </div>
              <div>
                <img src={Jobathome} alt="jobathome" />
              </div>
              <div>
                <img src={Herseyshop} alt="herseyshop" />
              </div>
            </StartupWrapper>
          </SectionInfo>
          <SectionInfo className="img-section">
            <img src={VrIcons} alt="Illustration" />
          </SectionInfo>
        </Row>
      </section>
    </Container>
  );
};

export default Startups;
