import React from "react";
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import ListTypeA from "../../components/ListType/ListTypeA";
import ListTypeB from "../../components/ListType/ListTypeB";

function ListPage() {
  const dispatch = useDispatch();

  function listmode(state) {
    if (state.mode === "A") {
      localStorage.setItem("mode", state.mode);
      return <ListTypeA />;
    } else if (state.mode === "B") {
      localStorage.setItem("mode", state.mode);
      return <ListTypeB />;
    }
  }
  const List = useSelector(listmode);

  return useSelector(({ mode }) => (
    <>
      <div css={buttonContainer}>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_A" });
          }}
          style={{
            backgroundColor: mode === "A" ? "#8dafff" : "",
          }}
        >
          긴 네모로 보기
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_B" });
          }}
          style={{
            backgroundColor: mode === "B" ? "#8dafff" : "",
          }}
        >
          통통한 네모로 보기
        </button>
      </div>
      {List}
    </>
  ));
}

const buttonContainer = css`
  margin-top: 20px;
  button {
    padding: 10px 20px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background-color: #c8d9ff;
    }
    &:active {
      transform: scale(0.95);
    }
  }
  button + button {
    margin-left: 20px;
  }
`;

export default ListPage;
