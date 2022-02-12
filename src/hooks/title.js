import { useLocation } from "react-router-dom";

export function useTitle() {
  const { pathname } = useLocation();
  console.log(useLocation());
  const title = pathname.split("/").pop();
  return title;
}
