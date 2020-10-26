import React, { useContext } from "react";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";
import { ThemeContext } from "../../providers/AppProviders";
import useWindowPosition from "../../shared/hooks/use-window-position";
import { headerFadeBP } from "../../shared/constants/scroll.const";

interface RocketSVGProps {
  width: string;
  height: string;
  transform?: string;
}

export default function RocketSVG(props: RocketSVGProps) {
  const { theme } = useContext(ThemeContext);
  const windowPos = useWindowPosition();

  return (
    <Rocket
      fill={
        windowPos > headerFadeBP
          ? theme.palette.secondary.main
          : theme.palette.primary.main
      }
      width={props.width}
      height={props.height}
      transform={props.transform ?? ""}
    />
  );
}
