import React, { ReactElement, useCallback, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Switch } from "@material-ui/core";
import { ThemeContext } from "../../providers/AppProviders";
import { useStyles } from "../../shared/hooks/use-styles";
import useWindowPosition from "../../shared/hooks/use-window-position";
import { headerFadeBP } from "../../shared/constants/scroll.const";
import RocketSVG from "../rocket-svg/RocketSVG";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Header(): ReactElement {
  const themeContext = useContext(ThemeContext);
  const matches = useMediaQuery("(max-width:1131px)");
  const classes = useStyles();
  const windowPos = useWindowPosition();
  const onChangeSwitchTheme = useCallback(
    () => themeContext.handleThemeSwitch(),
    [themeContext]
  );
  return (
    <>
      <AppBar
        position="sticky"
        color={windowPos > headerFadeBP ? "transparent" : "secondary"}
        elevation={windowPos > headerFadeBP ? 0 : 4}
        style={{
          transition: "background 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
      >
        {!matches || (matches && windowPos <= 0) ? (
          <Toolbar>
            <Typography
              variant="h5"
              align="left"
              className={classes.headerTitle}
            >
              <RocketSVG width="50px" height="50px" />
              {/* Phamtom */}
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
        ) : null}
      </AppBar>
    </>
  );
}
