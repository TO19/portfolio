import React, { ReactElement, useState } from "react";
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
  const [appLoading, setAppLoading] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, type, handleThemeSwitch }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {appLoading ? (
          <div
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span role="img" aria-label="Loading state">
              🤔
            </span>
          </div>
        ) : (
          props.children
        )}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
