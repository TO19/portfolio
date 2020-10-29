import React, { useContext } from "react";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";
import { ThemeContext } from "../../providers/AppProviders";
import useWindowPosition from "../../shared/hooks/use-window-position";
import { headerFadeBP } from "../../shared/constants/scroll.const";
import useScrollPosition from "../../shared/hooks/use-scroll-positon";

interface RocketSVGProps {
  width: string;
  height: string;
}

export default function RocketSVG(props: RocketSVGProps) {
  const { theme } = useContext(ThemeContext);
  const scroll = useScrollPosition();
  const windowPos = useWindowPosition();
  const rocketRotateDeg = windowPos > headerFadeBP ? 180 : 90;
  return (
    <div
      style={{
        position: "absolute",
        top: scroll + "%",
        left: "20px",
        zIndex: 1919,
        transition: "top 100ms linear steps(10000)",
      }}
    >
      <Rocket
        fill={
          windowPos > headerFadeBP
            ? theme.palette.secondary.main
            : theme.palette.primary.main
        }
        width={props.width}
        height={props.height}
        transform={`rotate(${rocketRotateDeg})`}
      />
    </div>
  );
}
