import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

export default function PostPage() {
  let [contents, setContents] = useState("");
  let { id } = useParams();
  // 게시물을 불러오는 방법
  // 1. API(fetch, ajax, axios)를 써서 서버 혹은 cdn에서 불러온다.
  // 2. 상수값으로 불러오자
  useEffect(() => {
    (() => import("../../constants/html/" + id + ".js"))().then(({ default: contents }) => setContents(contents));
  }, [id]);

  return (
    <WrapperDiv>
      <H1>{id}</H1>
      <div dangerouslySetInnerHTML={{ __html: contents }}></div>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  border: 3px solid green;
  padding: 30px 30px;
  text-align: start;
  width: 100%;
`;

const H1 = styled.h1`
  margin: 0 0 30px;
`;
