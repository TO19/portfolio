import { useState, useMemo } from "react";
import { PaletteType, createMuiTheme } from "@material-ui/core";

export type UseThemeType = [any, PaletteType, () => void];

export const useTheme = (): UseThemeType => {
  const [type, setThemeType] = useState<PaletteType>("light");

  const theme = useMemo(() => {
    const mainPrimaryColor = type === "dark" ? "#303030" : "#FAFAFA";
    const mainSecondaryColor = type === "dark" ? "#FAFAFA" : "#303030";
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
      typography: {
        fontFamily: [
          "Montserrat",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
    });
  }, [type]);

  const handleThemeSwitch = (): void =>
    setThemeType(type === "dark" ? "light" : "dark");

  return [theme, type, handleThemeSwitch];
};
