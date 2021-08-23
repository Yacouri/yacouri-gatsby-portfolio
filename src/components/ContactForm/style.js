import styled from "styled-components";
import { colors } from "../../global/colors";

export const FormContainer = styled.div`
  margin-top: 50px;
  width: 80%;
  form {
    display: grid;
    grid-auto-flow: row;
  }
  button {
    width: 100%;
    margin-top: 20px;
    background-color: ${colors.github};
    color: ${colors.white};
    border-radius: 12px;
    border: none;
    padding: 18px;
    outline: none;
    cursor: pointer;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const InputField = styled.input`
  margin-top: 20px;
  padding: 18px 25px;
  border-radius: 12px;
  color: ${colors.black};
  border: 1px solid ${colors.pink};
  font-size: 14px;
  font-weight: 500;
  transition: 0.5s;
  background-color: ${colors.lightYellow};
  &::placeholder {
    color: ${colors.secondary};
  }
  &:focus {
    transform: scale(1.1);
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  font-family: "Noto Sans JP";
  max-width: 90%;
  margin-top: 20px;
  padding: 18px 25px;
  border-radius: 12px;
  color: ${colors.black};
  border: 1px solid ${colors.pink};
  font-size: 14px;
  transition: 0.5s;
  background-color: ${colors.lightYellow};
  &::placeholder {
    color: ${colors.secondary};
  }
  &:focus {
    transform: scale(1.1);
    outline: none;
  }
`;
