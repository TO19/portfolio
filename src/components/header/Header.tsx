import React, { ReactElement, useCallback, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Switch } from "@material-ui/core";
import { ThemeContext } from "../../providers/AppProviders";
import { useStyles } from "../../shared/hooks/use-styles";

const rocket = require("../../assets/rocket.svg");

export default function Header(): ReactElement {
  const themeContext = useContext(ThemeContext);
  const classes = useStyles();
  const onChangeSwitchTheme = useCallback(
    () => themeContext.handleThemeSwitch(),
    [themeContext]
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={rocket} alt="Application logo" width="60px" height="60px" />
        <Typography variant="h5" align="left" className={classes.headerTitle}>
          {/* Phamton div */}
        </Typography>
        <Switch
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
