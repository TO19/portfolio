import React, { ReactElement } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useTheme } from "../shared/hooks/use-theme";

interface ThemeProviderType {
  theme: any;
  type: "dark" | "light";
  handleThemeSwitch: () => void;
}

export const ThemeContext = React.createContext<ThemeProviderType>(
  {} as ThemeProviderType
);

export default function AppProviders(props: any): ReactElement {
  const [theme, type, handleThemeSwitch] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, type, handleThemeSwitch }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
