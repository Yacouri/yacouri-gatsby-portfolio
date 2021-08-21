import React from "react";
import { colors } from "../../global/colors";
import { Container } from "../../global/style";
import PageTitle from "../PageTitle/PageTitle";
import MiniCard from "./miniCard";
import WideCard from "./wideCard";
import { AboutCardsWrapper } from "./style";

const About = () => {
  return (
    <Container bgColor={colors.lightYellow}>
      <section>
        <PageTitle title="About me" color={colors.yellow} />
        <AboutCardsWrapper>
          <div className="one-four">
            <MiniCard />
            <WideCard />
          </div>
          <div className="four-one">
            <WideCard />
            <MiniCard />
          </div>
        </AboutCardsWrapper>
      </section>
    </Container>
  );
};

export default About;
