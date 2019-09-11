import React, { Component } from "react";
import { TwitterPicker, GithubPicker, CirclePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import * as Themes from "../../lib/themes";
import AppContext from "../../lib/appContext";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { Grid, Paper } from "@material-ui/core";
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
  constructor(props) {
    super(props);

    this.state = {
      primary: "",
      secondary: ""
    };
  }
  changeTheme = (parammeter, name, setTheme) => {
    var theme = JSON.parse(localStorage.getItem("userTheme"));

    var primary = theme.palette.primary;
    var secondary = theme.palette.secondary;
    var type = theme.palette.type;

    switch (name) {
      case "primary":
        this.setState({ primary: parammeter.hex });
        primary = Themes.getTheme(parammeter.hex);
        break;
      case "secondary":
        this.setState({ secondary: parammeter.hex });
        secondary = Themes.getTheme(parammeter.hex);
        break;
      case "type":
        type = parammeter;
        break;
      default:
        break;
    }

    theme = {
      ...theme,
      palette: {
        primary: primary,
        secondary: secondary,
        type: type,
        background: {
          default: type === "light" ? "#fff" : "#333"
        }
      }
    };

    setTheme(theme);
  };

  saveThemeMiddleware = (user, theme, saveTheme) => {
    saveTheme(theme);
  };

  render() {
    const { classes } = this.props;

    return (
      <AppContext.Consumer>
        {value => {
          console.log(value);
          const { user, userTheme, setTheme, saveTheme } = value;
          return (
            <Grid container spacing={32}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper>
                  <TwitterPicker
                    triangle="hide"
                    width="204px"
                    colors={Themes.getColors()}
                    onChange={(color, event) =>
                      this.changeTheme(color, "primary", setTheme)
                    }
                    color={this.state.primary}
                  />
                  <br />
                  <TwitterPicker
                    triangle="hide"
                    width="204px"
                    colors={Themes.getColors()}
                    onChange={(color, event) =>
                      this.changeTheme(color, "secondary", setTheme)
                    }
                    color={this.state.secondary}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper>
                  <CirclePicker
                    width="210px"
                    colors={Themes.getColors()}
                    onChange={(color, event) =>
                      this.changeTheme(color, "primary", setTheme)
                    }
                    color={this.state.primary}
                  />
                  <hr />
                  <CirclePicker
                    width="210px"
                    colors={Themes.getColors()}
                    onChange={(color, event) =>
                      this.changeTheme(color, "secondary", setTheme)
                    }
                    color={this.state.secondary}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper>
                  <GithubPicker
                    triangle="hide"
                    colors={Themes.getColors()}
                    onChange={(color, event) =>
                      this.changeTheme(color, "primary", setTheme)
                    }
                    color={this.state.primary}
                  />
                  <br />
                  <GithubPicker
                    triangle="hide"
                    colors={Themes.getColors()}
                    onChange={(color, event) =>
                      this.changeTheme(color, "secondary", setTheme)
                    }
                    color={this.state.secondary}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper>
                  <div className={classes.toggleContainer}>
                    <ToggleButtonGroup
                      value={userTheme.palette.type}
                      exclusive
                      color="primary"
                      onChange={value =>
                        this.changeTheme(value, "type", setTheme)
                      }
                    >
                      <ToggleButton value="dark">
                        <LightBulb type={userTheme.palette.type} />
                      </ToggleButton>
                      <ToggleButton value="light">
                        <LightBulbOn type={userTheme.palette.type} />
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
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
                </Paper>
              </Grid>
            </Grid>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default withStyles(styles)(ThemePicker);
