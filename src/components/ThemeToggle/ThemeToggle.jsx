import React from "react";
import styled from "styled-components";

function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleWrapper onClick={toggle} mode={mode}>
      {mode === "dark" ? "🌚" : "🌞"}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.div`
  position: fixed;
  bottom: 4%;
  right: 3%;
  z-index: 1;
  font-size: 50px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  /* background-color: ${(props) => props.theme.bgColor}; */
  /* border: ${(props) => props.theme.btnBorder}; */
  /* box-shadow: ${(props) =>
    props.mode === "dark"
      ? "0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)"
      : "0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)"}; */
`;
