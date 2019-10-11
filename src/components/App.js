import React from 'react';

import { CssBaseline } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { RoomProvider } from './contexts/RoomContext';
import { UserProvider } from './contexts/UserContext';
import { ChatProvider } from './contexts/ChatContext';
import { StyleProvider, StyleContext } from './contexts/StyleContext';

import Routes from './Routes';

import 'typeface-roboto';

library.add(fab);

const App = () => {
  return (
    <UserProvider>
      <RoomProvider>
        <ChatProvider>
          <StyleProvider>
            <StyleContext.Consumer>
              {value => {
                var { theme } = value;
                return (
                  <MuiThemeProvider theme={createMuiTheme(theme)}>
                    <CssBaseline />
                    <Routes />
                  </MuiThemeProvider>
                );
              }}
            </StyleContext.Consumer>
          </StyleProvider>
        </ChatProvider>
      </RoomProvider>
    </UserProvider>
  );
};
export default withTheme(App);
