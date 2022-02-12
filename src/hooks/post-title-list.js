import { useEffect, useState } from "react";
import { useTitle } from "./title";

// 1. 함수 실행됨
export function usePostTitleList() {
  // 2. title 구해짐
  const title = useTitle();
  // 3. postTitleList라는 state가 초기화(생성)된다.
  const [postTitleList, setPostTitleList] = useState([]);

  // 4. useEffect가 선언되면서 등록된다.
  useEffect(() => {
    // a1. updatePostTitleList가 정의된다.
    async function updatePostTitleList() {
      // a3. getPostTitleList에서 title을 통해 list를 구한다.
      const postTitleList = await getPostTitleList(title);
      // a5. list를 구해서 setPostTitleList를 통해 업데이트 했다.
      setPostTitleList(postTitleList);
    }
    // a2. updatePostTitleList가 실행된다.
    updatePostTitleList();
  }, [title]);

  // 5. postTitleList가 반환된다.
  // a6. 반환된 postTitleList가 업데이트된다.
  return postTitleList;
}

async function getPostTitleList(title) {
  // a4. postTitleList를 dynamic import를 통해 구해온다.
  const { default: postTitleList } = await import(`../constants/post/${title}/post-title-list.json`);
  return postTitleList;
}
