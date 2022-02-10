import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "@emotion/styled";

export default function AboutPage() {
  return (
    <WrapperDiv>
      <h1 style={{ display: "none" }}>About</h1>
      <nav>
        <Ul>
          <Li>
            <StyledNavLink to='html'>HTML</StyledNavLink>
          </Li>
          <Li>
            <StyledNavLink to='js'>JS</StyledNavLink>
          </Li>
          <Li>
            <StyledNavLink to='react'>React</StyledNavLink>
          </Li>
        </Ul>
      </nav>
      <Outlet />
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  display: flex;
`;

const Ul = styled.ul`
  width: 150px;
`;

const Li = styled.li`
  border: 1px solid tomato;
`;

const StyledNavLink = styled(NavLink)`
  border: 1px solid pink;
  display: block;
  padding: 20px 0;
`;
