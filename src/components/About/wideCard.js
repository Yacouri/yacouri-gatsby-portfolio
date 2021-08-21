import React from "react";
import { WideCardWrapper } from "./style";
import RobotYoga from '../../images/yoga-robot.png';

const WideCard = ({ header, t1, t2, footer }) => {
  return (
    <WideCardWrapper>
      <div>
        <h1>About me</h1>
        <p>
          Hello there, <br/>
          my name is Zouhir Yacouri 22 Years old<br/>
          im a front end web developer <br/>
          & self-taught Ui/Ux designer as well.
        </p>
      </div>
      <div className="robot-img-wrapper">
        <img src={RobotYoga} alt="robot-yoga"/>
      </div>
    </WideCardWrapper>
  );
};

export default WideCard;
