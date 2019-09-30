import React, { Component } from 'react';

import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import { RoomProvider } from './contexts/RoomContext';

import { withTheme } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { CssBaseline } from '@material-ui/core';

import { StyleProvider, StyleContext } from './contexts/StyleContext';
import { UserProvider } from './contexts/UserContext';

import Root from './Root';

import 'typeface-roboto';

library.add(fab);

const pubnubClient = new PubNub({
  publishKey: 'pub-c-5ba4f17c-e63f-48ef-a762-78672617aaca',
  subscribeKey: 'sub-c-61929616-e13d-11e9-875e-e6d5a3474134'
});

class App extends Component {
  render() {
    return (
      <PubNubProvider client={pubnubClient}>
        <UserProvider>
          <RoomProvider>
            <StyleProvider>
              <StyleContext.Consumer>
                {value => {
                  var { theme } = value;
                  return (
                    <MuiThemeProvider theme={createMuiTheme(theme)}>
                      <CssBaseline />
                      <Root />
                    </MuiThemeProvider>
                  );
                }}
              </StyleContext.Consumer>
            </StyleProvider>
          </RoomProvider>
        </UserProvider>
      </PubNubProvider>
    );
  }
}
export default withTheme(App);
