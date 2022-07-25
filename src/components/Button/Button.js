import React from "react";
import styled from "styled-components";
import colors from "../../lib/colors.json";

const StyledButton = styled.button`
  height: 2.4rem;
  width: 6rem;
  background-color: ${colors.blue};
  outline: none;
  border: none;
  font-size: 1.2rem;
  color: whitesmoke;
  border-radius: 10px;
  @media screen and (min-width: 1024px) {
    cursor: pointer;
  }
`;

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
