import React, { Component } from 'react';
import { UserContext } from '../Contexts/UserContext';
import User from './User';
import ThemePicker from './ThemePicker';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { logged: false };
  }

  render() {
    return (
      <UserContext.Consumer>
        {value => {
          const { user } = value;
          return (
            <div style={{ padding: '10px' }}>
              <ThemePicker />
              <User user={user} />
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Profile;
