import React, { useContext, useEffect } from 'react';
import * as colors from '@material-ui/core/colors';
import { UserContext } from './UserContext';

export const StyleContext = React.createContext({});

const defaultTheme = {
  palette: {
    primary: { main: colors.lightBlue[500] },
    secondary: { main: colors.blue[500] },
    type: 'dark',
    background: {
      color: '#fff'
    }
  }
};

export const StyleProvider = props => {
  const { profile, setProfile } = useContext(UserContext);
  const [theme, setTheme] = React.useState(defaultTheme);

  const saveTheme = () => {
    setProfile({ ...profile, theme });
  };

  useEffect(() => {
    if (profile && profile.theme) setTheme(profile.theme);
    else setTheme(defaultTheme);
  }, [profile]);

  return (
    <StyleContext.Provider value={{ theme, setTheme, saveTheme }}>
      {props.children}
    </StyleContext.Provider>
  );
};
