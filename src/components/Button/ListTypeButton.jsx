import React from "react";
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";

export default function ListTypeButton() {
  const isLongList = useSelector(({ listType }) => listType === "A");
  const dispatch = useDispatch();

  return (
    <div className='list-type-button' css={buttonContainer}>
      <button
        onClick={() => dispatch({ type: "CHANGE_A" })}
        style={{
          backgroundColor: isLongList ? "#8dafff" : "",
          color: isLongList ? "#4141f5" : "",
        }}
      >
        <i className='fa-solid fa-align-center'></i>
      </button>
      <button
        onClick={() => dispatch({ type: "CHANGE_B" })}
        style={{
          backgroundColor: isLongList ? "" : "#8dafff",
          color: isLongList ? "" : "#4141f5",
        }}
      >
        <i className='fa-solid fa-square'></i>
      </button>
    </div>
  );
}

const buttonContainer = css`
  margin-top: 20px;
  text-align: end;
  button {
    margin-right: 20px;
    padding: 4px 12px;
    font-size: 18px;
    border: none;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
