import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TestPage() {
  const dispatch = useDispatch();

  function f(state) {
    if (state.mode === "A") {
      localStorage.setItem("mode", state.mode);
      return (
        <div>
          기본 {state.mode}
          <ul>
            <li>고양이</li>
            <li>개</li>
            <li>새</li>
            <li>펭귄</li>
            <li>코끼리</li>
            <li>호랑이</li>
          </ul>
        </div>
      );
    } else if (state.mode === "B") {
      localStorage.setItem("mode", state.mode);
      return (
        <div>
          grid {state.mode}
          <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            <li>고양이</li>
            <li>개</li>
            <li>새</li>
            <li>펭귄</li>
            <li>코끼리</li>
            <li>사자</li>
            <li>호랑이</li>
          </ul>
        </div>
      );
    }
  }
  const mode = useSelector(f);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_A" });
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_B" });
        }}
      >
        B
      </button>
      {mode}
    </div>
  );
}
