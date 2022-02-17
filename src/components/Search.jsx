import React from "react";
import { css } from "@emotion/react";
import { boldTitleFont } from "../style/theme";
// import Information from "../constants/Infomation";

export default function Search() {
  const handleSearchChange = (e) => {
    console.log(e.target.value.toLowerCase());
  };

  // const items = Information.map((data) => {
  //   return (
  //     <div>
  //       <ul>
  //         <li>{data.title}</li>
  //         <li>{data.category}</li>
  //       </ul>
  //     </div>
  //   );
  // });

  return (
    <div>
      <input onChange={handleSearchChange} type='text' css={inputStyle} placeholder='검색어를 입력해주세요' />
      {/* <div>{items}</div> */}
    </div>
  );
}

const inputStyle = css`
  width: 100%;
  height: 46px;
  padding: 0 10px;
  border: 3px solid #1908a8;
  ${boldTitleFont}
  letter-spacing: 2px;
  font-size: 20px;
`;
