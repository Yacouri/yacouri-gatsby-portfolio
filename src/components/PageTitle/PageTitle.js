import React from "react";
import { Line, PageTitleWrapper, Title } from "./style";

const PageTitle = ({ title, color }) => {
  return (
    <PageTitleWrapper>
      <Line bgColor={color} />
      <Title>{title}</Title>
    </PageTitleWrapper>
  );
};

export default PageTitle;
