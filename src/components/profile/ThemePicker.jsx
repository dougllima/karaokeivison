import React, { Component } from "react";
import { TwitterPicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import * as Themes from "../../lib/themes";
import AppContext from "../../lib/appContext";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ToggleButton, { ToggleButtonGroup } from "@material-ui/lab/ToggleButton";

import LightBulb from "./../layout/LightBulb";
import LightBulbOn from "./../layout/LightBulbOn";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  toggleContainer: {
    height: 56,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: `${theme.spacing.unit}px 0`,
    background: theme.palette.background.default
  }
});

class ThemePicker extends Component {
  changeTheme = (parammeter, name, setTheme) => {
    var theme = JSON.parse(localStorage.getItem("userTheme"));

    var primary = theme.palette.primary;
    var secondary = theme.palette.secondary;
    var type = theme.palette.type;

    switch (name) {
      case "primary":
        primary = Themes.getTheme(parammeter.hex);
        break;
      case "secondary":
        secondary = Themes.getTheme(parammeter.hex);
        break;
      case "type":
        type = parammeter;
        break;
    }

    var theme = {
      palette: {
        primary: primary,
        secondary: secondary,
        type: type,
        background: {
          default: this.type === "light" ? "#000" : "#fff"
        }
      }
    };

    setTheme(theme);
  };

  saveThemeMiddleware = (user, theme, saveTheme) => {
    var userTheme = {
      user: user.uid,
      theme
    };
    saveTheme(userTheme);
  };

  render() {
    const { classes } = this.props;

    return (
      <AppContext.Consumer>
        {value => {
          const { user, userTheme, setTheme, saveTheme } = value;
          return (
            <div>
              <TwitterPicker
                triangle="hide"
                width="204px"
                colors={Themes.getColors()}
                onChange={(color, event) =>
                  this.changeTheme(color, "primary", setTheme)
                }
              />
              <TwitterPicker
                triangle="hide"
                width="204px"
                colors={Themes.getColors()}
                onChange={(color, event) =>
                  this.changeTheme(color, "secondary", setTheme)
                }
              />
              <Button
                color="secondary"
                variant="raised"
                onClick={() =>
                  this.saveThemeMiddleware(user, userTheme, saveTheme)
                }
              >
                <SaveIcon />
                Salvar Mudanças
              </Button>
              <div className={classes.toggleContainer}>
                <ToggleButtonGroup
                  value={userTheme.palette.type}
                  exclusive
                  color="primary"
                  onChange={value => this.changeTheme(value, "type", setTheme)}
                >
                  <ToggleButton value="dark">
                    <LightBulb type={userTheme.palette.type} />
                  </ToggleButton>
                  <ToggleButton value="light">
                    <LightBulbOn type={userTheme.palette.type} />
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default withStyles(styles)(ThemePicker);
