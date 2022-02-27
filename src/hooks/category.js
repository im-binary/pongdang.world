import { useLocation } from "react-router-dom";

export function useCategory() {
  const { pathname } = useLocation();
  const [, depth1, depth2] = pathname.split("/");
  return [depth1, depth2].join("/");
}
