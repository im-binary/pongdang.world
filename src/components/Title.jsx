import styled from "@emotion/styled";
import React from "react";
import { mainTitleColor } from "../style/theme";

export default function Title() {
  return <H1>PONGDANG</H1>;
}

const H1 = styled.h1`
  padding: 20px 0;
  letter-spacing: 30px;
  font-size: 50px;
  border: 1px solid olive;
  ${mainTitleColor};
`;
