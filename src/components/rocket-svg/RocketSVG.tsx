import React, {
  useContext,
  ReactElement,
  useState,
  useLayoutEffect,
} from "react";
import { ReactComponent as Rocket } from "../../assets/rocket.svg";
import { ThemeContext } from "../../providers/AppProviders";
import useWindowPosition from "../../shared/hooks/use-window-position";
import { headerFadeBP } from "../../shared/constants/scroll.const";

interface RocketSVGProps {
  width: string;
  height: string;
}

export default function RocketSVG(props: RocketSVGProps): ReactElement {
  const [lastWindowPos, setLastWindowPos] = useState<number>(0);
  const [rocketRotateDeg, setRocketRotateDeg] = useState<number>(90);
  const { theme } = useContext(ThemeContext);
  const windowPos = useWindowPosition();

  useLayoutEffect(() => {
    if (windowPos === 0) {
      setRocketRotateDeg(90);
    }
    if (lastWindowPos < windowPos) {
      setRocketRotateDeg(180);
    }

    if (lastWindowPos > windowPos) {
      setRocketRotateDeg(0);
    }

    setLastWindowPos(windowPos);
  }, [windowPos, lastWindowPos]);

  return (
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
  );
}
