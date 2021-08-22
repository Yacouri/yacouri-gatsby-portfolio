import styled from "styled-components";
import { colors } from "../../global/colors";

export const ServiceCardWrapper = styled.div`
  margin-top: 70px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const ServiceCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
  background-color: ${colors.lightYellow};
  border-radius: 10px;
  padding: 15px;
  img {
    width: 45px;
  }
`;
