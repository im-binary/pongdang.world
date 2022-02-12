import { css } from "@emotion/react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { mainMenuBackgroundClick, mainMenuBackground } from "../../style/theme";

export default function StudyLogPage() {
  return (
    <WrapperDiv>
      <h1 style={{ display: "none" }}>About</h1>
      <nav>
        <Ul>
          <li>
            <NavLink css={navLinkStyle} to='html'>
              HTML
            </NavLink>
          </li>
          <li>
            <NavLink css={navLinkStyle} to='js'>
              JS
            </NavLink>
          </li>
          <li>
            <NavLink css={navLinkStyle} to='react'>
              React
            </NavLink>
          </li>
        </Ul>
      </nav>
      <Outlet />
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Ul = styled.ul`
  width: 200px;
  border: 1px solid tomato;
`;

const navLinkStyle = css`
  display: block;
  padding: 10px 0;
  margin: 10px 0;
  ${mainMenuBackground}

  &.active {
    ${mainMenuBackgroundClick}
  }
`;
