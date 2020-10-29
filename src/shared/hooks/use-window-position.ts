import { useLayoutEffect, useState } from "react";

export default function useWindowPosition() {
  const [scrollPosition, setPosition] = useState<number>(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
}
