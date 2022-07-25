import React from "react";
import styled from "styled-components";
import colors from "../../lib/colors.json";

const StyledInput = styled.input`
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

const Button = ({ value, onChange, placeholder }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></StyledInput>
  );
};

export default Button;
