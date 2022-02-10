/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { mainMenuBackgroundClick, mainMenuBackground } from "../style/theme";

export default function Menu() {
  return (
    <WrapperDiv>
      <nav>
        <Ul>
          <li>
            <NavLink css={cssNavLink} to='/'>
              Start
            </NavLink>
          </li>
          <li>
            <NavLink css={cssNavLink} to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink css={cssNavLink} to='/contact'>
              Contact
            </NavLink>
          </li>
        </Ul>
      </nav>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  border: 1px solid olive;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const cssNavLink = css`
  padding: 20px 30px;
  display: inline-block;
  font-weight: bold;
  ${mainMenuBackground}
  &.active {
    ${mainMenuBackgroundClick}
  }
`;
