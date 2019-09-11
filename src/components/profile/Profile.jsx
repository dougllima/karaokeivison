import React, { Component } from "react";
import AppContext from "../../lib/appContext";
import User from "./User";
import ThemePicker from "./ThemePicker";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { logged: false };
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const { user } = value;
          return (
            <div style={{ padding: "10px" }}>
              <ThemePicker />
              <User user={user} />
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Profile;
