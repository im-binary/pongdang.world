import { useEffect, useState } from "react";

export function useScrollY() {
  const [srollY, setScrollY] = useState(0);

  function scrollTextEvent() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollTextEvent);

    return () => {
      window.removeEventListener("scroll", scrollTextEvent);
    };
  }, []);

  return srollY;
}
