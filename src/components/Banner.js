import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ul {
    font-size: 2.4rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    ${(props) =>
      props.mode === "left"
        ? "align-items: flex-start"
        : "align-items: flex-end;"}
  }
  li {
    list-style: none;
  }
`;

const Banner = ({ children, height, mode }) => {
  return (
    <Container height={height} mode={mode}>
      {children}
    </Container>
  );
};

export default Banner;
