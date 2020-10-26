import React, { ReactElement, useCallback, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Switch } from "@material-ui/core";
import { ThemeContext } from "../../providers/AppProviders";
import { useStyles } from "../../shared/hooks/use-styles";
import RocketSVG from "../rocket-svg/RocketSVG";
import useWindowPosition from "../../shared/hooks/use-window-position";
import { headerFadeBP } from "../../shared/constants/scroll.const";
import PageProgressBar from "../page-progress-bar/PageProgressBar";

export default function Header(): ReactElement {
  const themeContext = useContext(ThemeContext);
  const classes = useStyles();
  const onChangeSwitchTheme = useCallback(
    () => themeContext.handleThemeSwitch(),
    [themeContext]
  );
  const windowPos = useWindowPosition();

  return (
    <AppBar
      position="sticky"
      color={windowPos > headerFadeBP ? "primary" : "secondary"}
      elevation={windowPos > headerFadeBP ? 0 : 4}
      style={{
        transition: "background 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }}
    >
      <PageProgressBar />
      <Toolbar>
        <Typography variant="h5" align="left" className={classes.headerTitle}>
          <RocketSVG width="50px" height="50px" transform="rotate(90)" />
          {/* Phamton div */}
        </Typography>
        <Switch
          color={windowPos > headerFadeBP ? "secondary" : "primary"}
          checked={themeContext.type === "dark"}
          onChange={onChangeSwitchTheme}
          size="small"
          name="ThemeToggle"
          inputProps={{ "aria-label": "theme toggle checkbox" }}
        />
      </Toolbar>
    </AppBar>
  );
}
