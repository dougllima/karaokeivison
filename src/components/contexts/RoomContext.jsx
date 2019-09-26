import React, { useState, useEffect } from "react";

export const RoomContext = React.createContext({});

export const RoomProvider = props => {
  const [room, setRoom] = useState({});

  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      {props.children}
    </RoomContext.Provider>
  );
};
