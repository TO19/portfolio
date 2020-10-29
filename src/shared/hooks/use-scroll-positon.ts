import { useState, useEffect } from "react";
export default function useScrollPosition() {
  const [scroll, setScroll] = useState<number>(0);
  function getDocHeight(): number {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  }
  function getPercentageScroll() {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = (scrollTop / totalDocScrollLength) * 100;
    console.log(scrollPostion);
    setScroll(scrollPostion);
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      getPercentageScroll();
    });

    return () =>
      window.removeEventListener("scroll", () => {
        getPercentageScroll();
      });
  });
  return scroll;
}
