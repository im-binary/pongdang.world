import { useEffect, useState } from "react";
import { useCategory } from "./category";
import { getPostList } from "./../remotes/post";

export function usePostTitleList() {
  const category = useCategory();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function updatePostList() {
      try {
        const { data } = await getPostList(category);
        setPostList(data);
      } catch {
        setPostList([]);
      }
    }
    updatePostList();
  }, [category]);

  return postList;
}
