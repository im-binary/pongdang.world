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
        }}
      >
        긴 네모로 보기
      </button>
      <button
        onClick={() => dispatch({ type: "CHANGE_B" })}
        style={{
          backgroundColor: isLongList ? "" : "#8dafff",
        }}
      >
        통통한 네모로 보기
      </button>
    </div>
  );
}

const buttonContainer = css`
  margin-top: 20px;
  text-align: end;
  button {
    margin-right: 20px;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 15px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:active {
      transform: scale(0.95);
    }
  }
`;
