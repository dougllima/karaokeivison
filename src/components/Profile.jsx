import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { GithubPicker, CirclePicker, TwitterPicker } from "react-color";
import AppContext from "../lib/appContext";
import * as Themes from "../lib/themes";
import User from "./User";
import color from "../../node_modules/@material-ui/core/colors/grey";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { loged: false };
  }

  changeTheme = (color, setTheme) => {
    const themeColor = Themes.getTheme(color.hex);

    var theme = {
      palette: {
        primary: themeColor,
        secondary: themeColor,
        type: "dark"
      }
    };
    console.log(theme, themeColor);

    setTheme(theme);
  };

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const { user, userTheme, setTheme } = value;
          return (
            <div style={{ padding: "10px" }}>
              <GithubPicker
                width="250px"
                triangle="hide"
                colors={Themes.getColors()}
                onChange={(color, event) => this.changeTheme(color, setTheme)}
              />
              <br />
              <CirclePicker width="294px" colors={Themes.getColors()} />
              <br />
              <TwitterPicker
                triangle="hide"
                width="204px"
                colors={Themes.getColors()}
              />
              <User user={user} />
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default withStyles(styles)(Profile);
