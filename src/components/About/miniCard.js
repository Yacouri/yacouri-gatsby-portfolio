import React from "react";
import { MiniCardWrapper } from "./style";

const MiniCard = ({ header, t1, t2, footer }) => {
  return (
    <MiniCardWrapper>
      <span>Contact</span>
      <h2>
        Social
        <br />
        networks
      </h2>
      <div>IG TW FB GIT</div>
    </MiniCardWrapper>
  );
};

export default MiniCard;
