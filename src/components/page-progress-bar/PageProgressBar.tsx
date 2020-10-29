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
          transform: `scale(1, ${scroll / 100})`,
          opacity: `${scroll / 100}`,
          background: theme.palette.secondary.main,
          transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
      />
    </div>
  );
}
