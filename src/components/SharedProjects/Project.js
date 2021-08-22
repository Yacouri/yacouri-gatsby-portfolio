import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H2, ProjectWrapper } from "./style";

const Project = ({ department, media, link, icon, bgColor, color }) => {
  return (
    <ProjectWrapper bgColor={bgColor}>
      <span>{department}</span>
      <H2 txtColor={color}>
        Shared <br />
        on {media}
      </H2>
      <div className="media-info">
        <div>
          <a href={link} target="_blank" rel="noreferrer">
            See all
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default Project;
