import React, { useContext } from "react";
import "./page-progress-bar.scss";
import { ThemeContext } from "../../providers/AppProviders";
import useScrollPosition from "../../shared/hooks/use-scroll-positon";

export default function PageProgressBar(): JSX.Element {
  const scroll = useScrollPosition();
  const { theme } = useContext(ThemeContext);
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
