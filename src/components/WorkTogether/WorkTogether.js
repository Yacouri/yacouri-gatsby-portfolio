import React from "react";
import { Container, Title } from "./style";
import GetInTouch from "../../images/get-in-touch.png";
import { Link } from "gatsby";
import { colors } from "../../global/colors";
import { Zoom } from "react-reveal-animation";

const WorkTogether = () => {
  return (
    <Container>
      <Zoom>
        <Title color={colors.black}>Let's work together</Title>
        <div className="wrapper">
          <div className="info">
            <h1>Take your business online.</h1>
            <p>
              Do you have a project idea? <br />
              Let me help you to take your business online
              <br />& increase your client base
            </p>
            <div className="contact-link">
              <Link to="#">Connect with me</Link>
            </div>
          </div>
          <div className="touch-img">
            <img src={GetInTouch} alt="get in touch with Yacouri" />
          </div>
        </div>
      </Zoom>
    </Container>
  );
};

export default WorkTogether;
