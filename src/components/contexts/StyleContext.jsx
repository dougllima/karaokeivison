import React, { useContext, useEffect } from "react";
import * as colors from "@material-ui/core/colors";
import { UserContext } from "./UserContext";

export const StyleContext = React.createContext({});

const defaultTheme = {
  palette: {
    primary: colors.lightBlue,
    secondary: colors.blue,
    type: "dark",
    background: {
      color: "#fff"
    }
  }
};

export const StyleProvider = props => {
  const { profile, setProfile } = useContext(UserContext);
  const [theme, setTheme] = React.useState(defaultTheme);

  const saveTheme = () => {
    window.alert("Tema Salvo");
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
