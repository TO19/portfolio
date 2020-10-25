import { useState, useMemo } from "react";
import { PaletteType, createMuiTheme } from "@material-ui/core";
import { deepOrange, deepPurple, lightBlue } from "@material-ui/core/colors";

export type UseThemeType = [any, PaletteType, () => void];

export const useTheme = (): UseThemeType => {
  const [type, setThemeType] = useState<PaletteType>("light");

  const theme = useMemo(() => {
    const mainPrimaryColor = type === "dark" ? deepOrange[500] : lightBlue[500];
    const mainSecondaryColor =
      type === "dark" ? deepOrange[900] : deepPurple[500];
    return createMuiTheme({
      palette: {
        type: type,
        primary: {
          main: mainPrimaryColor,
        },
        secondary: {
          main: mainSecondaryColor,
        },
      },
    });
  }, [type]);

  const handleThemeSwitch = (): void =>
    setThemeType(type === "dark" ? "light" : "dark");

  return [theme, type, handleThemeSwitch];
};
