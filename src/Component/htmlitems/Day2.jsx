import React from "react";
import styled from "@emotion/styled";

export default function Day2() {
  return (
    <WrapperDiv>
      <H1>Day2</H1>
      <p>안녕하세요</p>
    </WrapperDiv>
  );
}
const WrapperDiv = styled.div`
  border: 3px solid green;
  padding: 30px 30px;
  text-align: start;
`;

const H1 = styled.h1`
  margin: 0 0 30px;
`;
