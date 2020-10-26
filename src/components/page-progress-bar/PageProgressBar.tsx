import React, { useContext, useEffect, useState } from "react";
import "./page-progress-bar.scss";
import { ThemeContext } from "../../providers/AppProviders";

export default function PageProgressBar(): JSX.Element {
  const [scroll, setScroll] = useState<string>("0");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    function progressBarHandler() {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    }

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });
  return (
    <div id="progress-bar-container">
      <div
        id="progress-bar"
        style={{
          transform: `scale(${scroll}, 1)`,
          opacity: `${scroll}`,
          background: theme.palette.secondary.main,
        }}
      />
    </div>
  );
}
